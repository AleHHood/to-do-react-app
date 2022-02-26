import {Component} from "react";
import "./search-panel.css"

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            subStr: ''
        }
    }

    onGetSearchSubStr = (e) => {
        const subStr = e.target.value
        this.setState(() => ({subStr}))
        this.props.onSearchStr(subStr);
    }

    render(){

        return (
            <input 
            type="text"
            className="form-control search-input" 
            placeholder="Найти сотрудника"
            value = {this.state.subStr}
            onChange = {this.onGetSearchSubStr}
            />
        )
    }

}


export default SearchPanel;