import React from 'react'
import { observer } from 'mobx-react'

import Todo from '../components/Todo'

@observer
class TodoList extends React.Component {
    render() {
        const { todoStore } = this.props
        return (
            <div>
                <h3>TodoList</h3>
                {todoStore.todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} change={todoStore.changed}/>
                ))}
                <p>unfinishCount: {todoStore.unfinishCount}</p>           
            </div>
        )
    }
}

export default TodoList
