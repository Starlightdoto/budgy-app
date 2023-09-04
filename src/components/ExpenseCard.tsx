import React, {FC, useEffect, useState} from 'react';
import ActionButton from "./ActionButton";
import DeleteButton from "./DeleteButton";

interface ExpenseCardProps{
    currency: string,
    id: number,
    removeFunction: ((id:number) => void),
    changeBudget: ((expense:number) => void),
    totalExpense: number[],
    setTotalExpense: (prevState: any) => any,
}

const ExpenseCard:FC<ExpenseCardProps> = (props) => {
    const {currency, id, removeFunction, changeBudget, totalExpense, setTotalExpense} = props;
    const [expenseInput, setExpenseInput] = useState<string>('');
    const [expense, setExpense] = useState<number>(0);


    const addExpense = () => {
        const newExpense = Number(expenseInput);
        setExpense(prevState => prevState + newExpense);

        //@ts-ignore
        setTotalExpense(prevState => [...prevState,newExpense]);
        setExpenseInput('');
    }

    const deleteExpenseCard = () => {
        removeFunction(id);
    }


    return (
        <div className={"expense-wrapper"}>
            <div>
                <h1 className={"header"} contentEditable={true}>Name your expense...</h1>
            
            </div>
            <div className={"inside-wrapper"}>
                <input onChange={(event) => setExpenseInput(event.target.value)} type="text" className={"expense-input"} placeholder={`${currency}0`} value={expenseInput}/>
                <ActionButton performAction={addExpense} buttonText={"Add expense"} className={'expense'} />
                <DeleteButton onClick={deleteExpenseCard} />
            </div>
        </div>
    );
};

export default ExpenseCard;