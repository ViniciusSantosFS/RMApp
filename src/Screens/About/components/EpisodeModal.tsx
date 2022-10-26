import React from "react"
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ModalProps,
} from "react-native"

import { AntDesign } from "@expo/vector-icons"
import { Result } from "~/services/characters/types"
import { COLORS } from "~/globals/style"

import Title from "~/components/Title"
import CharactersList from "./CharactersList"

interface Props extends ModalProps {
  name: string
  title: string
  characters: Result[]
  handlClose: () => void
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
  },

  buttonContainer: {
    paddingVertical: 26,
    alignItems: "center",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: COLORS.transparent,
  },
})

const EpisodeModal = ({
  name,
  title,
  characters,
  handlClose,
  ...rest
}: Props) => {
  return (
    <Modal animationType="slide" transparent {...rest}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handlClose}>
          <AntDesign name="minus" size={40} color={COLORS.gray} />
        </TouchableOpacity>

        <View style={{ padding: 20 }}>
          <Title>
            <Text style={{ color: COLORS.green }}>
              {name} - {title}
            </Text>
          </Title>
        </View>

        <CharactersList characters={characters} />
      </View>
    </Modal>
  )
}

export default EpisodeModal
