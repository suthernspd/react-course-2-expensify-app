import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setCaseSensitive, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onCheckboxChange = (e) => {
        this.props.setCaseSensitive(e.target.checked);
    }
    onSortChange = (e) => {
        if (e.target.value === 'dateNew') {
            this.props.sortByDate(false);
        } else if (e.target.value === 'dateOld') {
            this.props.sortByDate(true);
        } else if (e.target.value === 'amountMax') {
            this.props.sortByAmount(false);
        } else if (e.target.value === 'amountMin') {
            this.props.sortByAmount(true);
        }
    };
    render() {
        return (
            <div>
                <input type="text"
                value={this.props.filters.text}
                onChange={this.onTextChange}/>
                <label className="container">Case Sensitive
                    <input type="checkbox"
                    checked={this.props.filters.textCaseSensitive}
                    onChange={this.onCheckboxChange} />
                </label>
                <select 
                value={this.props.filters.sortBy}
                onChange={this.onSortChange} >
                    <option value="dateNew">Date - New to Old</option>
                    <option value="dateOld">Date - Old to New</option>
                    <option value="amountMax">Amount - Max to Min</option>
                    <option value="amountMin">Amount - Min to Max</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />
            </div>
            );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setCaseSensitive: (checked) => dispatch(setCaseSensitive(checked)),
    sortByDate: (rev) => dispatch(sortByDate(rev)),
    sortByAmount: (rev) => dispatch(sortByAmount(rev)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);