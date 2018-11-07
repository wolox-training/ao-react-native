import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { strings } from '../../i18n';
import { itemsTodoList } from '../../../propTypes/propTypes';

import Title from './components/Title';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';
import styles from './styles';

function TodoList({ items, addItem, removeItem, toggleItemCompleted, removeCompleted }) {
  return (
    <View style={styles.container}>
      <Title title={strings.TITLE_MESSAGE()} />
      <Input placeholder={strings.PLACEHOLDER_ITEM()} onSubmit={addItem} />
      <View style={styles.divider} />
      <List items={items} onRemoveItem={removeItem} onToggleItemCompleted={toggleItemCompleted} />
      <View style={styles.divider} />
      <Footer onRemoveCompleted={removeCompleted} />
    </View>
  );
}

TodoList.propTypes = {
  items: itemsTodoList,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleItemCompleted: PropTypes.func.isRequired,
  removeCompleted: PropTypes.func.isRequired
};

export default TodoList;
