import React from 'react';
import { Link } from 'react-router-dom';
import { timestampToDate, formatCurrency } from '../playground/numFormatting';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{formatCurrency(amount,'$')} - {timestampToDate(createdAt)}</p>
    </div>
);

export default ExpenseListItem;