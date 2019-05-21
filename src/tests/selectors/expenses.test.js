import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should filter by text value, sorted date new to old', () => {
    const filters = {
        text: 'e',
        textCaseSensitive: false,
        sortBy: 'dateNew',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1] ]);
});

test('should filter by case sensitive text value of E, sorted date new to old', () => {
    const filters = {
        text: 'E',
        textCaseSensitive: true,
        sortBy: 'dateNew',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ ]);
});

test('should filter by case sensitive text value of R, sorted date new to old', () => {
    const filters = {
        text: 'R',
        textCaseSensitive: true,
        sortBy: 'dateNew',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1] ]);
});

test('should filter by text value, sorted date old to new', () => {
    const filters = {
        text: 'e',
        textCaseSensitive: false,
        sortBy: 'dateOld',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[2] ]);
});

test('should sort date new to old', () => {
    const filters = {
        text: '',
        textCaseSensitive: false,
        sortBy: 'dateNew',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should sort date old to new', () => {
    const filters = {
        text: '',
        textCaseSensitive: false,
        sortBy: 'dateOld',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[0], expenses[2] ]);
});

test('should sort max to min', () => {
    const filters = {
        text: '',
        textCaseSensitive: false,
        sortBy: 'amountMax',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});

test('should sort min to max', () => {
    const filters = {
        text: '',
        textCaseSensitive: false,
        sortBy: 'amountMin',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[2], expenses[1] ]);
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        textCaseSensitive: false,
        sortBy: 'dateNew',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        textCaseSensitive: false,
        sortBy: 'dateNew',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ]);
});