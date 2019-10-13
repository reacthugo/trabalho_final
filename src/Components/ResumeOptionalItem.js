import React from 'react';

const ResumeOptionalItem = ({ optional, onRemove }) => (
    <li key={optional.id}>
        <img
            width="100"
            src={require(`../assets/images/${optional.image}`)}
            alt=""
        />
        <p><strong>Product: </strong>{optional.name}</p>
        <p><strong>Price: </strong>{optional.price}</p>
        <button onClick={ event => onRemove(event, optional)}>Remove</button>
    </li>
);

export default ResumeOptionalItem;
