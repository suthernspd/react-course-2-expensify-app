import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with many expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={22} expensesTotal={235123456}/>);
    expect(wrapper).toMatchSnapshot();
});