import React from 'react'
import { render } from 'react-dom'

class Practice extends React.Component {
    render() {
        let variable = {
            sexo: 'man',
            man: 'Hola amigo',
            woman: 'Hola amiga'
        }
        return (
            <div>
                <h1>{variable.sexo==='man' ? variable.man : variable.woman}</h1>
                <img  src="https://placeimg.com/200/400" alt=""/>
                <br/>
                <button onClick={()=>alert('holaaa')}>Hello!!</button>
            </div>
        )
    }
}

render(
    <Practice />,
    document.getElementById('root')
)