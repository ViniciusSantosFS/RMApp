import { useNavigation as useNativeNavigation } from "@react-navigation/native"

import { HookNavigationProp, StackParamsList } from "~/Router/types"

export default function useNavigation() {
  const navigation = useNativeNavigation<HookNavigationProp>()
  const handleNavigate = (screen: keyof StackParamsList, params?: any) => {
    return navigation.navigate(screen, params)
  }

  return { handleNavigate }
}
