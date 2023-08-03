import React, {FC} from 'react';

interface DeleteButtonProps {
    onClick:(() => void),
}

const DeleteButton:FC<DeleteButtonProps> = ({onClick}) => {
    return (
        //@ts-ignore
        <button onClick={onClick} className={"expense-delete-btn"}>Remove</button>
    );
};

export default DeleteButton;