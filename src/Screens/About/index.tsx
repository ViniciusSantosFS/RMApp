import React from "react"
import { Image, Text, StyleSheet, View } from "react-native"
import Border from "~/components/Border"

import Container from "~/components/Container"
import Description from "~/components/Description"
import Title from "~/components/Title"
import Profile from "./components/Profile"

interface ScreenProps {
  route: { params: { id: number } }
}

export default function About({ route }: ScreenProps) {
  return (
    <Container>
      <View style={{ marginTop: 20 }} />
      <Title>Rick sanches</Title>

      <View style={{ marginTop: 30 }}>
        <Profile />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Title>Sobre</Title>

        <View style={{ marginTop: 8, width: "50%" }}>
          <Description label="Especies" value="Human" />
          <Description label="Gender" value="Human" />
          <Description label="Location" value="Human" />
          <Description label="Origin" value="Earth" />
        </View>
      </View>

      <Title>Episodios</Title>
    </Container>
  )
}
