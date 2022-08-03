import { Component } from 'react';

import './app-filter.css';

class AppFilter  extends Component{
    constructor(props) {
        super(props);
        this.buttons = [
            {dataFilter: 'all', btnText: 'Все сотрудники'},
            {dataFilter: 'promotion', btnText: 'Сотрудники на повышение'},
            {dataFilter: 'moreThan1000', btnText: 'З/П больше 1000$'}
        ]
    }
    render() {
        const {onUpdateFilter, activeFilter} = this.props;

        const buttons = this.buttons.map((btn) => {
            let className = 'btn ';
            if (btn.dataFilter === activeFilter) {
                className += 'btn-light';
            } else {
                className += 'btn-outline-light';
            }
            return (
                <button className={className} type='button' data-filter={btn.dataFilter} key={btn.dataFilter}>
                    {btn.btnText}
                </button>
            )
        });

        return (
            <div className="btn-group" onClick={(evt) => onUpdateFilter(evt.target.getAttribute('data-filter'))}>
                {buttons}
            </div>
        )
    }
};

export default AppFilter;