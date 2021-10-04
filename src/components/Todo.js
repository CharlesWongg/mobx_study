import React, { useReducer } from 'react'
// import { useObserver } from 'mobx-react'
import { useObserver } from '../cl-mobx-react-lite'

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
    const [, forceUpdate] = useReducer((x) => x + 1, 0)
    console.log('todo props')
    return useObserver(
        () => (
            <div>
                <input type='checkbox' checked={todo.finished} onChange={() => {
                    change(todo)
                }} />
                {todo.title}
            </div>
        ),
        undefined,
        // { useForceUpdate: () => forceUpdate }
    )
}

export default Todo
