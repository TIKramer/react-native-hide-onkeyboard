# react-native-hide-onkeyboard

Hide or Show a view when the keyboard is present


## Getting started 👨‍🏫


npm install react-native-hide-onkeyboard

or



yarn add @ react-native-hide-onkeyboard

## Usage
### Import 

```javascript
import { HideOnKeyboard, ShowOnKeyboard } from "react-native-hide-onkeyboard";
```
### Example
Add the component and 
place any views you want to hide inside. 
Here I am hiding the text view when the keyboard is opened.

```js
import { HideOnKeyboard, ShowOnKeyboard } from "react-native-hide-onkeyboard";

// ...

  <HideOnKeyboard style={{ backgroundColor: 'red', height: 100, width: 100 }}>
       
       <Text >I will hide when the key board is open</Text>

   </HideOnKeyboard>

   <ShowOnKeyboard>
        
        <Text> I will only appear when the keyboard is open</Text>
        
    </ShowOnKeyboard>

```
## Styling
Styles: You can style just like you would with a normal react native View component


## Demo

<p float="left">
	<img src="https://github.com/TIKramer/react-native-hide-onkeyboard/blob/main/screenshots/demoSearch.gif" width="300" height="650">


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
