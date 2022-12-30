import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

function App() {
  const [expenses, updateExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  
  const saveExpenseDataHandler = (newExpenseData) => {
    console.log(newExpenseData);
    updateExpenses((prevExpenses) => {
      const temp = [newExpenseData, ...prevExpenses];
      return temp;
    });
    console.log(expenses);
  }

  return (
    <div className="App">
      <NewExpense addNewExpenseData={saveExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
