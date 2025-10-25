import { Switch } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"

const ColorModeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Switch.Root onChange={toggleColorMode}>
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Activate Chakra</Switch.Label>
    </Switch.Root>
  )
}

export default ColorModeSwitch