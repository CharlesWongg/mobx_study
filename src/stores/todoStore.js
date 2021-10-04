import { action, autorun, computed, observable } from "mobx";

class TodoStore {
    todos = observable([
        {
            id: 0,
            finished: false,
            title: '任务1',
        },
        {
            id: 1,
            finished: true,
            title: '任务2',
        },
        {
            id: 2,
            finished: false,
            title: '任务3',
        },          
    ])

    @computed get unfinishCount() {
        return this.todos.filter((item) => !item.finished).length
    }

    changed = action((todo) => {
        todo.finished = !todo.finished
    })
}

const todoStore = new TodoStore()

autorun(() => {
    console.log(`未完成任务：${todoStore.unfinishCount}` )
})

export default todoStore
