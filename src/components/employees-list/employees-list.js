import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';
import { Component } from 'react';

class EmployeesList extends Component {
    render() {
        const {data} = this.props;
        
        const items = data.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <EmployeesListItem key={id} {...itemProps}/>
            );
        });
        return (
            <ul className="app-list list-group">
                {items}
            </ul>
        );
    }

};

export default EmployeesList;
