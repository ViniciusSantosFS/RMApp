import React from "react"
import { Text, StyleSheet, View } from "react-native"
import ProfileImage from "~/components/ProfileImage"

import { COLORS } from "~/globals/style"

interface Props {
  uri: string
  name: string
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
  },
})

const CharacterListItem = ({ uri, name }: Props) => {
  return (
    <View style={styles.container}>
      <ProfileImage uri={uri} />
      <View style={{ marginRight: 20 }} />
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

export default CharacterListItem
