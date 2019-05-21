import moment from 'moment';

const filters = {
    text: '',
    textCaseSensitive: false,
    sortBy: 'dateNew',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bills',
    textCaseSensitive: false,
    sortBy: 'amountMin',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };