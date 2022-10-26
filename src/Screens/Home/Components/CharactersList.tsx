import React from "react"
import { FlatList, View } from "react-native"
import { Result } from "~/services/characters/types"
import CharacterCard from "./CharacterCard"

interface Props {
  handleNavigate: (id: number) => void
  characters: Result[]
}

const CharactersList = ({ characters, handleNavigate }: Props) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{ marginVertical: 6 }} />}
      renderItem={({ item }) => (
        <CharacterCard
          name={item.name}
          status={item.status}
          gender={item.gender}
          uri={item.image}
          onPress={() => handleNavigate(item.id)}
        />
      )}
      data={characters}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default CharactersList
