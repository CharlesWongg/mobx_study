import React from 'react'
import { useLocalStore, useObserver } from 'mobx-react'

const SmartTodo = () => {
    const todo = useLocalStore(() => ({
        title: 'Click to toggle',
        done: false,
        toggle() {
            todo.done = !todo.done
        },
        get emoji() {
            return todo.done ? 'This is true' : 'This is false'
        }
    }))

    return useObserver(() => (
        <h3 onClick={todo.toggle}>
            {todo.title} {todo.emoji}
        </h3>
    ))
}

export default SmartTodo
