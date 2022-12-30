import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
    const [year, setYear] = useState(2020);
    const filteredExpenses = props.expenses.filter(expense => new Date(expense.date).getFullYear() == year);
    const handleYearChange = selectedYear => {
        setYear(selectedYear);
    }
    
    return (
        <Card className="expenses">
            <ExpensesFilter year={year} onYearChange={handleYearChange}></ExpensesFilter>
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;