import React, { useContext } from "react"
import { View } from "react-native"
import { SearchBar } from "react-native-screens"
import Container from "~/components/Container"
import Pagination from "~/components/Pagination"
import Title from "~/components/Title"
import { FavoritesContext } from "~/contexts/FavoriteListContext"
import CharactersList from "~/Containers/CharactersList"

export default function Favorites() {
  const { characters } = useContext(FavoritesContext)
  return (
    <Container>
      <View style={{ marginVertical: 20 }}>
        <Title>Personagens Favoritos</Title>
      </View>

      <CharactersList characters={characters} />
    </Container>
  )
}
