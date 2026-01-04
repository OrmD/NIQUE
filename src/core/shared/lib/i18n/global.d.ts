import messages from '../../locales/uk.json'

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages
  }
}
