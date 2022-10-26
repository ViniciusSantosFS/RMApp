import React from "react"

import { View } from "react-native"
import { COLORS } from "~/globals/style"

const Line = () => (
  <View
    style={{
      borderWidth: 1,
      borderColor: COLORS.green,
      marginVertical: 10,
    }}
  />
)

export default Line
