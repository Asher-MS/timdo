import { Card, Text, Button, Spacer, Row } from '@geist-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './Note';
import NoteInput from './NoteInput';

function Notes() {
  const [staten, setStaten] = useState(false);
  const [stateni, setStateNi] = useState(false);
  const handlern = function () {
    setStaten(true);
  };
  const handlerni = function () {
    setStateNi(true);
  };
  const closeHandlern = function () {
    setStaten(false);
  };
  const closeHandlerni = function () {
    setStateNi(false);
  };
  const [email, setUserEmail] = useState(window.localStorage.getItem('email'));
  const [notes, setNotes] = useState([{}]);
  const [currentNote, setCurrentNote] = useState({
    title: 'title',
    body: 'body',
  });
  const handleEdit = function (title, body) {
    // Add the function to edit a note
    console.log(title, body);
  };
  let local = true;
  let NOTES_URL = local
    ? 'http://127.0.0.1:8000/api/notes?email=' + email
    : 'https://timdo-api.herokuapp.com/api/notes?email=' + email;

  useEffect(() => {
    axios.get(NOTES_URL).then((res) => {
      setNotes(res.data);
    });
  }, []);
  const updateNotes = function () {
    axios.get(NOTES_URL).then((res) => {
      setNotes(res.data);
    });
  };

  return (
    <div className='Note'>
      <Row justify='center'>
        <Text h1>Notes</Text>
      </Row>
      <Row justify='center'>
        <Button
          type='secondary'
          onClick={() => {
            setStateNi(true);
          }}
        >
          Add Note
        </Button>
      </Row>
      <Spacer y={2} />
      <Row justify='center'>
        <Text h1>
          {notes.map((index, { title, body }) => {
            return (
              <div key={index}>
                <Card shadow>
                  <h4>{title}</h4>
                  <Button type='error-light' onClick={handleEdit}>
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      setStaten(true);
                      setCurrentNote({ title: title, body: body });
                    }}
                  >
                    View
                  </Button>
                </Card>
                <Spacer y={1} />
              </div>
            );
          })}
        </Text>
      </Row>

      <Note
        state={staten}
        closeHandler={closeHandlern}
        setState={setStaten}
        title={currentNote.title}
        body={currentNote.body}
      />
      <NoteInput
        state={stateni}
        closeHandler={closeHandlerni}
        setState={setStateNi}
        updateNotes={updateNotes}
      />
    </div>
  );
}

export default Notes;
