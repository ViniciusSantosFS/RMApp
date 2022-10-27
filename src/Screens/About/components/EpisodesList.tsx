import React from "react"
import { FlatList, View } from "react-native"
import { errorHandler } from "~/utils/errorHandler"
import { getNumbers } from "~/utils/getNumbers"

import EpisodeButton from "~/components/EpisodeButton"

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
          onPress={() =>
            handlePress(item).catch((err) => {
              errorHandler(err.message)
            })
          }
        />
      )}
      data={episodes}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default EpisodesList
