import React from 'react'
import { render } from 'react-dom'


class App extends React.Component {
    render() {
        let variable = {
            message: 'Nuestro proyecto'
        }
        return (
            <h1>{variable.message}</h1>

        )
    }
}
render(
    <App />,
    document.getElementById('root')
);
