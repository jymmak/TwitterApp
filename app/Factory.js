import React from 'react'
import { render } from 'react-dom'

class Factory extends React.Component {
    render() {
        
        return React.DOM.div(null,
            React.DOM.h1(null, 'Hello World'),
            React.DOM.img({ src: 'https://facebook.github.io/react/img/logo.svg' }, null)

        )
    }
}
// render(
//     <Factory />,
//     document.getElementById('root')
// )

let appFactory=React.createFactory(Factory);
render (appFactory(null,null), document.getElementById('root'))

