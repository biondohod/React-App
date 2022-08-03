import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:  [ 
                {name: 'Kayn Shieda', salary: 777, increase: false, promotion: true, id: 1},
                {name: 'Jesse Mccree', salary: 6969, increase: false, promotion: false, id: 2},
                {name: 'Leon Kennedy', salary: 5000, increase: false, promotion: false, id: 3},
                {name: 'Jhin Khada', salary: 4444, increase: true, promotion: false, id: 4},
            ]
        }
        this.maxId = this.state.data[this.state.data.length - 1].id;
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (evt, name, salary, item) => {
        evt.preventDefault();
        
        const {data} = this.state;

        if (name && salary) {
            const newEmployee = {
                name: name,
                salary: salary,
                increase: false, 
                promotion: false, 
                id: ++this.maxId
            }
            
            const newData = [...data, newEmployee];
    
            this.setState({
                data: newData
            })
    
            evt.target.reset();

            item.setState({
                name: '',
                salary: ''
            })
        }

    }
    
    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList data={data}
                               onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
};

export default App;