import React from 'react'
import { useLocalStore, useObserver } from 'mobx-react'

const UseLocalStore = (props) => {
    const countStore = useLocalStore(
        () => ({
            count: props.init ?? 0,
            add() {
                this.count = this.count + 1
            },
            get emoji() {
                return this.count % 2 ? 'This is 2' : 'This is 1'
            }
        }),
        props
    )

    return useObserver(() => (
        <div className='border'>
            <h3>UserLocalStore</h3>
            <button onClick={countStore.add}>count: {countStore.count}</button>
            <p>{countStore.emoji}</p>
        </div>
    ))
}

export default UseLocalStore
