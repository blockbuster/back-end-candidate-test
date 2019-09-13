import React from 'react'
import saveFileService from '../../services/save-file.service'

export default class SaveFile extends React.Component {

  state = {
    text: null,
    responseText: null
  }

  onChange(e) {
    this.setState({ text: e.target.value })
  }

  onClick() {
    // send request
    saveFileService.sendStingForSavingToFile(this.state.text).then(responseText => {
      this.setState({
        responseText
      })
      setTimeout(() => {
        this.setState({
          responseText: null
        })
      }, 1000)
    })
  }

  render() {
    return (
      <div>
        <input type='text' onChange={ this.onChange.bind(this) } value={this.state.text? this.state.text: ''}/>
        <button onClick={ this.onClick.bind(this) }>Save file to minio!</button>
        <p>{this.state.responseText}</p>
      </div>
    )
  }
}
