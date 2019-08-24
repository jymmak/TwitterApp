import React from 'react'
import { render } from 'react-dom'
import EmployeeForm from './EmployeeForm'


class App extends React.Component {
    save(employee) {
        alert(JSON.stringify(employee))
    }

    render() {

        return (
            <EmployeeForm save={this.save.bind(this)} />
        )
    }
}
render(
    <App />,
    document.getElementById('root')
);
