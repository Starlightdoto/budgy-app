import React, {FC, useState} from 'react';
import ExpenseCard from "./ExpenseCard";
import ActionButton from "./ActionButton";

interface ExpenseListProps{
    currency: string,
    changeBudget: ((expense:number) => void),
}

const randomNum = () => {
    return Math.floor(Math.random() * 100);
}

const ExpenseList: FC<ExpenseListProps> = (props) => {
    const {currency, changeBudget} = props;

    const [expenses, setExpenses] = useState<any[]>([]);

    const addExpenseCard = () => {
        const newCard = { id: new Date().getMilliseconds() + randomNum(), name: "expense_card"}
        setExpenses([...expenses, newCard]);
    }

    const removeExpenseCard = (id:number) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    }

    return (
        <div>
            <ActionButton performAction={addExpenseCard} buttonText={"+"} className={''} />
            {expenses.map((expense) => {
                return <ExpenseCard changeBudget={changeBudget} removeFunction={removeExpenseCard} key={new Date().getMilliseconds() + randomNum()} id={expense.id} currency={currency} />
            })}
        </div>
    );
};

export default ExpenseList;