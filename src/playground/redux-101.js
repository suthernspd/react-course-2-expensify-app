import { createStore } from 'redux';

// Action generators - functions that return action objects
/* 
const add = ({ a,b }, c) => {
    return a + b + c;
};

console.log(add({ a:1, b:12 }, 2)); */

const incrementCount = ({ incrementBy = 1 }) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({ decrementBy = 1 }) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({ count = 0 }) => ({
    type: 'SET',
    count
});
const resetCount = () => ({
    type: 'RESET',
});

// Reducers
//1. Reducers are pure functions 
//2. Never change state or action

const countReducer = ((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

const store = createStore(countReducer);

const unsub = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
store.dispatch(decrementCount({ decrementBy: 8}));

store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'SET',
    count: 101
});
store.dispatch(setCount({ count: 78}));
store.dispatch(resetCount());