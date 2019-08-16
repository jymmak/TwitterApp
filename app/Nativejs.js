import React from 'react'
import { render } from 'react-dom'

class Nativejs extends React.Component {
    render() {
        let helloWorld = React.createElement('h1', null, 'Hello World')
        let img = React.createElement('img', { src: 'https://lorempixel.com/600/400/nature' }, null)
        let div = React.createElement('div', null, [helloWorld,img])
        return div
    }

}
render(
    <Nativejs />,
    document.getElementById('root')
)
