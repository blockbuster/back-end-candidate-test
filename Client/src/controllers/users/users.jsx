import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AppBar from '../../components/appBar';
import { USERS } from './users.graph';

const Users = () => {
  const { loading, error, data } = useQuery(USERS);

  const getUser = (id) => {
    console.log(id)
  }
  
  const getHeaders = (data) => {
    return Object.keys(data.users[0]).filter(key => key !== '__typename');
  }
  return (
    <div className="users">
      <AppBar />
      <div> {loading ? (<div>loading...</div>) : null}
        {error ? (<div>Something went wrong fetching your data!</div>) : null}
        {data ? (
          <div>
            <Table stickyHeader style={{ marginTop: "30px" }}>
              <TableHead>
                <TableRow>
                  {getHeaders(data).map(key => (
                    <TableCell
                      key={key}
                      style={{ align: "left" }}
                    >
                      {key !== '__typename' ? key : null}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.users.map(user => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={user.id} onClick={() => getUser(user.id)} style={{ cursor: "pointer" }}>
                    <Link
                  to={`/users/${user.id}`}
                  style={{ textDecoration: 'none' }}
                >{getHeaders(data).map(key => (
                      <TableCell key={key} style={{ align: "left" }}>
                        {key === "created" ? new Date(user[key]).toLocaleDateString() : user[key]}
                      </TableCell>
                    ))}</Link>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Users;