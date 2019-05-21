import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{formatCurrency(amount,'$')} - {timestampToDate(createdAt)}</p>
    </div>
);

export default ExpenseListItem;



const timestampToDate = (timestamp) => {
    const createdAtMoment = moment(timestamp);
    return createdAtMoment.format("h:mm:ss a, Do MMM YYYY");
}

const formatCurrency = (amount, currency='£') => {
    return currency + formatNumber(amount/100);
}

var formatNumber = function(num){
    //2 decimal points
    //commas per 3 digits
    //eg 2000 -> + 2,000.00
    var numSplit, int, dec, newInt;

    num = Math.abs(num);
    num = num.toFixed(2);
    numSplit = num.split('.');
    int = numSplit[0];
    
    newInt = '';
    if (int.length > 3){
        newInt = int.substr(int.length-3,3)
        int = int.substr(0,int.length-3);
        while (int.length > 3) {
            newInt = int.substr(int.length-3,3) + ',' + newInt;
            int = int.substr(0,int.length-3);
        }
        newInt = int + ',' + newInt;
    } else {
        newInt = int
    }
    dec = numSplit[1];

    return newInt + '.' + dec;
};