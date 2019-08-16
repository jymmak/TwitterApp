import React from 'react'
import { render } from 'react-dom'

class Validations extends React.Component {
    render() {
        let variable = {
            sexo: '',
            man: 'Hola amigo',
            woman: 'hola amiga',
            other: 'hola ami@'
        }
        let message = null
        if (variable.sexo === 'man') {
            message = variable.man
        } else if (variable.sexo === 'woman') {
            message = variable.woman
        } else {
            message = variable.other
        }
        return (
            <div>
                <h1>
                    {message}
                </h1>
                <img src="https://placeimg.com/200/400" alt="" />
                <br />
                <button onClick={() => alert('holaaa')}>Hello!!</button>
            </div>
        )
    }
}
render(
    <Validations />,
    document.getElementById('root')
)