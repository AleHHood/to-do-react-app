import './employees-add-form.css';
import {Component} from 'react';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValue = (e) => {
        this.setState(
            () => ({
                [e.target.name]: e.target.value
            })
        )
    }

    render(){
        const {onAddUser} = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        name="name"
                        onChange={this.onValue}
                        value={this.state.name}
                        placeholder="Как его зовут?" />
                    <input type="number"
                        className="form-control new-post-label"
                        name="salary"
                        value={this.state.salary}
                        onChange={this.onValue}
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={(e) => onAddUser(e, this.state)}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;