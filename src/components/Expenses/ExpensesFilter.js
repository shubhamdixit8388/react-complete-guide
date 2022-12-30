import './ExpensesFilter.css';

const ExpensesFilter = props => {
    console.log(props);
    const handleYearChange = event => {
        props.onYearChange(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Fiter by year</label>
                <select value={props.year} onChange={handleYearChange}>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;