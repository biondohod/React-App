import './employees-list-item.css';
import {Component} from 'react';

class EmployeesListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            increase: this.props.increase,
            promotion: this.props.promotion
        }
    }

    setIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    setPromotion = () => {
        this.setState(({promotion}) => ({
            promotion: !promotion
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase, promotion} = this.state;

        let itemClassNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            itemClassNames += ' increase';
        }
        if (promotion) {
            itemClassNames += ' like';
        }
        
        return (
            <li className={itemClassNames}>
                <span onClick={this.setPromotion} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.setIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
};

export default EmployeesListItem;