import React from "react"
import { StyleSheet, View, ActivityIndicator } from "react-native"
import { COLORS } from "~/globals/style"

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.transparent,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
  },
})

export default function Loading(): React.ReactElement {
  return (
    <View style={{ ...styles.container, height: "100%" }}>
      <ActivityIndicator size="large" color="white" />
    </View>
  )
}
