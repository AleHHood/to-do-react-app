import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css';

const EmployeesList =  ({data, onDelete, onToggleProp, onChangeSalary}) => {

    const elemensts = data.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
            /* name={item.name} 
            salary={item.salary}
            increase={item.increase}  */
            key = {id}
            {...itemProps}
            onDelete = {() => onDelete(id)}
            onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
            onChangeSalary =  {(e) => onChangeSalary(e.target.value, id)}
            />
        )
    });

    return(
        <ul className="app-list list-group">
            {elemensts}
        </ul>
    )
}

export default EmployeesList;