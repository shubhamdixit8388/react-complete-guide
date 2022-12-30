import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [year, setYear] = useState(2020);
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year.toString());
    const handleYearChange = selectedYear => {
        setYear(selectedYear);
    }
    
    return (
        <Card className="expenses">
            <ExpensesFilter year={year} onYearChange={handleYearChange}></ExpensesFilter>
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;