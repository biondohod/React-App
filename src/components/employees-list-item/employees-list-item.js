import {Component} from 'react';

import './employees-list-item.css';
class EmployeesListItem extends Component {

    render() {
        const {name, salary, increase, promotion, onDelete, onToggleIncrease, onTogglePromotion} = this.props;

        let itemClassNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            itemClassNames += ' increase';
        }
        if (promotion) {
            itemClassNames += ' like';
        }

        return (
            <li className={itemClassNames}>
                <span onClick={onTogglePromotion} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
};

export default EmployeesListItem;