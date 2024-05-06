declare namespace NodeJS {
  interface ProcessEnv {
    APP_TITLE: string
    APP_KEYWORDS: string
    APP_DESCRIPTION: string
    Furya_DISCORD_URL: string
    Furya_GITHUB_URL: string
    Furya_LINKEDIN_URL: string
    Furya_MEDIUM_URL: string
    Furya_TELEGRAM_URL: string
    Furya_TWITTER_URL: string
    Furya_WEBSITE_URL: string
    Furya_EXPLORER_URL: string
    Furya_DOCS_URL: string
    Furya_DOCS_NODES_URL: string
    Furya_DOCS_FAQ_URL: string
    Furya_DISCORD_PRAETORIA_URL: string
    Furya_DISCORD_TICKET_URL: string
    Furya_MAIL_CONTACT_ADDRESS: string
    Furya_LICENCE_BLOCKCHAIN_URL: string
    Furya_LICENCE_CODE_URL: string
    Furya_LICENCE_ASSETS_URL: string
    Furya_ARBITRAGE_URL: string
    Furya_ARBITRAGE_RULES_URL: string
    Furya_COOKIE_POLICY_URL: string
    GRAPHQL_URI: string
    Furya_TASKS_FUNDAMEN_5_TYPEFORM_URL: string
    Furya_TASKS_MUNITIO_1_TYPEFORM_URL: string
    Furya_TASKS_MUNITIO_2_TYPEFORM_URL: string
    Furya_TASKS_MUNITIO_3_TYPEFORM_URL: string
    Furya_PHASE_FUNDAMEN_START_DATE: string
    Furya_PHASE_FUNDAMEN_END_DATE: string
    Furya_PHASE_MUNITIO_START_DATE: string
    Furya_PHASE_MUNITIO_END_DATE: string
    Furya_PHASE_DILATATIO_START_DATE: string
    Furya_PHASE_DILATATIO_END_DATE: string
    Furya_PHASE_IMPERIUM_START_DATE: string
    Furya_PHASE_IMPERIUM_END_DATE: string
    Furya_DOCS_LOGIC_MODULE_URL: string
    Furya_TASKS_IMPERIUM_5_TYPEFORM_URL: string
    Furya_TASKS_IMPERIUM_6_TYPEFORM_URL: string
  }
}

declare module 'next/config' {
  declare const _default: () => {
    publicRuntimeConfig: {
      version: string
    }
  }

  export default _default
}
