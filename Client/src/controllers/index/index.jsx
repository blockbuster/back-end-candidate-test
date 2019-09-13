import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import SAVE_DATA from './index.graph';

import AppBar from '../../components/appBar';
import '../../index.css'

const File = () => {

  const [saveData] = useMutation(SAVE_DATA);

  const [textQuery, setTextQuery] = useState('');
  const [error, setError] = useState('');
  const [res, setRes] = useState('');
  const save = () => {
    const response = saveData({
      variables: { data: textQuery }
    });
    response
      .then(res => setRes(res.data.saveData.message))
      .catch(error => setError('Error while saving your data'));
  }

  const handleChange = (e) => {
    setTextQuery(e.target.value)
  }

  return (
    <div className="file">
      <AppBar />
      <div className="content" >
        <div>
          <TextareaAutosize
            placeholder="Enter your text"
            rowsMax={30}
            rows={10}
            style={{ width: "50%" }}
            aria-label="maximum height"
            value={textQuery}
            onChange={handleChange}
          />
        </div>
        <Button variant="contained" color="primary" onClick={() => save()}>
          SEND
      </Button>
      </div>
      <div className="content">
        {error ? (<div>{error}</div>):''}
        {res ? (<div>{res}</div>):''}
      </div>
    </div>
  );
};

export default File;