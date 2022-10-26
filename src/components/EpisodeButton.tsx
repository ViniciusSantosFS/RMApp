import React from "react"
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from "react-native"

import { AntDesign } from "@expo/vector-icons"
import { COLORS } from "~/globals/style"

interface Props extends TouchableOpacityProps {
  number: string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  description: {
    color: COLORS.green,
    fontWeight: "bold",
    fontSize: 16,
  },
})

const EpisodeButton = ({ number, ...rest }: Props) => (
  <TouchableOpacity style={styles.container} {...rest}>
    <Text style={styles.description}>Episode {number}</Text>
    <AntDesign name="right" size={28} color={COLORS.green} />
  </TouchableOpacity>
)

export default EpisodeButton
