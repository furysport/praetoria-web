import type { PhasesConfig } from '../../types/config.type'
import { getPhaseStatus } from '../../utils'
import type { PhaseDTO } from './dto.type'

export const dilatatio = ({ dilatatio: { startDate, endDate } }: PhasesConfig): PhaseDTO => ({
  number: 3,
  phaseName: 'dilatatio',
  phaseDescription:
    'The third phase is focused on governance and chain upgrade. The Dragoons will need to vote on governance proposals to implement the new Furya Logic Module that interprets any Data Space rules!',
  status: getPhaseStatus(startDate, endDate),
  phaseDuration: {
    from: startDate,
    to: endDate
  },
  tasks: [
    {
      group: 'Nodes',
      taskName: 'Governance vote to upgrade the chain',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              We&apos;ll submit a governance proposal concerning the{' '}
              <span className="furya-praetoria-web-bold-text">furya chain</span> upgrade to
              introduce the upgrade to Cosmos-SDK v0.47.8, and new modules: Alliance and TokenFactory. To achieve this
              task you need to submit your vote on this proposal.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>1 500 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              You will receive the points once Furya team has checked your governance vote for
              chain upgrade.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              You just have to vote on the proposal with your validator address - you don&apos;t
              need to do anything else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2024-05-19T12:00:00Z',
        to: '2023-05-20T12:00:00Z'
      },
      points: 1500
    },
    {
      group: 'Nodes',
      taskName: 'Upgrade your node on time',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Once the <span className="furya-praetoria-web-bold-text">furya chain</span> upgrade governance
              proposal is accepted, Dragoons need to perform the update. To achieve this task you need
              to make sure your node is updated on time and doesn&apos;t miss blocks.
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>2 500 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Points will be awarded according to your uptime within the hour following the targeted
              upgrade height.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              Perform the best uptime within the hour following the targeted upgrade height - you
              don&apos;t need to do anything else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2024-05-19T12:00:00Z',
        to: '2024-05-20T23:59:00Z'
      },
      points: 2500
    },
    {
      group: 'Community',
      taskName: 'Tweet about Furya',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              Publish a tweet including the{' '}
              <span className="furya-praetoria-web-bold-text">@Furya_Protocol</span> tag using your
              validator Twitter account. Feel free to share your excitement about the governance
              proposals or the coming upgrade!
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
            <p>You will receive the points once Furya team has reviewed your tweet.</p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              Send the tweet with the right tag and account - You don&apos;t need to do anything
              else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2024-05-19T12:00:00Z',
        to: '2024-06-28T23:59:00Z'
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
          contentDescription: (
            <p>
              Maintain the best uptime during the phase. Besides, make sure to update your node!
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>2 500 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Points are attributed according to the following formula: 2501^0,01x - 1 with x =
              %uptime.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>Perform the best uptime - you don&apos;t need to do anything else.</p>
          )
        }
      ],
      taskDuration: {
        from: '2024-05-19T12:00:00Z',
        to: '2024-08-28T23:59:00Z'
      },
      points: 2500
    }
  ]
})
