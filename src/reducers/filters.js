import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    textCaseSensitive: false,
    sortBy: 'dateNew',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
export default (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_CASE_SENSITIVE':
            return {
                ...state,
                textCaseSensitive: action.textCaseSensitive
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