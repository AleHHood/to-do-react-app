import "./app-info.css";

const AppInfo = ({numIncrease, numPersonal}) => {

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании</h1>
            <h2>Общее число сотрудников: {numPersonal}</h2>
            <h3>Премию получат: {numIncrease}</h3>
        </div>
    )
}

export default AppInfo;