import React from 'react'
import Table from '../table'
import transactionService from '../../services/transaction.service'

export default class  Transaction extends React.Component {


  state = {}

  componentDidMount() {
    transactionService.getAll().then(data => {
      this.setState({
        data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>TRANSACTIONS</h1>
        <Table data={this.state.data ? this.state.data : []}/>
      </div>
    )
  }
}

