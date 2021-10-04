import React from 'react'
import { observer } from 'mobx-react'

@observer
class Todo extends React.Component {
    render() {
        const { todo, change } = this.props
        return <div>
            <input type='checkbox' checked={todo.finished} onChange={() => {
                change(todo)
            }} />
            {todo.title}
        </div>
    }
}

export default Todo
