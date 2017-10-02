import React from 'react'
import PropTypes from 'prop-types'
import { View, ListView } from 'react-native'
import TaskRow from './TaskRow'

export default class TaskList extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor (props, context) {
    super(props, context)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    }
  }
  componentWillReceiveProps (nextProps) {
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos)
    this.setState({ dataSource })
  }
  renderRow = (todo) => {
    return (
      <TaskRow
        todo={todo}
        onDone={this.props.onDone}/>
    )
  }
  render () {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          key={this.props.todos}
          renderRow={this.renderRow}/>
      </View>
    )
  }
}

TaskList.propTypes = {
  onDone: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}
