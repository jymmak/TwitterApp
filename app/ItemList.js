import React from 'react'

class ItemList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <li>{this.props.product.name} -
                 {this.props.product.price}</li>
            </div>
        )
    }
}

export default ItemList