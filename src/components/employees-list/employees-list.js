import { Component } from 'react';

import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

class EmployeesList extends Component {
    render() {
        const {data, onDelete, onToggleProp} = this.props;
        
        const items = data.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <EmployeesListItem key={id} {...itemProps} 
                                   onDelete={() => onDelete(id)}
                                   onToggleProp={(evt) => onToggleProp(id, evt.currentTarget.getAttribute('data-toggle'))}/>
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
