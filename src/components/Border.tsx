import { View, Text, StyleSheet } from "react-native"
import { COLORS } from "~/globals/style"

interface Props {
  children: React.ReactNode
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    paddingTop: 6,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.green,
  },
  description: {
    color: COLORS.white,
  },
})

const Border = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{children}</Text>
    </View>
  )
}

export default Border
