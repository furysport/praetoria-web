import type { Config } from '../types/config.type'

export const config: Config = {
  title: process.env.APP_TITLE,
  keywords: process.env.APP_KEYWORDS,
  description: process.env.APP_DESCRIPTION,
  urls: {
    graphqlUri: process.env.GRAPHQL_URI,
    websiteUrl: process.env.Furya_WEBSITE_URL,
    explorerUrl: process.env.Furya_EXPLORER_URL,
    socialMediaUrls: {
      discordUrl: process.env.Furya_DISCORD_URL,
      githubUrl: process.env.Furya_GITHUB_URL,
      linkedinUrl: process.env.Furya_LINKEDIN_URL,
      mediumUrl: process.env.Furya_MEDIUM_URL,
      telegramUrl: process.env.Furya_TELEGRAM_URL,
      twitterUrl: process.env.Furya_TWITTER_URL
    },
    docsUrls: {
      whitepaperUrl: process.env.Furya_DOCS_URL,
      nodesUrl: process.env.Furya_DOCS_NODES_URL,
      faqUrl: process.env.Furya_DOCS_FAQ_URL,
      logicModuleUrl: process.env.Furya_DOCS_LOGIC_MODULE_URL
    },
    supportUrls: {
      discordPraetoriaUrl: process.env.Furya_DISCORD_PRAETORIA_URL,
      discordTicketUrl: process.env.Furya_DISCORD_TICKET_URL
    },
    mailAddresses: {
      contact: process.env.Furya_MAIL_CONTACT_ADDRESS
    },
    licenceUrls: {
      blockchainLicenceUrl: process.env.Furya_LICENCE_BLOCKCHAIN_URL,
      codeLicenceUrl: process.env.Furya_LICENCE_CODE_URL,
      assetsLicenceUrl: process.env.Furya_LICENCE_ASSETS_URL
    },
    termsUrls: {
      arbitrageUrl: process.env.Furya_ARBITRAGE_URL,
      arbitrageRulesUrl: process.env.Furya_ARBITRAGE_RULES_URL
    },
    privacyUrls: {
      cookiePolicyUrl: process.env.Furya_COOKIE_POLICY_URL
    }
  },
  phases: {
    fundamen: {
      startDate: process.env.Furya_PHASE_FUNDAMEN_START_DATE,
      endDate: process.env.Furya_PHASE_FUNDAMEN_END_DATE,
      urls: {
        originalContentUrl: process.env.Furya_TASKS_FUNDAMEN_5_TYPEFORM_URL
      }
    },
    munitio: {
      startDate: process.env.Furya_PHASE_MUNITIO_START_DATE,
      endDate: process.env.Furya_PHASE_MUNITIO_END_DATE,
      urls: {
        exposeRPCUrl: process.env.Furya_TASKS_MUNITIO_1_TYPEFORM_URL,
        provideSnapshotUrl: process.env.Furya_TASKS_MUNITIO_2_TYPEFORM_URL,
        provideDashboardUrl: process.env.Furya_TASKS_MUNITIO_3_TYPEFORM_URL
      }
    },
    dilatatio: {
      startDate: process.env.Furya_PHASE_DILATATIO_START_DATE,
      endDate: process.env.Furya_PHASE_DILATATIO_END_DATE
    },
    imperium: {
      startDate: process.env.Furya_PHASE_IMPERIUM_START_DATE,
      endDate: process.env.Furya_PHASE_IMPERIUM_END_DATE,
      urls: {
        logicModuleDocsUrl: process.env.Furya_DOCS_LOGIC_MODULE_URL,
        gasConsumptionTypeformUrl: process.env.Furya_TASKS_IMPERIUM_5_TYPEFORM_URL,
        logicModuleTypeformUrl: process.env.Furya_TASKS_IMPERIUM_6_TYPEFORM_URL
      }
    }
  }
}
