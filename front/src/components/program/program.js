import React from 'react'
import Table from '../table'
import programService  from '../../services/program.service'

export default class Program extends React.Component {

  state = {}

  componentDidMount() {
    programService.getAll().then(data => {
      this.setState({
        data
      })
    })
  }

  render () {
    return (
      <div>
        <h1>PROGRAMS</h1>
        <Table data={this.state.data ? this.state.data : []}/>
      </div>
    )
  }
}
