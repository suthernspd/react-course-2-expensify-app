import moment from 'moment';

// Get visible expenses
export default (expenses, { text, textCaseSensitive, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
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
