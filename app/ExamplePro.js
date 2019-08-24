import React from 'react'
import PropTypes from 'prop-types'


class ExamplePro extends React.Component {
    constructor() {
        super(props)
    }
    render() {
        return (
            <li>{this.props.product.name}-{this.props.product.price}</li>
        )
    }
}

ExamplePro.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired

}
export default ExamplePro 