import React from 'react'
import { observer } from 'mobx-react'

@observer
class AppView extends React.Component {
    render() {
        const { appState } = this.props
        return <>
            <div>appState</div>
            <p>timer: {appState.timer}</p>
            <input type='button' value='reset' onClick={appState.reset}/>
        </>
    }
}

export default AppView
