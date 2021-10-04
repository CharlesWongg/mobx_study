import { observable, action } from "mobx";

const appState = observable({
    timer: 0
})

appState.reset = action(() => appState.timer = 0)

setInterval(action(() => {
    appState.timer += 1
}), 1000)

export default appState
