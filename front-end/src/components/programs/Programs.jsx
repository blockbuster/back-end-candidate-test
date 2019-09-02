import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Table } from 'reactstrap';
import { GET_PROGRAMS, GET_PROGRAM } from './queries.graphql';

const Programs = React.memo(() => {
  let searchValue = '';
  const [programId, setProgramId] = useState('');
  const { loadingProgram, error: programError, data: programData } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });
  const { loadingPrograms, data: programsData } = useQuery(GET_PROGRAMS);

  const handleSearchInputChanges = event => {
    searchValue = event.target.value;
  };

  const findProgram = () => {
    setProgramId(searchValue);
  };

  return (
    <>
      <section>
        <input
          style={{ width: 300 }}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Type program ID to search the program"
        />
        <button type="button" onClick={findProgram}>
          Search
        </button>
        {loadingProgram && 'Searching for a program...'}
        <div>{programError && programId && `Missing program with ID "${programId}"`}</div>
        {!loadingProgram && !programError && programData && programData.program && (
          <Table style={{ border: '1px solid black' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{programData.program.id}</td>
                <td>{programData.program.title}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </section>
      <hr />
      <section>
        {loadingPrograms && 'Loading programs...'}
        {!loadingPrograms && programsData.programs && programsData.programs.length > 0 && (
          <Table style={{ border: '1px solid black' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {programsData.programs.map(program => (
                <tr key={program.id}>
                  <td>{program.id}</td>
                  <td>{program.title}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>
    </>
  );
});

export default Programs;
