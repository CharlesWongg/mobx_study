import React from 'react'
// import { observer } from 'mobx-react'

import Todo from '../components/Todo'

// @observer
class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            count: 0,
        }
    }

    render() {
        const { todoStore } = this.props
        const { input, count } = this.state
        return (
            <div>
                <h3>TodoList</h3>

                <input type='text' value={input} onChange={(e) => this.setState({ input: e.target.value })} />
                <button onClick={() => this.setState({ count: count + 1 })}>add Click {count}</button>
                {todoStore.todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} change={todoStore.changed}/>
                ))}
                <p>unfinishCount: {todoStore.unfinishCount}</p>
                <Child count={{ count }}/>         
            </div>
        )
    }
}

export default TodoList

const Child = React.memo((props) => {
    console.log('child porps')
    return <div>Child</div>
}, (prevProps, nextProps) => prevProps.count.count === nextProps.count.count)
