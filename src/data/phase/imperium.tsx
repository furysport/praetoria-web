import type { PhasesConfig } from '../../types/config.type'
import { getPhaseStatus } from '../../utils'
import type { PhaseDTO } from './dto.type'

export const imperium = ({
  imperium: {
    startDate,
    endDate,
    urls: { allianceModuleDocsUrl, gasConsumptionTypeformUrl, allianceModuleTypeformUrl }
  }
}: PhasesConfig): PhaseDTO => ({
  number: 4,
  phaseName: 'imperium',
  phaseDescription:
    'The fourth phase tests modules and smart contract performance. It will enable Furya to fine-tune the many custom developments and find inefficiencies and vulnerabilities to improve the code.',
  status: getPhaseStatus(startDate, endDate),
  phaseDuration: {
    from: startDate,
    to: endDate
  },
  tasks: [
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
              validator Twitter account. Feel free to share your excitement about the new
              developments!
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
              Publish a tweet with the right tag and account - You don&apos;t need to do anything
              else.
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2024-05-18T00:00:00Z',
        to: '2023-06-18T23:59:00Z'
      },
      points: 500
    },
    {
      group: 'Challenges',
      taskName: 'Give us Feedback on gas consumption',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <>
              <p>
                During this phase we&apos;ll start using the logic module and upload smart contracts
                implementing the protocol, the related transaction messages will have a certain gas
                consumption which may at first be irrelevant in comparison with the actual execution
                cost. Regarding your validation role, you have at your disposal elements allowing
                you to judge this relevance.
              </p>
              <p>
                Send us a study highlighting gas consumption relevancy in relation with elements at
                your disposal (e.g. Memory and CPU usage). Argued with curated data from your
                running Node, provide us feedback and suggestions to help us ensuring a fair cost.
              </p>
              <p>
                We advise you to wait for the second part of the phase before publishing - new smart
                contracts will be tested during this phase, we&apos;ll provide documentation to
                interact with them.
              </p>
            </>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>Up to 10 000 pts</p>
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
                <li>Relevance</li>
                <li>Arguments backed by data</li>
                <li>Usefulness</li>
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
              Publish a 1 page report / dashboards using{' '}
              <a href={gasConsumptionTypeformUrl} rel="noreferrer" target="_blank">
                this form
              </a>
              .
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2024-05-18T00:00:00Z',
        to: '2023-06-28T23:59:00Z'
      },
      points: 10000
    },
    {
      group: 'Challenges',
      taskName: 'Identify Failures in the Token Factory and Alliance module',
      taskContent: [
        {
          id: 'description',
          title: 'Description',
          contentDescription: (
            <p>
              The newly introduced Token Factory and Alliance module may bring some possible security vulnerability 
              and need thus to be well tested. If you find out such failure, send
              us some explanations to reproduce the bug. You&apos;ll find Token Factory and Alliance module documentation
              here:{' '}
              <a href={allianceModuleDocsUrl} rel="noreferrer" target="_blank">
                {allianceModuleDocsUrl}
              </a>
            </p>
          )
        },
        {
          id: 'rewards',
          title: 'Rewards',
          contentDescription: <p>Up to 10 000 pts</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Vulnerability that may have the ability to bring some determinism issue or any other
              issue challenging the consensus of the chain.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: (
            <p>
              Send us the vulnerability explanation with an example to reproduce it using{' '}
              <a href={allianceModuleTypeformUrl} rel="noreferrer" target="_blank">
                this form
              </a>
              .
            </p>
          )
        }
      ],
      taskDuration: {
        from: '2024-05-19T00:00:00Z',
        to: '2024-06-28T23:59:00Z'
      },
      points: 10000
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
          contentDescription: <p>3 000 points.</p>
        },
        {
          id: 'criteria',
          title: 'Judging Criteria',
          contentDescription: (
            <p>
              Points are attributed according to the following formula: 3001^0,01x - 1 with x =
              %uptime.
            </p>
          )
        },
        {
          id: 'submit',
          title: 'How to Submit',
          contentDescription: <p>Missed blocks are automatically tracked.</p>
        }
      ],
      taskDuration: {
        from: '2024-05-19T00:00:00Z',
        to: '2024-08-28T23:59:00Z'
      },
      points: 3000
    }
  ]
})
