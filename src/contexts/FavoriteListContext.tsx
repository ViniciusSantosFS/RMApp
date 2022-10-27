import React, { createContext, Dispatch, SetStateAction, useState } from "react"
import { Result } from "~/services/characters/types"

export type FavoritesCharactersList =
  | [Result[], Dispatch<SetStateAction<Result[]>>]

export const FavoritesContext = createContext([
  [],
  () => {},
] as FavoritesCharactersList)

interface FavoritesProviderProps {
  children: React.ReactNode
}

export default function FavoritesProvider({
  children,
}: FavoritesProviderProps): React.ReactElement {
  const [characters, setCharacters] = useState<Result[]>([])

  return (
    <FavoritesContext.Provider value={[characters, setCharacters]}>
      {children}
    </FavoritesContext.Provider>
  )
}
