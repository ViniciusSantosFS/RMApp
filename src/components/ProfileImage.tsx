import React from "react"
import { Image, StyleSheet } from "react-native"

interface Props {
  uri: string
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
})

const ProfileImage = ({ uri }: Props) => (
  <Image style={styles.container} source={{ uri }} />
)

export default ProfileImage
