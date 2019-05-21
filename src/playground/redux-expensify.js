import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '', caseSensitive = false) => ({
    type: 'SET_TEXT_FILTER',
    text,
    caseSensitive
});

// SORT_BY_DATE
const sortByDate = (rev = false) => ({
    type: 'SORT_BY_DATE',
    rev
});
// SORT_BY_AMOUNT
const sortByAmount = (rev = false) => ({
    type: 'SORT_BY_AMOUNT',
    rev
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate

});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ... expense,
                        ... action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    textCaseSensitive: false,
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text,
                textCaseSensitive: action.caseSensitive
            };
        case 'SORT_BY_DATE':
            if (action.rev) {
                return {
                    ...state,
                    sortBy: 'dateOld'
                };
            } else {
                return {
                    ...state,
                    sortBy: 'dateNew'
                };
            }
        case 'SORT_BY_AMOUNT':
            if (action.rev) {
                return {
                    ...state,
                    sortBy: 'amountMin'
                };
            } else {
                return {
                    ...state,
                    sortBy: 'amountMax'
                };
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

// timestamps (milliseconds) since January 1st 1970 (unix epoch)

// Get visible expenses
const getVisibleExpenses = (expenses, { text, textCaseSensitive, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = textCaseSensitive ? expense.description.includes(text) : expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'dateNew') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'dateOld') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if (sortBy === 'amountMax') {
            return a.amount < b.amount ? 1 : -1;
        } else if (sortBy === 'amountMin') {
            return a.amount > b.amount ? 1 : -1;
        }
    });
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    //console.log(state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({description: 'current', amount: 300, createdAt: 15000 }));

//store.dispatch(removeExpense({ id: expenseOne.expense.id }));

//store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter('C', true));
store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount(true));
store.dispatch(sortByDate(true));

//store.dispatch(setStartDate(0));
//store.dispatch(setEndDate(1250));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'piufih',
        description: 'Jan Rent',
        note: 'Final payment for address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        textCaseSensitive: false,
        sortBy: 'amount', //dateNew or dateOld or amountMax or amountMin
        startDate: undefined,
        endDate: undefined
    }
};

/* 
const user = {
    name: 'Jen',
    age: 29
}

console.log({
    ...user,
    location: 'Norwich',
    age: 30
}) */