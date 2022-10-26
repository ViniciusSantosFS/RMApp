import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { COLORS } from "~/globals/style"

interface Props {
  label: string
  value: string
}

const defaultTextStyle = {
  fontSize: 18,
  color: COLORS.darkBlue,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  label: {
    ...defaultTextStyle,
    fontWeight: "600",
    opacity: 0.7,
    textAlign: "left",
  },

  value: {
    ...defaultTextStyle,
  },
})

const Description = ({ label, value }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ marginHorizontal: 20 }} />
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

export default Description
