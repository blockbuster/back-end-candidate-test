import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SAVE_DATA_TO_FILE } from './mutations.graphql';

const Home = React.memo(() => {
  const [dataToSave, setDataToSave] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorSavingData, setErrorSavingData] = useState('');
  const [resultSavingData, setResultSavingData] = useState('');
  const [saveDataToFileMutation] = useMutation(SAVE_DATA_TO_FILE);

  const handleTextareaInputChanges = event => {
    setDataToSave(event.target.value);
  };

  function save() {
    saveDataToFileMutation({
      variables: { data: dataToSave },
    })
      .then(res => {
        const {
          data: {
            saveDataToFile: { message },
          },
        } = res;
        setResultSavingData(message);
        setDataToSave('');
      })
      .catch(error => {
        setErrorSavingData(error);
      })
      .finally(() => {
        setLoading(false);
      });
    setLoading(true);
  }

  return (
    <section>
      <div>
        <textarea
          style={{ width: 500, height: 300 }}
          placeholder="Insert data to save to the file"
          value={dataToSave}
          onChange={handleTextareaInputChanges}
        />
      </div>
      <button type="button" onClick={() => save()}>
        Save to file
      </button>
      <div>
        {loading && <div>Saving data to the file...</div>}
        {errorSavingData && <div>{errorSavingData}</div>}
        {resultSavingData && <div>{resultSavingData}</div>}
      </div>
    </section>
  );
});

export default Home;
