import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { Head } from '../components/head/Head'
import { Footer } from '../components/layout/footer/Footer'
import { Header } from '../components/layout/header/Header'
import type { Config } from '../types/config.type'
import { config } from '../lib/config'

export type TermsProps = Pick<Config, 'title' | 'keywords' | 'description' | 'urls'>

const privacyUrl = '/privacy#privacy-cookie-policy'

const Terms: NextPage<TermsProps> = props => {
  const { urls } = props
  const {
    socialMediaUrls: { discordUrl },
    mailAddresses: { contact },
    licenceUrls: { blockchainLicenceUrl, codeLicenceUrl, assetsLicenceUrl },
  } = urls

  return (
    <div className="furya-praetoria-web-page-main">
      <Head {...props} />
      <main>
        <Header />
        <div className="furya-praetoria-web-page-content-container" id="terms-conditions">
          <h1>Terms & conditions</h1>

          <div className="furya-praetoria-web-page-terms-update">
            <div className="furya-praetoria-web-page-terms-update-title" id="update-jan-11-2023">
              <h2>Update</h2>
              <h3>May 11th 2024</h3>
            </div>
            <p>
              In order to maintain the integrity and efficiency of the Praetoria program, Furya has
              implemented the following terms and conditions for validator nodes:
            </p>
            <p>
              If a validator node fails to validate a block for a consecutive period of{' '}
              <span className="furya-praetoria-web-bold-text">
                100,000 blocks, Furya reserves the right to terminate the participant&apos;s
                participation
              </span>{' '}
              in the Praetoria program and remove them from the leaderboard. This is to ensure that
              all validator nodes are actively contributing to the network and that the program is
              operating in an optimal manner.
            </p>
            <p>
              If Furya decides to terminate a participant&apos;s participation, the participant will
              be notified via{' '}
              <a href={discordUrl} rel="noreferrer" target="_blank">
                Discord
              </a>{' '}
              (and other relevant channels, if applicable) and will be given a 72-hour grace period
              to validate at least one block using their validator node. This grace period is
              intended to provide the participant with an opportunity to address any issues that may
              have arisen with their node and to confirm their continued participation in the
              program.
            </p>
            <p>
              If the participant fails to validate a block within the 72-hour grace period, their
              participation in the program will be terminated, and they will forfeit any points
              earned. The participant may still apply to rejoin the program in the future, however,
              any points earned will not be restored.
            </p>
            <p>
              It is important to note that this policy is designed to allow willing participants to
              continue their participation and to provide an opportunity for willing candidates to
              join.
            </p>
          </div>

          <p>
            The Praetoria program is designed to improve the operational experience, security, and
            design of the Furya mainnet protocol as well as to expose potential issues and improve
            the experience of participants prior to the launch of the Furya mainnet and Furya DAO
            operation.
          </p>

          <ol>
            <li>
              <h2>Agreement on the conditions</h2>
            </li>
            <p>
              By accessing or using our Furya Services, or by participating in our Testnet, you agree
              to these Terms and Conditions as well as our{' '}
              <Link href={privacyUrl}>Privacy Policy</Link> and any other agreements or terms set
              forth by Furya. These Terms constitute a binding obligation between you and Furya. If
              you do not agree to these Terms, do not use our Services; if you do use our Services,
              you accept this Agreement. If you have any questions about these Terms, the Services
              or the Testnet, please contact us at <a href={`mailto:${contact}`}>{contact}</a>.
            </p>
            <li>
              <h2>Privacy Policy</h2>
            </li>
            <p>
              Please refer to our <Link href={privacyUrl}>Privacy Policy</Link> for more details on
              what information Furya may collect, use, or disclose and under what circumstances. You
              acknowledge and agree that your participation in Praetoria is subject to this Privacy
              Policy.
            </p>
            <li>
              <h2>Change to the Terms</h2>
            </li>
            <p>
              Furya, in its sole discretion, may update the Terms at any time. In that event, Furya
              will provide notice either by posting the updated Terms on its website, on any Furya
              blog or forum used for information sharing, or by other means of communication. It is
              important that you review all updated Terms. If you continue to participate in Praetoria
              after Furya has posted updated Terms, you agree to be bound by the new Terms. If you do
              not agree to be bound by the new Terms, you will not be able to participate in
              Praetoria.
            </p>
            <li>
              <h2>Duration of the Testnet</h2>
            </li>
            <p>
              Praetoria will begin on the date prescribed by Furya and will continue until terminated
              by Furya in its sole discretion (&quot;Testnet Period&quot;). Notwithstanding any other
              information provided by Furya regarding the Testnet (including on its website, blog
              posts or through other communications - forum, Discord, Telegram or other channels),
              Furya may modify, suspend or terminate, temporarily or permanently, all or any part of
              the Testnet, at any time and without notice, in its sole discretion (including prior
              to providing any incentives or rewards).
            </p>
            <li>
              <h2>Testnet Eligibility</h2>
            </li>
            <p>
              You may participate in the Testnet only if: (a) you are 18 years of age or older and
              capable of entering into a binding contract with Furya ; (b) you are not subject to any
              sanctions administered or enforced by any country or government or otherwise
              designated on a list of prohibited or restricted parties (including, but not limited
              to, lists maintained by the United Nations Security Council, the United States
              Government, the European Union or member states or any other applicable governmental
              authority) or a citizen or organization of, or resident in, a country or territory
              subject to national or international sanctions (including, without limitation, Cuba,
              the Democratic People&apos;s Republic of Korea, the Crimean, Donetsk and Luhansk
              regions, Iran or Syria) ; and (c) you are not barred from participating under
              applicable law. In addition, to be eligible for incentives or rewards in the Testnet,
              you (i) must be an individual or entity, and (ii) must not be an employee, consultant,
              or affiliate of Furya.
            </p>

            <p>
              Moreover, to participate in Praetoria, participants must demonstrate their ability to
              configure and deploy an Furya node to Furya&apos;s satisfaction, in its sole discretion,
              and will be required to provide certain identifying information (e.g., name, place of
              residence or domicile, date of birth, etc.) and related documentation, and to pass the
              sanctions and watch list check. If you fail to provide such identifying information,
              fail to pass the sanctions and watch list check, and/or fail to demonstrate compliance
              with the requirements hereof, your participation may be terminated, you forfeit any
              incentive or reward, you are not eligible to participate in future Testnet challenges,
              and you are subject to further action or prosecution.
            </p>

            <p>
              From among those applicants who register for the Testnet with incentive and meet all
              eligibility requirements, Furya will select Testnet participants in its sole
              discretion, based on criteria determined by Furya (including, but not limited to,
              geographic distribution and applicant reputation). By applying or registering, there
              is no promise or guarantee that you will be able to participate in the Testnet.
            </p>

            <p>
              Based on information provided by Furya regarding the Testnet (including on its website,
              in blog posts or through other communications (such as forums, Telegram, Discord or
              other channels), Furya may change or modify at any time the number of participants who
              may participate in the Testnet or the requirements of the Testnet and may terminate
              the participation of any participant at any time.
            </p>

            <p>
              The Testnet operates in several phases. Your selection or participation in the first
              phase automatically qualifies you for the following phases. If a participant leaves
              the Testnet, we reserve the right to invite a new participant.
            </p>
            <li>
              <h2>Third Party Services</h2>
            </li>
            <p>
              Furya may share identifying information and documents with certain third party vendors
              or providers that offer identity verification and sanctions monitoring services and
              watch lists (the &quot;Third Party Services&quot;).
            </p>

            <p>
              You agree that your access to and use of such Third Party Services is governed solely
              by the terms and conditions of such Third Party Services, and Furya is not responsible
              for, and makes no representations about, any aspect of such Third Party Services,
              including, without limitation, their content or the manner in which they handle,
              protect, manage or process data or any interaction between you and the provider of
              such Third Party Services. You irrevocably waive any claim against Furya with respect
              to such Third Party Services. We are not responsible for any damage or loss caused or
              alleged to be caused by or in connection with your activation, access or use of such
              Third Party Services, or your reliance on the privacy practices, data security
              processes or other policies of such Third Party Services.
            </p>
            <li>
              <h2>Rewards & Incentives</h2>
            </li>
            <p>
              As part of your participation in the Testnet, Furya may choose, at its sole discretion,
              to provide certain incentives or rewards to eligible participants for completing
              certain activities, including executing a validation node and meeting certain
              performance criteria or other requirements set by Furya. More details are available on
              the Praetoria program website. Other contributions to the Testnet may also be rewarded
              by Furya, at its discretion. These rewards may include Furya mainnet tokens; however,
              (i) such Furya mainnet tokens will only be provided after the successful launch of the
              mainnet and all tokens provided will be subject to an 18-month linear vesting period,
              (ii) to comply with laws and regulations in accordance to the United States and
              Canada, miners operating as U.S. or Canadian parties will be asked to prove their
              status as an accredited investor prior to receiving any rewards. Notwithstanding any
              other information provided by Furya regarding the Testnet (including on its website,
              blog posts or through other communications (such as forums, Telegram, Discord or other
              channels)), Furya may, at its sole discretion, change or modify the amounts or types of
              rewards or incentives and/or suspend or terminate, temporarily or permanently, all or
              any part of the incentives or rewards program at any time without notice, and Furya may
              remove or reassign any rewards or incentives earned by a participant or choose not to
              provide rewards to a participant.
            </p>

            <p>
              Furya reserves the right to block your access to Testnet if you violate any of the
              terms and conditions of the Terms (as determined solely by Furya) or if you fail to
              complete the required information or provide accurate information; you will not be
              eligible to receive rewards.
            </p>

            <p>
              Furya reserves the right to request information about, review and investigate all
              Testnet activities and to disqualify participants if it believes that a participant
              has engaged in abusive, fraudulent, bad faith activity or activity that does not
              comply with Praetoria standards and requirements.
            </p>

            <p>
              You agree that any rewards or incentives received are for your Testnet Furya testing
              services.
            </p>
            <li>
              <h2>Taxes</h2>
            </li>
            <p>
              You are responsible for paying all taxes associated with your receipt of any rewards
              (including, if applicable, Furya mainnet tokens). You agree to provide Furya with any
              additional information and to complete any tax or other forms required in connection
              with your receipt of such rewards.
            </p>

            <p>
              You may suffer adverse tax consequences because of your participation in Praetoria. You
              hereby represent that (i) you have consulted with any tax advisor that you deem
              appropriate in connection with your participation, or that you have had the
              opportunity to obtain tax advice but have chosen not to do so, (ii) Furya has not
              provided you with any tax advice in connection with your participation, and (iii) you
              are not relying on Furya for any tax advice.
            </p>
            <li>
              <h2>Security & Wallet</h2>
            </li>
            <p>
              You are responsible for maintaining adequate security and control of all identifiers,
              passwords, indicia, personal identification numbers (PINs) or other codes that you use
              to access the Testnet as part of your systems. Furya assumes no responsibility for any
              losses resulting from a compromise of your systems or wallet(s).
            </p>

            <p>
              As part of certain phases of Testnet, Mainnet, or as part of providing
              incentives/rewards, Furya may send or receive Testnet tokens or rewards on your wallet
              application. In this case, you are responsible for managing the private keys and
              security of your wallet(s). Furya does not and will not manage, store, collect or
              otherwise access the private keys of your wallet(s). You are responsible for all
              activities that occur while using your wallet, whether or not you have knowledge of
              them.
            </p>
            <li>
              <h2>Update & Monitoring</h2>
            </li>
            <p>
              We may make improvements, changes, or updates to our Testnet, including, but not
              limited to, changes and updates to the underlying software, infrastructure, security
              protocols, technical configurations or service features (the &quot;Updates&quot;) from
              time to time. Your continued access to and use of our Testnet is subject to such
              Updates and you must accept any patches, system upgrades, bug fixes, feature changes
              or other maintenance work that results from such Updates. We are not responsible for
              any failure on your part to accept and use such Updates in the manner specified or
              required by us. While Furya is not obligated to monitor access to or participation in
              the Testnet, it has the right to do so for the purpose of operating the Testnet,
              ensuring compliance with the Terms, and complying with applicable laws or other legal
              requirements.
            </p>
            <li>
              <h2>Testnet tokens & Testnet</h2>
            </li>
            <p>
              No monetary value. As part of your use of Praetoria, you may accumulate &quot;Testnet
              Tokens&quot;, for example through a faucet, which are not, and will never be,
              converted into or accumulated as Mainnet Tokens or any other virtual token or asset.
              Testnet Tokens are virtual objects with no monetary value. Testnet Tokens are not
              currency or property of any kind and are not exchangeable, redeemable, or eligible for
              any fiat or virtual currency or other thing of value. Testnet Tokens are not
              transferable between users outside of the Testnet, and you may not attempt to sell,
              trade or transfer Testnet Tokens outside of the Testnet, or obtain any credit using
              Testnet Tokens. Any attempt to sell, trade or transfer Testnet Tokens outside of the
              Testnet will be null and void.
            </p>

            <p>
              Modification. Furya may, in its sole discretion, decide to delete, erase, or otherwise
              withdraw the Testnet at any time without notice, including, without limitation,
              changing the presence, amounts, or any other terms and conditions applicable to
              Testnet Tokens, without any liability to you or other users of the Testnet. Furya does
              not guarantee that Testnet Tokens will continue to be offered for any specific period
              and you cannot rely on the continued availability of any Testnet Token. If the Testnet
              expires or terminates, you acknowledge and agree that your access to and use of your
              Testnet Tokens will be terminated, and that all accumulated Testnet Tokens will be
              deleted from the Testnet system. Testnet Tokens will not be converted to future
              rewards offered by Furya.
            </p>
            <li>
              <h2>Intellectual Property Rights & Feedback</h2>
            </li>
            <p>
              By participating in our Testnet, you agree to abide by the various licenses under
              which our resources are licensed. All right, title, and interest in and to our
              Testnet, including all modifications, enhancements, and improvements thereto, and all
              proprietary rights therein, are subject to the following open-source licenses:
            </p>
            <ul>
              <li>
                <p>
                  All Furya elements related to blockchain (mainly, but not limited to, blockchain
                  and smart contracts) are subject to the license{' '}
                  <a href={blockchainLicenceUrl} rel="noreferrer" target="_blank">
                    Apache-2
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Other Furya code elements not related to the blockchain are subject to the license{' '}
                  <a href={codeLicenceUrl} rel="noreferrer" target="_blank">
                    BSD 3-Clause
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  The other Furya elements of content and other works (documents, images... without
                  limitation) are subject to the license{' '}
                  <a href={assetsLicenceUrl} rel="noreferrer" target="_blank">
                    Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  All other elements of content and other works are under the respective licenses
                  chosen by their respective copyright holders.
                </p>
              </li>
            </ul>
            <p>
              Furya welcomes feedback, comments, and suggestions for improvement from Praetoria and
              related Furya protocol technologies (&quot;Feedback&quot;). You grant Furya a
              non-exclusive, transferable, worldwide, perpetual, irrevocable, fully paid,
              royalty-free license, with the right to sublicense, under any intellectual property
              rights you own or control, to use, copy, modify, create derivative works based on, and
              otherwise exploit the Feedback for any purpose, in any form, format, media, or media
              channel now known or later developed or discovered.
            </p>
            <li>
              <h2>Prohibited Activities</h2>
            </li>
            <p>You shall not (in each case, except as provided in these Terms):</p>
            <ul>
              <li>
                <p>
                  Initiate attacks that violate the rules or policies of your cloud service, data
                  center, or other applicable third party service provider;
                </p>
              </li>
              <li>
                <p>
                  Unless specifically requested by Furya as part of a security or similar challenge,
                  disrupt or launch attacks against users of Furya Services or the Testnet;
                </p>
              </li>
              <li>
                <p>
                  Disrupt, compromise or otherwise damage data or property belonging to other
                  parties;
                </p>
              </li>
              <li>
                <p>
                  Impersonate any person or entity or falsely represent your affiliation with any
                  person or entity;
                </p>
              </li>
              <li>
                <p>
                  Access accounts or data other than your own (or want you to with the explicit
                  permission of their owners);
                </p>
              </li>
              <li>
                <p>
                  Interfere or attempt to interfere with any user, host or network access,
                  including, without limitation, via means of submitting a virus, overloading,
                  flooding, spamming, creating, encouraging or implementing sibyl attacks;
                </p>
              </li>
              <li>
                <p>Sell or resell the Furya Services;</p>
              </li>
              <li>
                <p>
                  Encourage or permit any other person or entity to do any of the foregoing or to
                  violate the Terms.
                </p>
              </li>
            </ul>
            <li>
              <h2>Limitation of Liability</h2>
            </li>
            <p>
              To the maximum extent permitted by law, in no event will we or our affiliates,
              suppliers or licensors be liable to you or any third party for any indirect,
              incidental, special or consequential damages, or for any loss of use, loss of profits
              or loss of data arising out of or in connection with these Terms or the Testnet
              program, however caused and regardless of the form of action, whether in contract,
              tort, strict liability or otherwise, even if we or our suppliers or licensors have
              been advised of the possibility of such damages. To the maximum extent permitted by
              law, in no event shall our combined liability, or that of our suppliers and licensors,
              for any claim arising out of or relating to these Terms or the Testnet exceed one
              hundred dollars ($100). Some jurisdictions do not allow limitations of liability, so
              the foregoing limitation may not apply to you.
            </p>

            <p>
              The exclusions and limitations of damages set forth above are fundamental elements of
              the basis of the agreement between Furya and you.
            </p>
            <li>
              <h2>Compensation</h2>
            </li>
            <p>
              To the fullest extent permitted by applicable law, you will indemnify, defend and hold
              harmless Furya and our subsidiaries and affiliates, and each of our respective
              officers, directors, agents, partners and employees (individually and collectively,
              the &apos;Furya Parties&apos;) from and against any and all losses, liabilities,
              claims, demands, damages, expenses or costs (&apos;Claims&apos;) arising out of or
              relating to (i) your access to or use of the Furya Services or the Testnet; (ii) your
              violation of these Terms; (iii) your violation, misappropriation or infringement of
              any rights of others (including intellectual property rights or privacy rights); or
              (iv) your conduct in connection with the Furya Services or your participation in the
              Testnet. You agree to promptly notify the Furya Parties of any third party claims, to
              cooperate with the Furya Parties in the defence of such Claims, and to pay all fees,
              costs and expenses associated with the defence of such Claims (including
              attorneys&apos; fees). You also agree that the Furya Parties shall have control over
              the defence or settlement, in Furya&apos;s sole discretion, of any third party claims.
            </p>
            <li>
              <h2>Privacy</h2>
            </li>
            <p>
              As part of the Testnet, you may be entrusted with so-called Confidential Information,
              which will be clearly identified and notified as such. Accordingly, you may not
              reveal, publish, or otherwise disclose the Confidential Information to any third party
              without Furya&apos;s prior written consent, and you must protect the Confidential
              Information from disclosure using the same degree of care that you use to protect your
              own Confidential Information of the same nature, but in no event using less than
              reasonable care.
            </p>
            <li>
              <h2>Assignment</h2>
            </li>
            <p>
              You may not sell, assign, or transfer any of your rights, duties, or obligations under
              these Terms without our prior written consent. Any attempted assignment or transfer of
              the Terms without such consent will be null and void. We reserve the right to assign
              or transfer these Terms or any of its rights, duties, and obligations hereunder to any
              third party. Subject to the foregoing, these Terms shall be binding upon and inure to
              the benefit of the parties, their successors and permitted assigns.
            </p>
            <li>
              <h2>General Terms</h2>
            </li>
            <p>
              Nothing herein shall constitute an employment, consulting, joint venture, or
              partnership relationship between you and Furya. If any provision of the Terms is found
              by an arbitrator or court of competent jurisdiction to be invalid or unenforceable,
              that provision will be enforced to the maximum extent permissible, and the remaining
              provisions of the Terms will remain in full force and effect. These Terms reflect the
              entire agreement between the parties with respect to the subject matter hereof and
              supersede all prior agreements, representations, statements, and understandings of the
              parties. The section titles in these Terms are for convenience only and have no legal
              or contractual effect. The use of the word &apos;including&apos; shall be construed to
              mean &apos;including and without limitation&apos;.
            </p>

            <p>
              Notices. Any notices or other communications provided by the Company under the Terms,
              including those regarding changes to the Terms, may be given by posting on the Furya
              website, blog, or through other communications (such as forums, Telegram, Discord, or
              other channels).
            </p>

            <p>
              Waiver of Rights. Furya&apos;s failure to enforce any right or provision of these Terms
              shall not be deemed a waiver of such right or provision. A waiver of any such right or
              provision will be effective only if in writing and signed by a duly authorized
              representative of Furya. Except as expressly provided in these Terms, the exercise by
              either party of any of its remedies under these Terms shall be without prejudice to
              its other remedies under these Terms or otherwise.
            </p>

            <p>
              Contact Information. If you have any questions regarding these Terms or Praetoria,
              please contact <a href={`mailto:${contact}`}>{contact}</a> or join us on our{' '}
              <a href={discordUrl} rel="noreferrer" target="_blank">
                Furya Discord server
              </a>
              .
            </p>
          </ol>
        </div>
        <Footer urls={urls} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<TermsProps> = async () => ({
  props: {
    ...config
  }
})

export default Terms
