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

const Profile = () => {
  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        }}
      />
      <View style={styles.container}>
        <Border>Alive</Border>
        <View style={{ marginHorizontal: 8 }} />
        <Border>Male</Border>
      </View>
    </>
  )
}

export default Profile
