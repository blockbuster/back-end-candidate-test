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
import { PROGRAMS } from './programs.graph';

const Programs = () => {
  const { loading, error, data } = useQuery(PROGRAMS);

  const getPrograms = (id) => {
    console.log(id)
  }

  const getHeaders = (data) => {
    console.log(data)
    return Object.keys(data.programs[0]).filter(key => key !== '__typename');
  }
  return (
    <div className="programs">
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
                {data.programs.map(program => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={program.id} onClick={() => getPrograms(program.id)} style={{ cursor: "pointer" }}>
                    <Link
                      to={`/programs/${program.id}`}
                      style={{ textDecoration: 'none' }}
                    >{getHeaders(data).map(key => (
                      <TableCell key={key} style={{ align: "left" }}>
                        {program[key]}
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

export default Programs;