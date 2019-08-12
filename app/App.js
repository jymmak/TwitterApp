import React from 'react'
import { render } from 'react-dom'


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
            <h1>Curso React</h1>
            <img  src="https://placeimg.com/200/400" alt=""/>
            <br></br>
            <button onClick={()=>alert('holaaa')}>Hello!!</button>
            </React.Fragment>
        )
    }
}
render(
    <App />,
    document.getElementById('root')
);
