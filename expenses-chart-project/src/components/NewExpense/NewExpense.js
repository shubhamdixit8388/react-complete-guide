import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
    const saveExpenseDataHandler = newExpenseData => {
        props.addNewExpenseData(newExpenseData);
        stopAddingNewExpense();
    }

  const startAddingNewExpense = () => {
    setIsAddNewFormVisible(true);
  }

  const stopAddingNewExpense = () => {
    setIsAddNewFormVisible(false);
  }

  const [isAddNewFormVisible, setIsAddNewFormVisible] = useState(false);

    return (
        <div className='new-expense'>
            {
                isAddNewFormVisible ? (<ExpenseForm onStopAddingNewExpense={stopAddingNewExpense} onSaveExpenseData={saveExpenseDataHandler} />)
                    : <button onClick={startAddingNewExpense}>Add new expense</button>
            }
            
                <div>{isAddNewFormVisible}</div>
        </div>
    )
}

export default NewExpense;