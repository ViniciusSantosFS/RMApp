import React from "react"
import { FlatList, View } from "react-native"

import EpisodeButton from "~/components/EpisodeButton"
import { getNumbers } from "~/utils/getNumbers"

interface Props {
  episodes: string[]
  handlePress: (url: string) => Promise<void>
}

const EpisodesList = ({ episodes, handlePress }: Props) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{ marginVertical: 6 }} />}
      renderItem={({ item }) => (
        <EpisodeButton
          number={getNumbers(item)}
          onPress={() => handlePress(item)}
        />
      )}
      data={episodes}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default EpisodesList
