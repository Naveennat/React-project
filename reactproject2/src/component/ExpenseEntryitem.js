import React from "react";
import './ExpenseEntryitem.css';

class ExpenseEntryitem extends React.Component {
    render(){
        return (
            <div className="itemStyle">
                <div><b>Item:</b><em>mango</em></div>
                <div><b>amount:</b><em>200.0</em></div>
                <div><b>category:</b><em>fruit</em></div>

            </div>
        )
    }
}
export default ExpenseEntryitem;