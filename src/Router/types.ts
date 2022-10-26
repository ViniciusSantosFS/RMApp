import { CompositeNavigationProp } from "@react-navigation/native"
import type { StackNavigationProp } from "@react-navigation/stack"

export type StackParamsList = {
  Inicio: undefined
}

export type HookNavigationProp = CompositeNavigationProp<
  StackNavigationProp<StackParamsList>,
  StackNavigationProp<StackParamsList>
>
