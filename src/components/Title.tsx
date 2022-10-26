import { Text, StyleSheet } from "react-native"
import { COLORS } from "~/globals/style"

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },
})

interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title
