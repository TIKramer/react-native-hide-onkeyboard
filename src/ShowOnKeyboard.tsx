import React from "react";
import { View } from 'react-native';
import useKeyboard from "./hooks/useKeyboard";


const ShowOnKeyboard = ({ children, style }: Props) =>
{
  const { keyBoardOpen } = useKeyboard();

  return (
    keyBoardOpen ? <View style={style}>
      {children}
    </View> : null

  )

};



export default ShowOnKeyboard;