import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AddTodo from './components/AddTodo';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import uuid from 'react-native-uuid';

const todos = [];

export default function App() {
  const [todosLength, setTodosLenght] = useState([]);
  const [todosList, setTodosList] = useState(todos);

  const addNewTodo = todo => {
    if(todo === '') return;
    todos.push({
      id: uuid.v4(),
      title: todo,
      isActive: true,
    });
    setTodosLenght(todos.length);
    setTodosList(todos);
  };
  return (
    <SafeAreaView style={style.container}>
      <AppHeader todos={todosLength} style={style.app_header} />
      <TodoList todos={todosList} />
      <AddTodo style={style.add_todo} addTodo={addNewTodo} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  app_header: {
    flex: 1,
  },
  todo_list: {
    flex: 10,
  },
  add_todo: {
    flex: 2,
  },
});
