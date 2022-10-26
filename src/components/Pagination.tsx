import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { COLORS } from "~/globals/style"

interface Props {
  page: number
  maxLimit: number
  handleSelectNext: () => void
  handleSelectPrevious: () => void
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.green,
    marginHorizontal: 10,
  },
})

const Pagination = ({
  page,
  maxLimit,
  handleSelectNext,
  handleSelectPrevious,
}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ opacity: page === 1 ? 0.2 : 1 }}
        onPress={handleSelectPrevious}
      >
        <AntDesign name="left" size={28} color={COLORS.green} />
      </TouchableOpacity>

      <Text style={styles.title}>{page}</Text>

      <TouchableOpacity
        onPress={handleSelectNext}
        style={{ opacity: page === maxLimit ? 0.2 : 1 }}
      >
        <AntDesign name="right" size={28} color={COLORS.green} />
      </TouchableOpacity>
    </View>
  )
}

export default Pagination
