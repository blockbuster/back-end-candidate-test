import React from 'react'
import Table from '../table'
import productService from '../../services/product.service'

export default class Product extends React.Component {

  state = {}

  componentDidMount(){
    productService.getAll().then(data => {
      this.setState({
        data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>PRODUCTS</h1>
        <Table data={this.state.data ? this.state.data : []}/>
      </div>
    )
  }
}

