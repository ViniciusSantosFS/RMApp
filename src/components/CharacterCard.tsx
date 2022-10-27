import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"
import Border from "~/components/Border"
import { COLORS } from "~/globals/style"
import { wrapText } from "~/utils/wrapText"

interface Props extends TouchableOpacityProps {
  name: string
  status: string
  gender: string
  uri: string
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    backgroundColor: COLORS.darkBlue,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  contentContainer: {
    marginVertical: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.white,
    marginBottom: 10,
  },

  profile: {
    width: 100,
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
})

const CharacterCard = ({ name, status, gender, uri, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{wrapText(name)}</Text>
        <Border>{status}</Border>
        <View style={{ marginBottom: 10 }} />
        <Border>{gender}</Border>
      </View>
      <Image style={styles.profile} source={{ uri }} />
    </TouchableOpacity>
  )
}

export default CharacterCard
