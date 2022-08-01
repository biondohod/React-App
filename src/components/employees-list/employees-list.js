import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data}) => {
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
};

export default EmployeesList;
