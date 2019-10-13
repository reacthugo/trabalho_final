import React from 'react';
import { ConvertToMoneyNumber } from "../Utils";

const ResumeOptionalItem = ({ optional, onRemove }) => (
    <li key={optional.id}>
        <img
            width="100"
            src={require(`../assets/images/${optional.image}`)}
            alt=""
        />
        <p><strong>Nome: </strong>{optional.name}</p>
        <p><strong>Price: </strong>R$ {ConvertToMoneyNumber(optional.price)}</p>
        <button onClick={ event => onRemove(event, optional)}>Remove</button>
    </li>
);

export default ResumeOptionalItem;
