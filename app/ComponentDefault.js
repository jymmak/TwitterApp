import React from 'react'
import PropTypes from 'prop-types'

class ComponentDefault extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li>{this.props.productName}-{this.props.productPrice}</li>
        )
    }
}

ComponentDefault.protoTypes = {
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number
}

ComponentDefault.defaultProps = {
    productPrice: 0
}

export default ComponentDefault
