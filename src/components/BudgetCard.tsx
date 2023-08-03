import React, {FC} from 'react';

interface BudgetCardProps {
    currency: string,
    budget: number,
}

const BudgetCard:FC<BudgetCardProps> = (props) => {
    const {currency, budget} = props;
    return (
        <div className={"wrapper"}>
            <h1 className={"header"}>Your budget:</h1>
            <h2 className={"sum"}>{currency}{budget}</h2>
        </div>
    );
};

export default BudgetCard;