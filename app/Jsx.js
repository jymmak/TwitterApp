import React from 'react'
import { render } from 'react-dom'


class Jsx extends React.Component {
    render() {
        let variable = {
            sexo: 'woman',
            man: 'hola amiga',
            woman: 'hola amiga',
            other: 'hola amig@'
        }

        return (
            <div>
                <img src="https://placeimg.com/200/400" alt="" />
                <br />
                <button onClick={() => alert('holaaa')}>Hello!!</button>
                <If condition={variable.sexo === 'man'}>
                    <h1>{variable.man}</h1>
                </If>
                <If condition={variable.sexo === 'woman'}>
                    <h1>{variable.woman}</h1>
                </If>

            </div>
        )
    }
}
render(
    <Jsx />,
    document.getElementById('root')
)