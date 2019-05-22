import moment from 'moment';

export const timestampToDate = (timestamp) => {
    const createdAtMoment = moment(timestamp);
    return createdAtMoment.format("h:mm:ss a, Do MMM YYYY");
}

export const formatCurrency = (amount, currency='£') => {
    return currency + formatNumber(amount/100);
}

export const formatNumber = function(num){
    //2 decimal points
    //commas per 3 digits
    //eg 2000 -> + 2,000.00
    let numSplit, int, dec, newInt;

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