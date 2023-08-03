import React, {FC} from 'react';

interface ActionButtonProps {
    performAction: (() => void),
    buttonText: string,
    className: string,
}

const ActionButton: FC<ActionButtonProps> = (props) => {
    const {performAction, buttonText, className} = props;
    return (
        <button onClick={performAction} className={`actionButton ${className}`}>{buttonText}</button>
    );
};

export default ActionButton;