import './employees-list-item.css';

const EmployeesListItem = (props) => {
    
    const {name, salary, onDelete, onToggleProp, rise, increase, onChangeSalary} = props;
    const classIncrease = increase ? " increase" : "";
    const likeClass = rise ? " like" : "";
        
    return(
        <li className={"list-group-item d-flex justify-content-between" + likeClass + classIncrease}>
        <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
        <input type="text" className="list-group-item-input" 
        value= {salary + '$'} 
        onChange={onChangeSalary}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm "
                data-toggle="increase"
                onClick={onToggleProp}>
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
    )
}


    
   

export default EmployeesListItem;