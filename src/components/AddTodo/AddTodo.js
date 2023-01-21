import React, { useState } from 'react';
import {TextInput} from 'react-native';

import style from './AddTodo.styles';

export default AddTodo = ({addTodo}) => {
  const [text, setText] = useState("");

  const handeChange = (e) => {
    setText(e);
  }

  const endEditing = ({nativeEvent}) => {
    setText("");
    const todo = nativeEvent.text;
    addTodo(todo);
  }

  return <TextInput style={style.container} onChangeText={handeChange} onEndEditing={endEditing} value={text} placeholder="Add a new note..." />;
}
