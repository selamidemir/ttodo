import React from 'react';
import {FlatList} from 'react-native';
import TodoCard from '../TodoCard';

import style from './TodoList.styles';

export default TodoList = ({todos}) => {

  const renderTodo = ({item}) => <TodoCard todo={item} />;
  
  
  return <FlatList 
    data={todos} 
    renderItem={renderTodo} />;
}
