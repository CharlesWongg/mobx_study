import React from 'react'
import { useObserver } from 'mobx-react'

// 方法一： 高阶函数
// @observer
// class Todo extends React.Component {
//     render() {
//         console.log('todo props')
//         const { todo, change } = this.props
//         return <div>
//             <input type='checkbox' checked={todo.finished} onChange={() => {
//                 change(todo)
//             }} />
//             {todo.title}
//         </div>
//     }
// }

// 方法二： Observer Component
// class Todo extends React.Component {
//     render() {
//         console.log('todo props')
//         const { todo, change } = this.props
//         return <Observer>{() => {
//             return <div>
//                 <input type='checkbox' checked={todo.finished} onChange={() => {
//                     change(todo)
//                 }} />
//                 {todo.title}
//             </div>            
//         }}</Observer>
//     }
// }

// 方法三： useObserver Hook
const Todo = ({ todo, change }) => {
    console.log('todo props')
    return useObserver(() => (
        <div>
            <input type='checkbox' checked={todo.finished} onChange={() => {
                change(todo)
            }} />
            {todo.title}
        </div>
    ))
}

export default Todo
