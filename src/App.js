import './App.css';
import React from "react";
import Balance from "./Balance/Balance";
import Form from "./Form/Form";
import Transactions from "./Transactions/Transactions";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      balance:0,
      transactions:[],
    }
  }

  onSaveValue = ({date,comment,value}) => {
        this.setState({
            balance: this.state.balance + +value,
            transactions:[{
                date,
                comment,
                value,
                id:new Date(),
            },...this.state.transactions]
        })
  }

  render() {
    return (
        <div>
          <Balance balance={this.state.balance}/>
          <Form onSaveValue = {this.onSaveValue}/>
          <Transactions transaction={this.state.transactions}/>
        </div>
    );
  }

}

export default App;
