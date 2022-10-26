import React, { createContext, useState } from "react"
import Loading from "~/components/Loading"

export interface GlobalLoading {
  enable: () => void
  disable: () => void
  currentState: boolean
}

export const LoadingContext = createContext({} as GlobalLoading)

interface LoadingProviderProps {
  children: React.ReactNode
}

export default function LoadingProvider({
  children,
}: LoadingProviderProps): React.ReactElement {
  const [isEnabled, SetIsEnabled] = useState(false)

  const loading: GlobalLoading = {
    enable: () => {
      SetIsEnabled(true)
    },

    disable: () => {
      SetIsEnabled(false)
    },
    currentState: isEnabled,
  }

  return (
    <LoadingContext.Provider value={loading}>
      {children}
      {isEnabled && <Loading />}
    </LoadingContext.Provider>
  )
}
