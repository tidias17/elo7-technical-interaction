import { ReactNode } from 'react'
import { NotificationProvider } from './notification'
import { QueryProvider } from './query'

type AppProvidersProps = { children: ReactNode }

function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryProvider>
      <NotificationProvider>{children}</NotificationProvider>
    </QueryProvider>
  )
}

export default AppProviders
