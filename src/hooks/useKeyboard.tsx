import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export default function useKeyboard() {
  const [keyBoardOpen, setKeyBoardOpen] = useState(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardOpen(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return { keyBoardOpen };
}
