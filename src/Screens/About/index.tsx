import React, { useState, useEffect, useContext } from "react"
import { View } from "react-native"

import { getCharById } from "~/services/characters/characters"
import { getNumbers } from "~/utils/getNumbers"
import { EpisodeData, Result } from "~/services/characters/types"
import { LoadingContext } from "~/contexts/LoadingContext"
import { FavoritesContext } from "~/contexts/FavoriteListContext"
import axios from "~/services/instance"

import Container from "~/components/Container"
import Loading from "~/components/Loading"
import Title from "~/components/Title"
import Profile from "./components/Profile"
import EpisodesList from "./components/EpisodesList"
import Descriptions from "./components/Descriptions"
import EpisodeModal from "./components/EpisodeModal"
import TitleContainer from "~/components/TitleContainer"

interface ScreenProps {
  route: { params: { id: number } }
}

export default function About({ route }: ScreenProps) {
  const loading = useContext(LoadingContext)
  const [favorites, setFavorites] = useContext(FavoritesContext)

  const [aboutChar, setAboutChar] = useState<Result>()
  const [episodeData, setEpisodeData] = useState<EpisodeData>()
  const [characters, setCharacters] = useState<Result[]>()
  const [isShowingModal, setIsShowingModal] = useState(false)

  const tryGetEpisodeData = async (url: string) => {
    try {
      loading.enable()
      await handleGetEpisodeData(url)
    } catch (error) {
      throw new Error(error as keyof Error)
    } finally {
      loading.disable()
    }
  }

  const handleGetEpisodeData = async (url: string) => {
    const { data }: { data: EpisodeData } = await axios.get(url)

    const characters = await Promise.all(
      data.characters.map((url) => getCharById(getNumbers(url)))
    )
    setEpisodeData(data)
    setCharacters(characters)
    setIsShowingModal(true)
  }

  const handleAddToFavorites = () => {
    if (!aboutChar) return
    setFavorites([...favorites, aboutChar])
  }

  const isFavoriteChar = () => {
    return Boolean(favorites.find(({ id }) => id === aboutChar?.id))
  }

  useEffect(() => {
    getCharById(route.params.id.toString())
      .then(setAboutChar)
      .catch(console.log)
  }, [])

  if (!aboutChar) return <Loading />

  return (
    <Container>
      <EpisodeModal
        visible={isShowingModal}
        characters={characters ?? []}
        name={episodeData?.name ?? ""}
        title={episodeData?.episode ?? ""}
        handlClose={() => setIsShowingModal(false)}
        onRequestClose={() => setIsShowingModal(false)}
      />
      <View style={{ marginTop: 20 }} />

      <TitleContainer
        name={aboutChar.name}
        isFavorite={isFavoriteChar()}
        onPress={handleAddToFavorites}
      />

      <View style={{ marginTop: 30 }}>
        <Profile
          gender={aboutChar.gender}
          status={aboutChar.status}
          uri={aboutChar.image}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Title>Sobre</Title>

        <View style={{ marginTop: 8 }}>
          <Descriptions
            species={aboutChar.species}
            type={aboutChar.type}
            origin={aboutChar.origin.name}
            location={aboutChar.location.name}
          />
        </View>
      </View>

      <Title>Episodios</Title>
      <View style={{ marginBottom: 8 }} />
      <EpisodesList
        episodes={aboutChar.episode}
        handlePress={tryGetEpisodeData}
      />
    </Container>
  )
}
