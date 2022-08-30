# react-native-hide-onkeyboard

Hide or Show a view when the keyboard is present

## Installation

```sh
npm install react-native-hide-onkeyboard
```

## Usage

```js
import { HideOnkeyboard, ShowOnkeyboard } from "react-native-hide-onkeyboard";

// ...

  <HideOnKeyboard style={{ backgroundColor: 'red', height: 100, width: 100 }}>
       
       <Text >I will hide when the key board is open</Text>

   </HideOnKeyboard>

   <ShowOnKeyboard>
        
        <Text> I will only appear when the keyboard is open</Text>
        
    </ShowOnKeyboard>

```
Styles: You can style just like you would with a normal react native View component


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
