import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

const App = () => {
    const data = [ 
        {name: 'Kayn Shieda', salary: 777, increase: false, id: 1},
        {name: 'Jesse Mccree', salary: 6969, increase: false, id: 2},
        {name: 'Leon Kennedy', salary: 5000, increase: false, id: 3},
        {name: 'Jhin Khada', salary: 4444, increase: true, id: 4},
    ]
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm />
        </div>
    );
};

export default App;