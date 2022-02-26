import "./app-filter.css";

const AppFilter = ({onTypeFilter, typeFilter}) => {

    const btnDataArr = [
        {text:"Все сотрудники", key: "allItems"},
        {text:"На повышение", key: "riseItems"},
        {text:"З/П больше 1000$", key: "allbigSalryItems"}
    ]

    const onFilter = (id) => {
        onTypeFilter(id)
    }

    return (

        <div className="btn-group">

            {btnDataArr.map(({key, text}) => {

                let itemClass = "btn btn-outline-light"

                if(typeFilter === key){
                  itemClass = "btn btn-light"
                  
                }

                return(
                    <button 
                    className={itemClass}
                    type="button"
                    key = {key}
                    onClick={() => onFilter(key)}>
                        {text}
                    </button>
                )
            })}
        </div>
    )
}



export default AppFilter;