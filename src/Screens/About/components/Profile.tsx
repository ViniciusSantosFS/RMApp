import React from "react"
import { Image, StyleSheet, View } from "react-native"
import Border from "~/components/Border"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 20,
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 25,
  },
})

interface Props {
  status: string
  gender: string
  uri: string
}

const Profile = ({ gender, status, uri }: Props) => {
  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri,
        }}
      />
      <View style={styles.container}>
        <Border>{status}</Border>
        <View style={{ marginHorizontal: 8 }} />
        <Border>{gender}</Border>
      </View>
    </>
  )
}

export default Profile
