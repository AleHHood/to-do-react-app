import { Component } from "react";

import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {data :
      [
        {name: "Alex L.", salary: "3200", increase: true, rise: false, id: 1},
        {name: "Natasha K.", salary: "700", increase: false, rise: false, id: 2},
        {name: "Dima B.", salary: "1200", increase: false, rise: false, id: 3},
      ],
      maxId: 4,
      subStr: '',
      typeFilter: "allItems"
    }
    
  }

  onDelete = (id) => {
    const Arr = this.state.data.filter((item) => item.id !== id)
    this.setState(() => ({
      data: Arr
    })) 
  }

  onAddUser = (e, dataUser) => {
    e.preventDefault();
    const {salary, name} = dataUser
    if(salary.length > 2 && name.length > 2){

      const arr = this.state.data.filter(() => true);
      const newUser = {id: this.state.maxId, increase: false, rise: false, ...dataUser};
  
      arr.push(newUser);
      this.setState(({maxId}) => ({
        data: arr,
        maxId: ++maxId
      }))
    }
  }

  onToggleProp = (id, prop) => {
    
    this.setState(({data})=>({
      data: data.map((item)=> {

        if(item.id === id){
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  onSearchStr = (subStr) => {
    this.setState(() => ({subStr}))
  }

  getSearchedData = (subStr, items) => {
  
    if(subStr.length <= 0){
      return items
    }

    return items.filter((item)=>{

      if(item.name.indexOf(subStr) >= 0){
        return item
      }
      return false
    })
  }

  onTypeFilter = (typeFilter) => {
    this.setState(()=> ({
      typeFilter: typeFilter
    }))
  }

  getFilteredData = (typeFilter, data) => {
    switch (typeFilter) {
      case "allItems":
        return data

      case "riseItems":
        return data.filter((item) => {
          if(item.rise){
            return item
          }
          return null
        })

      case "allbigSalryItems":
        return data.filter((item) => {
          if(+item.salary > 1000){
            return item
          }
          return null
        })
    
      default:
        return data
    }
  }

  //Изменение ЗП прямо из инпута ЗП
  onChangeSalary = (newSalary, id) => {
    //Копируем старый массив рабов
    const dataCopy = this.state.data.slice(0)
    
    if(newSalary === '$'){
      newSalary = 0
    }

    //Записываем новое значение зарплаты в копию
    dataCopy.forEach((item) => {
      if(item.id === id){
        newSalary = parseInt(newSalary, 10)
        item.salary = newSalary
      }
    })

    //Обновляем state
    this.setState(() => ({
      data: dataCopy
    }))
  }
  
  render(){
    const {data, typeFilter, subStr} = this.state;
    const numIncrease = data.filter((item) => item.increase).length
    const numPersonal = data.length
    const visibleData = this.getFilteredData(typeFilter, this.getSearchedData(subStr, data))

    return (
      <div className="app">
        <AppInfo 
        numIncrease = {numIncrease}
        numPersonal = {numPersonal}/>

        <div className="search-panel">
          <SearchPanel 
          onSearchStr = {this.onSearchStr}
          />
          <AppFilter
          onTypeFilter = {this.onTypeFilter}
          typeFilter={typeFilter}
          />
        </div>
        
        <EmployeesList data={visibleData} 
        onDelete = {this.onDelete}
        onToggleProp = {this.onToggleProp}
        onToglleRise = {this.onToglleRise}
        onChangeSalary =  {this.onChangeSalary}
        />
        <EmployeesAddForm 
        onAddUser = {this.onAddUser}
        />
      </div>
    )
  }
}

export default App;