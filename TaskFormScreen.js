import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native'

export default class TaskFormScreen extends Component {
  static navigationOptions = {
    title: 'Add Task',
  }

  onChange = (text) => {
    this.task = text
  }
  handlePress = () => {
    const { params } = this.props.navigation.state
    params.onAdd(this.task)
    this.props.navigation.goBack(null)
  }
  render () {
    return (
      <View style={styles.container}>

        <TextInput
          onChangeText={this.onChange}
          style={styles.input}/>

        <TouchableHighlight
          style={styles.button}
          onPress={this.handlePress}>
          <Text style={styles.buttonText}>{'Add'}</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.cancelButton]}
          onPress={() => this.props.navigation.goBack(null)}>
          <Text style={styles.buttonText}>{'Cancel'}</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

TaskFormScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 18,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3,
  },
})
