import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        textCaseSensitive: false,
        sortBy: 'dateNew',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount Max to Min', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', rev: false });
    expect(state.sortBy).toBe('amountMax');
});

test('should set sortBy to amount Min to Max', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', rev: true });
    expect(state.sortBy).toBe('amountMin');
});

test('should set sortBy to date Newest to Oldest', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE', rev: false };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('dateNew');
});

test('should set sortBy to date Oldest to Newest', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE', rev: true };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('dateOld');
});

test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set case sensitive filter', () => {
    const textCaseSensitive = true;
    const action = {
        type: 'SET_CASE_SENSITIVE',
        textCaseSensitive
    };
    const state = filtersReducer(undefined, action);
    expect(state.textCaseSensitive).toBe(true);
});

test('should set startDate filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});