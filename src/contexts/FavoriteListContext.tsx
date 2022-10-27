import React, { createContext, Dispatch, SetStateAction, useState } from "react"
import { Result } from "~/services/characters/types"

export interface FavoritesCharactersList {
  characters: Result[]
  push: (char: Result) => void
  isFavoriteChar: (id: number) => boolean
}

export const FavoritesContext = createContext({} as FavoritesCharactersList)

interface FavoritesProviderProps {
  children: React.ReactNode
}

export default function FavoritesProvider({
  children,
}: FavoritesProviderProps): React.ReactElement {
  const [characters, setCharacters] = useState<Result[]>([])

  const favorites = {
    characters,
    push: (char: Result) => {
      return setCharacters([...characters, char])
    },
    isFavoriteChar: (idToCompare: number): boolean => {
      return Boolean(characters.find(({ id }) => id === idToCompare))
    },
  }

  return (
    <FavoritesContext.Provider value={{ ...favorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}
