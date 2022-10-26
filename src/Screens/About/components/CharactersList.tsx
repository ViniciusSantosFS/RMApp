import React from "react"

import { FlatList } from "react-native"
import { Result } from "~/services/characters/types"

import Line from "~/components/Line"
import CharacterListItem from "./CharacterListItem"

interface Props {
  characters: Result[]
}

const CharactersList = ({ characters }: Props) => (
  <FlatList
    ItemSeparatorComponent={() => <Line />}
    renderItem={({ item }) => (
      <CharacterListItem uri={item.image} name={item.name} />
    )}
    data={characters}
    showsVerticalScrollIndicator={false}
  />
)

export default CharactersList
