import type { GetServerSideProps, NextPage } from 'next'
import InfiniteScroll from 'react-infinite-scroll-component'
import type { BaseCardProps } from '../components/card/base/BaseCard'
import { BaseCard } from '../components/card/base/BaseCard'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import type { PodiumStep } from '../components/podium/Podium'
import { Podium } from '../components/podium/Podium'
import { config } from '../lib/config'
import type { Config } from '../types/config.type'
import { LeaderboardTable } from '../components/table/LeaderboardTable'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import type { DragoonDescriptor, PodiumDragoon } from '../entity/dragoon'
import type { PhaseDescriptor } from '../entity/phase'
import {
  useQBoardPodiumQuery,
  useQBoardQuery,
  useQPhasesQuery,
  useQValidatorCountQuery
} from '../graphql/generated/query/types'
import { Snackbar } from '../components/snackbar/Snackbar'
import { Countdown } from '../components/countdown/Countdown'
import {
  mapValidatorEdgeDTOToDragoon,
  mapPodiumValidatorEdgeDTOToPodiumDragoon
} from '../graphql/dto/mapper'
import client from '../graphql/apolloClient'

export type LeaderboardProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const Leaderboard: NextPage<LeaderboardProps> = props => {
  const [dragoons, setDragoons] = useState<DragoonDescriptor[]>([])
  const [podium, setPodium] = useState<PodiumDragoon[]>([])
  const [dragoonCount, setDragoonCount] = useState<number>(0)
  const [activePhase, setActivePhase] = useState<PhaseDescriptor | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSearchMode, setSearchMode] = useState<boolean>(false)
  const { urls } = props
  const { graphqlUri } = urls
  const gqlClient = useMemo(() => client(graphqlUri), [graphqlUri])

  const { error: boardPodiumError } = useQBoardPodiumQuery({
    fetchPolicy: 'network-only',
    variables: { first: 3 },
    client: gqlClient,
    onCompleted: data => setPodium(data.board.edges.map(mapPodiumValidatorEdgeDTOToPodiumDragoon))
  })

  const { error: validatorCountError, loading: validatorCountLoading } = useQValidatorCountQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    client: gqlClient,
    onCompleted: data => setDragoonCount(data.validatorCount)
  })

  const {
    data: boardData,
    error: boardError,
    loading: boardLoading,
    refetch: boardReftech,
    variables
  } = useQBoardQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    client: gqlClient,
    onCompleted: data => {
      const newData = data.board.edges.map(mapValidatorEdgeDTOToDragoon)
      isSearchMode && !variables?.after
        ? setDragoons(newData)
        : setDragoons(prev => [...prev, ...newData])
    }
  })

  const { error: phaseError, loading: phaseLoading } = useQPhasesQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    client: gqlClient,
    onCompleted: data => setActivePhase(data.phases.current ?? null)
  })

  const resetErrorMessage = useCallback(() => {
    setErrorMessage(null)
  }, [setErrorMessage])

  useEffect(() => {
    if (validatorCountError || phaseError || boardError || boardPodiumError)
      setErrorMessage('Oops... Dragoons could not be properly retrieved... Please try again later.')
  }, [validatorCountError, phaseError, boardError, boardPodiumError])

  const handleSearchChange = useCallback(
    (value: string): void => {
      if (value.length >= 2) {
        setSearchMode(true)
        boardReftech({ search: value, after: null })
      } else if (!value.length) {
        boardReftech({ search: value, after: null }).then(() => setSearchMode(false))
      }
    },
    [boardReftech]
  )

  const fetchMoreDragoons = useCallback(() => {
    const lastCursor = boardData?.board.pageInfo.endCursor
    !boardLoading && boardReftech({ after: lastCursor })
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  }, [boardData?.board?.pageInfo.endCursor, boardLoading, boardReftech])

  const summaryCards: Array<Omit<BaseCardProps, 'loading'> | null> = useMemo(
    () => [
      {
        ...(dragoonCount && {
          title: (
            <h1 className="furya-praetoria-web-page-leaderboard-summary-card-title">{dragoonCount}</h1>
          )
        }),
        description: (
          <p className="furya-praetoria-web-page-leaderboard-summary-card-description">
            {!dragoonCount ? 'Dragoons are getting ready to participate...' : 'Active dragoons'}
          </p>
        ),
        disabled: !dragoonCount,
        disabledBackgroundImageUrl: '/icons/dragoon-staff.svg'
      },
      activePhase && {
        title: (
          <div className="furya-praetoria-web-page-leaderboard-summary-card-title-container">
            <h2 className="furya-praetoria-web-page-leaderboard-summary-card-title">{`Phase ${activePhase.number}`}</h2>
            <h1 className="furya-praetoria-web-page-leaderboard-summary-card-title uppercase">
              {activePhase.name}
            </h1>
          </div>
        ),
        description: (
          <p className="furya-praetoria-web-page-leaderboard-summary-card-description">
            Current phase name
          </p>
        ),
        backgroundImageUrl: `/image/${activePhase.name.toLowerCase()}-medium.webp`
      },
      {
        ...(activePhase && {
          title: (
            <div className="furya-praetoria-web-page-leaderboard-summary-card-title">
              <Countdown countdownEndDate={activePhase.endDate} />
            </div>
          )
        }),
        description: (
          <p className="furya-praetoria-web-page-leaderboard-summary-card-description">
            {activePhase
              ? 'Before the end of the current phase'
              : 'Imminent take-off of the phase.'}
          </p>
        ),
        disabled: !activePhase,
        disabledBackgroundImageUrl: '/icons/flame.svg'
      }
    ],
    [activePhase, dragoonCount]
  )

  const podiumSteps: PodiumStep[] = useMemo(
    () =>
      podium.map(
        (dragoon: PodiumDragoon): PodiumStep => ({
          rank: dragoon.rank,
          legend: dragoon.identity.name,
          backgroundImageUrl: dragoon.identity.avatar
        })
      ),
    [podium]
  )

  return (
    <div className="furya-praetoria-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="furya-praetoria-web-page-content-container" id="leaderboard">
          <h1>Leaderboard</h1>
          <div className="furya-praetoria-web-page-divider" />
          <p className="center">Welcome to the Praetoria Leaderboard!</p>
          <div className="furya-praetoria-web-page-leaderboard-summary-container">
            {validatorCountLoading || phaseLoading
              ? [...Array(3)].map((_elt, index) => <BaseCard key={index} loading />)
              : summaryCards
                  .filter(Boolean)
                  .map((card, index) => (
                    <BaseCard
                      backgroundImageUrl={card?.backgroundImageUrl}
                      description={card?.description}
                      disabled={card?.disabled}
                      disabledBackgroundImageUrl={card?.disabledBackgroundImageUrl}
                      key={index}
                      title={card?.title}
                    />
                  ))}
          </div>
          <div className="furya-praetoria-web-page-leaderboard-main-container">
            <div className="furya-praetoria-web-page-leaderboard-main-wrapper">
              <p className="furya-praetoria-web-page-leaderboard-main-description">
                Here you can check the points earned by all the dragoons. Complete more tasks to
                become the leader!
              </p>
              {podium.length > 0 && <Podium steps={podiumSteps} />}
              <InfiniteScroll
                dataLength={dragoons.length}
                hasMore={!boardLoading && !!boardData?.board.pageInfo.hasNextPage}
                loader={null}
                next={fetchMoreDragoons}
                scrollThreshold={0.91}
                style={{ overflow: 'unset' }}
              >
                <LeaderboardTable
                  data={dragoons}
                  loading={boardLoading && !variables?.after}
                  loadingMore={boardLoading && !!variables?.after}
                  onSearchChange={handleSearchChange}
                />
              </InfiniteScroll>
            </div>
          </div>
        </div>
        <Footer urls={urls} />
      </main>
      <Snackbar
        isOpen={!!errorMessage}
        message={errorMessage ?? ''}
        onClose={resetErrorMessage}
        severityLevel="error"
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<LeaderboardProps> = async () => ({
  props: {
    ...config
  }
})

export default Leaderboard
