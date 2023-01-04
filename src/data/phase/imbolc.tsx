import type { TasksUrls } from '../../types/config.type'
import type { PhaseDTO } from './dto.type'

export const imbolc = ({
  imbolc: { exposeRPCUrl, provideSnapshotUrl, provideDashboardUrl }
}: TasksUrls): PhaseDTO => ({
  number: 2,
  phaseName: 'imbolc',
  phaseDescription:
    "The second phase is focused on testing Druids' performance and uptime. Maintenance tasks and upgrades will be performed to test different kinds of state migrations.",
  phaseDuration: {
    from: '2023-01-02T00:00:00Z',
    to: '2023-01-31T23:59:59Z'
  },
  tasks: [
    {
      group: 'Nodes',
      taskName: 'Expose RPC node',
      taskContent: [
        {
          id: 'description',
          name: 'Description',
          content: <p>Provide a public RPC endpoint.</p>
        },
        {
          id: 'rewards',
          name: 'Rewards',
          content: <p>1 500 points.</p>
        },
        {
          id: 'criteria',
          name: 'Judging Criteria',
          content: (
            <p>
              You will receive the points once the OKP4 team has checked your RPC endpoint
              availability.
            </p>
          )
        },
        {
          id: 'submit',
          name: 'How to Submit',
          content: (
            <p>
              Share the RPC endpoint on{' '}
              <a href={exposeRPCUrl} rel="noreferrer" target="_blank">
                this form
              </a>
              . Only one submission per druid will be studied.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-01-02T00:00:00Z',
        to: '2023-01-31T23:59:59Z'
      },
      points: 1500
    },
    {
      group: 'Nodes',
      taskName: 'Provide snapshots',
      taskContent: [
        {
          id: 'description',
          name: 'Description',
          content: <p>Provide network snapshots.</p>
        },
        {
          id: 'rewards',
          name: 'Rewards',
          content: <p>2 000 points.</p>
        },
        {
          id: 'criteria',
          name: 'Judging Criteria',
          content: (
            <p>
              You will receive the points once the OKP4 team has checked your snapshots
              availability.
            </p>
          )
        },
        {
          id: 'submit',
          name: 'How to Submit',
          content: (
            <p>
              Share the link to your snapshots on{' '}
              <a href={provideSnapshotUrl} rel="noreferrer" target="_blank">
                this form
              </a>
              . Only one submission per druid will be studied.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-01-02T00:00:00Z',
        to: '2023-01-31T23:59:59Z'
      },
      points: 2000
    },
    {
      group: 'Nodes',
      taskName: 'Provide dashboard for the OKP4 network',
      taskContent: [
        {
          id: 'description',
          name: 'Description',
          content: (
            <p>
              Observability is a key element for monitoring network behavior and usage and detect
              possible anomalies, and as a validator you have access to a lot of information and
              metrics. Create and expose a Dashboards with useful KPI and metrics about the Network.
            </p>
          )
        },
        {
          id: 'rewards',
          name: 'Rewards',
          content: <p>2 000 points.</p>
        },
        {
          id: 'criteria',
          name: 'Judging Criteria',
          content: (
            <>
              <p>
                OKP4 team will judge if any submission deserves points or not based on the
                following:{' '}
              </p>
              <ul>
                <li>Overall relevance</li>
                <li>Readability</li>
                <li>Usefulness</li>
              </ul>
              <p>Non-relevant submissions or low-value ones will earn 0 points.</p>
            </>
          )
        },
        {
          id: 'submit',
          name: 'How to Submit',
          content: (
            <p>
              Share the link to your dashboard on{' '}
              <a href={provideDashboardUrl} rel="noreferrer" target="_blank">
                this form
              </a>
              . Only one submission per druid will be studied.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2023-01-02T00:00:00Z',
        to: '2023-01-31T23:59:59Z'
      },
      points: 2000
    },
    {
      group: 'Community',
      taskName: 'Tweet about the uptime war',
      taskContent: [
        {
          id: 'description',
          name: 'Description',
          content: (
            <p>
              Publish a tweet about the Uptime challenge while including the @OKP4_PROTOCOL tag
              using your validator Twitter account. Feel free to share your excitement!
            </p>
          )
        },
        {
          id: 'rewards',
          name: 'Rewards',
          content: <p>500 points.</p>
        },
        {
          id: 'criteria',
          name: 'Judging Criteria',
          content: <p>You will receive the points once the OKP4 team has reviewed your tweet.</p>
        },
        {
          id: 'submit',
          name: 'How to Submit',
          content: <p>Tweets are automatically tracked.</p>
        }
      ],
      taskDuration: {
        from: '2023-01-02T00:00:00Z',
        to: '2023-01-31T23:59:59Z'
      },
      points: 500
    },
    {
      group: 'Challenge',
      taskName: 'Uptime war: prevent getting jailed!',
      taskContent: [
        {
          id: 'description',
          name: 'Description',
          content: (
            <>
              <p>
                Maintain the best uptime with your validator. This is war, we may intentionally
                produce some attacks so be ready!
              </p>
              <p>May the consensus be with you!</p>
            </>
          )
        },
        {
          id: 'rewards',
          name: 'Rewards',
          content: (
            <>
              <p>
                Up to 15 000 points with the following formula: 15 001 ^0,01x - 1 with x = %uptime.
              </p>
              <p>Bonus points for survivors during tx bursts.</p>
            </>
          )
        },
        {
          id: 'criteria',
          name: 'Judging Criteria',
          content: <p>The less blocks your validator miss, the more points you get.</p>
        },
        {
          id: 'submit',
          name: 'How to Submit',
          content: <p>Missed blocks are automatically tracked.</p>
        }
      ],
      taskDuration: {
        from: '2023-01-02T00:00:00Z',
        to: '2023-01-31T23:59:59Z'
      },
      points: 15000
    }
  ],
  status: 'active'
})