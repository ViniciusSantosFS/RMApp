import { View, TextInput, StyleSheet, TextInputProps } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { COLORS } from "~/globals/style"

interface Props extends TextInputProps {}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 10,
  },

  input: {
    flex: 1,
    padding: 10,
    marginLeft: 6,
    backgroundColor: COLORS.white,
  },
})

const SearchBar = ({ ...rest }: Props) => {
  return (
    <View style={styles.searchSection}>
      <AntDesign name="search1" size={24} color={COLORS.gray} />
      <TextInput style={styles.input} {...rest} />
    </View>
  )
}

export default SearchBar
