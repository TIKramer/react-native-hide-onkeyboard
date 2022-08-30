import React from "react";
import { View } from 'react-native';
import useKeyboard from "./hooks/useKeyboard";

const HideOnKeyboard = ({ children, style }: Props) =>
{
  const { keyBoardOpen } = useKeyboard();
  return (
    keyBoardOpen ? null : <View style={style}>
      {children}
    </View>

  )

};

export default HideOnKeyboard;