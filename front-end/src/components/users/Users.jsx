import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Table } from 'reactstrap';
import { GET_USERS, GET_USER } from './queries.graphql';

const Users = React.memo(() => {
  let searchValue = '';
  const [userId, setUserId] = useState('');
  const { loadingUser, error: userError, data: userData } = useQuery(GET_USER, {
    variables: { id: userId },
  });
  const { loadingUsers, data: usersData } = useQuery(GET_USERS);

  const handleSearchInputChanges = event => {
    searchValue = event.target.value;
  };

  const findUser = () => {
    setUserId(searchValue);
  };

  return (
    <>
      <section>
        <input
          style={{ width: 300 }}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Type user ID to search the user"
        />
        <button type="button" onClick={findUser}>
          Search
        </button>
        {loadingUser && 'Searching for a user...'}
        <div>{userError && userId && `Missing user with ID "${userId}"`}</div>
        {!loadingUser && !userError && userData && userData.user && (
          <Table style={{ border: '1px solid black' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userData.user.id}</td>
                <td>{userData.user.name}</td>
                <td>{userData.user.created}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </section>
      <hr />
      <section>
        {loadingUsers && 'Loading users...'}
        {!loadingUsers && usersData.users && usersData.users.length > 0 && (
          <Table style={{ border: '1px solid black' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created Date</th>
              </tr>
            </thead>
            <tbody>
              {usersData.users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.created}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>
    </>
  );
});

export default Users;
