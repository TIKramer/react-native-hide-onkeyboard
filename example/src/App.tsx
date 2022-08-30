import * as React from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';
import { HideOnKeyboard, ShowOnKeyboard } from 'react-native-hide-onkeyboard';

export default function App()
{
  const [text, onChangeText] = React.useState("Click here to open keyboard");

  return (
    <View style={styles.container}>
      <TextInput onChangeText={onChangeText}
        value={text}></TextInput>
      <HideOnKeyboard style={{ backgroundColor: 'red', height: 100, width: 100 }}>
        <Text >I will hide when the key board is open</Text>

      </HideOnKeyboard>
      <ShowOnKeyboard>
        <Text> I will only appear when the keyboard is open</Text>
      </ShowOnKeyboard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
