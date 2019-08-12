import React from 'react'
import { render } from 'react-dom'


class App extends React.Component {
    render() {
        let variable={
            message:'Hello world desde una variable'
        }
        return (
            <React.Fragment>
            <h1>{variable.message}</h1>
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
