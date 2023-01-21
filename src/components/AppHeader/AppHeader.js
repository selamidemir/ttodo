import React from 'react';
import {Text} from 'react-native';

import style from './AppHeader.styles';

export default AppHeader = ({todos}) => {
  return <Text style={style.container}>TTODOS ({todos})</Text>;
}
