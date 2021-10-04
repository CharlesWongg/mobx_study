import React from 'react'
import { observer } from 'mobx-react'

@observer
class AppView extends React.Component {
    render() {
        return <>
            <div>appState</div>
            <p>timer: {this.props.appState.timer}</p>
            <input type='button' value='reset' onClick={this.props.appState.reset}/>
        </>
    }
}

export default AppView
