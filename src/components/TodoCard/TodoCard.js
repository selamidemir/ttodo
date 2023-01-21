import React, { useState } from 'react';
import {Text} from 'react-native';

import style from './TodoCard.styles';

export default TodoCard = ({todo}) => {
    const [textView, setTextView] = useState('none');
    const handlePress = () => {
        if(textView === 'none') {
            setTextView('line-through');
            todo.isActive = false;
         } else {
            setTextView('none');
            todo.isActive = true;
         }
    }
  return <Text style={[style.container, {textDecorationLine: textView}]} onPress={handlePress}>👉️ {todo.title}</Text>;
}