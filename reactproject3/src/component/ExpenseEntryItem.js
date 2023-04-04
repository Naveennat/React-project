import React from 'react';
import './ExpenseEntryItem.css';
class ExpenseEntryItem extends React.Component {
    render() {
        return(
            <div className="itemStyle">Entry-Item:
                <div><b>Item:</b><em>Mango Juice</em></div>
                <div><b>Amount:</b><em>30.00</em></div>
                <div><b>Spend Date: <em>2022-10-10</em></b></div>
                <div><b>Category:</b><em>Food</em></div>
            </div>      
              );
    }
}

export default ExpenseEntryItem;