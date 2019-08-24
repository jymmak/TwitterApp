import React from 'react'
import { render } from 'react-dom'
import ExamplePro  from './ExamplePro'

class Product extends React.Component {
    render() {
        return (
            <ExamplePro  product={{ name: 100, price:100 }} />
        )
    }

}
render(
    <Product />,
    document.getElementById('root')
)

