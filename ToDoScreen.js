import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import TaskList from './TaskList'

export default class ToDoScreen extends React.Component {
  static navigationOptions = {
    title: 'To Do List',
  }
  constructor (props, context) {
    super(props, context)
    this.state = {
      todos: [],
    }
  }
  onAdd = (task) => {
    this.state.todos.push({ task })
    this.setState({ todos: this.state.todos })
  }
  onDone = (todo) => {
    const filteredTodos = this.state.todos.filter((filterTodo) => {
      return filterTodo !== todo
    })
    this.setState({
      todos: filteredTodos,
    })
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <TaskList
          onDone = {this.onDone}
          todos={this.state.todos}/>
        <TouchableHighlight
          onPress={() => navigate('TaskFormScreen', {onAdd: this.onAdd})}
          style={styles.button}>
          <Text style={styles.buttonText}>
            {'Add one'}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

ToDoScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
})
