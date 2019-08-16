import React from 'react'
import { render } from 'react-dom'

class Condition extends React.Component {
    //     render() {
    //     let usuarios=['Oscar Blancarte', 'Juan Perez', 'Manuel Juarez', 'Juan Castro' ]
    //     let userList=usuarios.map(user=>{
    //         return (<li>{user}</li>)
    //     })
    //         return (
    //             <div>
    //                 <ul>
    //                     {userList}
    //                 </ul>
    //             </div>
    //         )
    //     }
    render() {
        let usuarios = ['Oscar Blancarte', 'Juan Perez', 'Manuel Juarez', 'Juan Castro']
        return (
            <div>
                <For each='user' index='index' of={usuarios}>
                    <li>{user}</li>
                </For>
            </div>
        )


    }
}
render(
    <Condition />,
    document.getElementById('root')
)