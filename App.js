import { StackNavigator } from 'react-navigation'
import ToDoScreen from './ToDoScreen'
import TaskFormScreen from './TaskFormScreen'

const App = StackNavigator({
  ToDoScreen: { screen: ToDoScreen },
  TaskFormScreen: {screen: TaskFormScreen},
})

export default App
