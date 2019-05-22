import React from 'react';
import { connect } from 'react-redux';
import { formatCurrency } from '../playground/numFormatting';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    return (
        <div>
        <h1>Viewing {expenseCount} expense{expenseCount === 1 ? '' : 's'} totalling {formatCurrency(expensesTotal,'$')}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);