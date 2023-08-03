import React, {FC} from 'react';


interface BudgetInputProps {
    budgetInput: string,
    setBudgetInput: ((event: any ) => void),
    currency:string,
}

const BudgetInput: FC<BudgetInputProps> = (props) => {
    const {budgetInput, setBudgetInput, currency} = props;
    return (
        <div>
            <label htmlFor="">Add budget:</label>
            <input onChange={(event) => setBudgetInput(event.target.value)} className={"mainInput"} type="text" placeholder={`${currency}0`} value={budgetInput} />
        </div>

    );
};

export default BudgetInput;