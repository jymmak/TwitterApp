import React from 'react'
import { render } from 'react-dom'
import ItemList from './ItemList'

class Component extends React.Component {

    render() {
        let items = [
            {
                id: 1,
                name: 'Item1',
                price: 100
            },
            {
                id: 2,
                name: 'Item2',
                price: 200
            }
        ]

        return (

            <ul>
                <For each='item' index='index' of={items}>
                    <ItemList  product={item} />
                </For>
            </ul>
        )
    }
}
render(
    <Component />,
    document.getElementById('root')
)

