import React from "react"
import { View } from "react-native"

import Container from "~/components/Container"
import Pagination from "~/components/Pagination"
import SearchBar from "~/components/SearchBar"
import Title from "~/components/Title"
import useNavigation from "~/hooks/useNavigation"
import CharactersList from "./Components/CharactersList"
const json = require("../../mocks/chars.json")

export default function Home() {
  const { handleNavigate } = useNavigation()
  const navigate = (id: number) => handleNavigate("Sobre", { id })

  return (
    <Container>
      <View style={{ marginVertical: 20 }}>
        <Title>Personagens</Title>

        <View style={{ marginVertical: 20 }} />

        <SearchBar placeholder="Buscar por personagem" />
      </View>

      <CharactersList characters={json} handleNavigate={navigate} />

      <Pagination page={1} />
      <View style={{ marginBottom: 40 }} />
    </Container>
  )
}
