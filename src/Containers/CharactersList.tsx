import React from "react"
import { FlatList, View } from "react-native"
import useNavigation from "~/hooks/useNavigation"
import { Result } from "~/services/characters/types"
import CharacterCard from "../components/CharacterCard"

interface Props {
  characters: Result[]
}

const CharactersList = ({ characters }: Props) => {
  const { handleNavigate } = useNavigation()
  const navigate = (id: number) => handleNavigate("Sobre", { id })

  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{ marginVertical: 6 }} />}
      renderItem={({ item }) => (
        <CharacterCard
          name={item.name}
          status={item.status}
          gender={item.gender}
          uri={item.image}
          onPress={() => navigate(item.id)}
        />
      )}
      data={characters}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default CharactersList
