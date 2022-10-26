import { Text, StyleSheet } from "react-native"
import { COLORS } from "~/globals/style"

interface Props {
  children: React.ReactNode
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },
})

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title
