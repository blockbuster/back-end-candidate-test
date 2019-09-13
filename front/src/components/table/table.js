import React from 'react'

const Table = ({ data }) => {

  if (!Array.isArray(data)) {
    throw Error()
  }

  let keys = []
  for (const item of data ) {
    keys = [ ...keys, ...Object.keys(item) ]
  }
  keys = new Set(keys)
  keys = Array.from(keys)
  const tableHead = <tr>{ keys.map(key => <td key = {key}><b>{key}</b></td>) }</tr>

  const tableItems = data.map(item => (
    <tr key = {item.id}>
      { keys.map(key => {
          return <td key = { item.id.toString()+key }> { item[key] ? item[key] : 'N/A' } </td>
        })
      }
    </tr>
  ))

  return (
    <table>
      <thead>
        { tableHead }
      </thead>

      <tbody>
        { tableItems }
      </tbody>
    </table>
  )
}

export default Table
