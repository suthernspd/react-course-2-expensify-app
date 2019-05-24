import React from 'react';
import { Link } from 'react-router-dom';
import { timestampToDate, formatCurrency } from '../actions/numFormatting';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
        <Link className="list-item" to={`/edit/${id}`}>
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__subtitle">{timestampToDate(createdAt)}</span>
            </div>
            <h3 className="list-item__date">{formatCurrency(amount,'$')}</h3>
        </Link>
);

export default ExpenseListItem;