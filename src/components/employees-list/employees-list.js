import { Component } from 'react';

import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

class EmployeesList extends Component {
    render() {
        const {data, onDelete, onToggleProp, onInputSalary} = this.props;
        
        const items = data.map((item) => {
            const {id} = item;
            return (
                <EmployeesListItem key={id} {...item} 
                                   onDelete={() => onDelete(id)}
                                   onToggleProp={(evt) => onToggleProp(id, evt.currentTarget.getAttribute('data-toggle'))}
                                   onInputSalary={onInputSalary}/>
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
