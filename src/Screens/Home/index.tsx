import React, { useContext, useEffect, useState } from "react"
import { View } from "react-native"
import { getChars } from "~/services/characters/characters"
import { Info, Result } from "~/services/characters/types"
import { LoadingContext } from "~/contexts/LoadingContext"

import Container from "~/components/Container"
import Pagination from "~/components/Pagination"
import SearchBar from "~/components/SearchBar"
import Title from "~/components/Title"
import CharactersList from "~/Containers/CharactersList"
import useIsKeyboardOpen from "~/hooks/useIsKeyboardOpen"

export default function Home() {
  const loading = useContext(LoadingContext)
  const isKeyboardOpen = useIsKeyboardOpen()

  const [characters, setCharacters] = useState<Result[]>([])
  const [filteredChars, setFilteredChars] = useState<Result[]>([])
  const [currentInfo, setCurrentInfo] = useState<Info | null>()
  const [page, setPage] = useState(1)

  const handleIncrementPage = () => {
    currentInfo && page < currentInfo.pages && setPage(page + 1)
  }

  const handleFilterCharacters = (name: string) => {
    const filteredArray = characters.filter((char) => {
      if (name === "") return
      return char.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    })
    return setFilteredChars(filteredArray)
  }

  const getCharsList = async () => {
    try {
      loading.enable()
      const { results, info } = await getChars(page.toString())
      setCharacters(results)
      if (!currentInfo) setCurrentInfo(info)
    } catch (error) {
      throw new Error(error as keyof Error)
    } finally {
      loading.disable()
    }
  }

  useEffect(() => {
    getCharsList().catch((err) => {
      console.log(err.message)
    })
  }, [page])

  return (
    <Container>
      <View style={{ marginVertical: 20 }}>
        <Title>Personagens</Title>

        <View style={{ marginVertical: 20 }} />

        <SearchBar
          placeholder="Buscar por personagem"
          onChangeText={handleFilterCharacters}
        />
      </View>

      <CharactersList
        characters={filteredChars.length > 0 ? filteredChars : characters}
      />

      {isKeyboardOpen ? (
        <></>
      ) : (
        <View style={{ marginVertical: 20 }}>
          <Pagination
            page={page}
            maxLimit={currentInfo?.pages ?? 0}
            handleSelectPrevious={() => page > 1 && setPage(page - 1)}
            handleSelectNext={handleIncrementPage}
          />
        </View>
      )}
    </Container>
  )
}
