import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e7e7e7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
  },
})

export default class TaskRow extends Component {
  handlePress = () => {
    this.props.onDone(this.props.todo)
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}</Text>
        <TouchableHighlight
          style={styles.doneButton}
          onPress={this.handlePress}>
          <Text>{'Done'}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskRow.propTypes = {
  onDone: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
}
