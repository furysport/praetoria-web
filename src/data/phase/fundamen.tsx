import type { PhasesConfig } from '../../types/config.type'
import { getPhaseStatus } from '../../utils'
import type { PhaseDTO } from './dto.type'

export const fundamen = ({
  fundamen: {
    startDate,
    endDate,
    urls: { originalContentUrl }
  }
}: PhasesConfig): PhaseDTO => ({
  number: 1,
  phaseName: 'fundamen',
  phaseDescription:
    " Join the Dragoons as they lay the groundwork in the genesis of Praetoria-1, setting up their validator environment, participating in the genesis, and getting familiar with the Furya testnet.",
  status: getPhaseStatus(startDate, endDate),
  phaseDuration: {
    from: startDate,
    to: endDate
  },
  tasks: [
    {
      group: 'Nodes',
      taskName: 'Submit your gentx',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Before starting the network, we must to register your validator in the genesis.json.{' '}
              <br />
              The gentx creation and registration procedure are detailed here:{' '}
              <a
                href="https://github.com/furysport/networks/tree/networks/chains/praetoria-1"
                rel="noreferrer"
                target="_blank"
              >
                https://github.com/furysport/networks/tree/networks/chains/praetoria-1
              </a>{' '}
              <br /><br />
              Your gentx shall be submitted through an issue on the{' '}
              <a href=" https://github.com/furysport/networks/" rel="noreferrer" target="_blank">
                https://github.com/furysport/networks
              </a>{' '}
              GitHub repository. <br /><br />
              This task is required to make you visible on the Leaderboard.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>1 000 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              You will receive the points once the Furya team has integrated your gentx in the
              genesis.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>Send the issue number in a private message to @nimrostafarian on Telegram.</p>
          )
        }
      ],
      taskDuration: {
        from: '2024-05-11T00:00:00Z',
        to: '2024-05-17T23:59:00Z'
      },
      points: 1000
    },
    {
      group: 'Nodes',
      taskName: 'Setup your node',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              It is time to make the Praetoria network come alive; you have to set up your node and
              join the network. The technical documentation regarding node setup and network join
              information is here:{' '}
              <a
                href="https://docs.furya.network/guides/join-the-network/become-a-validator"
                rel="noreferrer"
                target="_blank"
              >
                https://docs.furya.network/guides/join-the-network/become-a-validator.
              </a>
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>2 000 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: <p>Your validator is up and running.</p>
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>The validator&apos;s presence in the consensus will be automatically checked.</p>
          )
        }
      ],
      taskDuration: {
        from: '2024-05-11T00:00:00Z',
        to: '2024-06-17T23:59:00Z'
      },
      points: 2000
    },
    {
      group: 'Community',
      taskName: 'Tweet about the Furya testnet',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Publish a tweet about the Praetoria Testnet while including the @FuryaChain tag using
              your validator Twitter account. Feel free to share your excitement!
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>500 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>You will receive the points once the Furya team has reviewed your tweet.</p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: <p>Tweets are automatically tracked.</p>
        }
      ],
      taskDuration: {
        from: '2024-05-11T00:00:00Z',
        to: '2024-06-18T23:59:00Z'
      },
      points: 500
    },
    {
      group: 'Challenges',
      taskName: 'Uptime',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: <p>Maintain the best uptime with your validator.</p>
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: (
            <p>Up to 2 500 points with the following formula: 2 501 ^0,01x - 1 with x = %uptime.</p>
          )
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>You will receive the points once the Furya team has reviewed the total uptime.</p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: <p>Missed blocks are automatically tracked.</p>
        }
      ],
      taskDuration: {
        from: '2024-05-14T00:00:00Z',
        to: '2024-06-18T23:59:00Z'
      },
      points: 2500
    },
    {
      group: 'Challenges',
      taskName: 'Submit an original content related to validation',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Based on your experience as a validator, write an original article, twitter thread or
              video content providing value to other validators and the community in general.
              Content must be in English. <br /><br />
              The content may be used later to bring improvements to the node (
              <a
                href=" https://docs.furya.network/nodes/introduction"
                rel="noreferrer"
                target="_blank"
              >
                https://docs.furya.network/nodes/introduction
              </a>
              ), be referenced in Furya&#39;s Medium ({' '}
              <a href="  https://blog.furya.network/" rel="noreferrer" target="_blank">
                https://blog.furya.network/
              </a>
              ), or shared in social networks. <br /><br />
              If you’ve seen great documentation, articles or content ideas elsewhere, help us bring
              something similar to Furya. Feel free to be creative if you’re in the right mood!
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: (
            <p>
              Up to 10 000 points per Dragoon will be attributed, capped at 150 000 points in total.
            </p>
          )
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <>
              <p>
                Furya team will judge if any submission deserves points or not based on the
                following:
              </p>
              <ul>
                <li>Overall relevance</li>
                <li>Originality</li>
                <li>Completeness</li>
                <li>Readability</li>
                <li>Useful tips</li>
                <li>Good surprises…</li>
              </ul>
              <p>Non-relevant submissions or low-value ones will earn 0 points.</p>
            </>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              Share the content links on{' '}
              <a href={originalContentUrl} rel="noreferrer" target="_blank">
                this form
              </a>
              . Only one submission per dragoon will be studied.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2024-05-11T00:00:00Z',
        to: '2024-06-18T23:59:00Z'
      },
      points: 10000
    }
  ]
})
