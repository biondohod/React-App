import { Component } from 'react';

import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

class EmployeesList extends Component {
    render() {
        const {data, onDelete, onToggleIncrease, onTogglePromotion} = this.props;
        
        const items = data.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <EmployeesListItem key={id} {...itemProps} 
                                   onDelete={() => onDelete(id)}
                                   onToggleIncrease={() => onToggleIncrease(id)}
                                   onTogglePromotion={() => onTogglePromotion(id)}/>
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
