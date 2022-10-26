import React from "react"
import { View, StyleSheet } from "react-native"
import { COLORS } from "~/globals/style"

interface Props {
  children: React.ReactNode
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
})

const Container = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>
}

export default Container
