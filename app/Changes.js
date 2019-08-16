import React from 'react'
import { render } from 'react-dom'


class Changes extends React.Component {
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
     
               <Choose>
                    <When condition={variable.sexo === 'man'}>
                        <h1>{variable.man}</h1>
                    </When>
                    <When condition={variable.sexo === 'woman'}>
                        <h1>{variable.woman}</h1>
                    </When>
                    <Otherwise>
                    <h1>{variable.other}</h1>
                    </Otherwise>
                </Choose>

            </div>
        )
    }

}
render(
    <Changes />,
    document.getElementById('root')
)