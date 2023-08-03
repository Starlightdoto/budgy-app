import {useEffect, useState} from "react";
import BudgetInput from "./components/BudgetInput";
import ActionButton from "./components/ActionButton";
import currencies, {getCurrencyKey} from "./helpers/globals";
import BudgetCard from "./components/BudgetCard";
import ExpenseList from "./components/ExpenseList";
import {convert} from "./helpers/currencyConverter";



function App() {
    const [incomeInput, setIncomeInput] = useState<string>('');
    const [budget, setBudget] = useState<number>(0);
    const [curCurrency, setCurCurrency] = useState<currencies>(currencies.USD);


    const addBudget = () => {
        setBudget(prevState => {
            return prevState += Number(incomeInput);
        });
        setIncomeInput('');
    }


    const changeCurrency = async () => {
        //@ts-ignore
        const [newCurrency, rate] = await convert(curCurrency, budget, setBudget);
        setCurCurrency(newCurrency);
    }

    const changeBudget = (expense:number) => {
        const sum = expense;
        setBudget(prevState => prevState -= sum);
    }



    return (
      <div className="App">
          <BudgetInput budgetInput={incomeInput } setBudgetInput={setIncomeInput} currency={curCurrency} />
          <ActionButton performAction={addBudget} buttonText={"Add"} className={''} />
          <ActionButton performAction={changeCurrency} buttonText={getCurrencyKey(curCurrency) || "null"} className={''} />
          <BudgetCard currency={curCurrency} budget={budget}/>
          <h1>Expenses</h1>
          <ExpenseList changeBudget={changeBudget} currency={curCurrency} />

      </div>
    );
}

export default App;
