import React from 'react'
import Table from '../table'
import userService from '../../services/user.service'

export default class User extends React.Component {

  state = {}

  componentDidMount(){
    userService.getAll().then(data => {
      this.setState({
        data
      })
    })
  }

  render()
  {
    return (
      <div>
        <h1>USERS</h1>
        <Table data={this.state.data? this.state.data: []}/>
      </div>
    )
  }
}

