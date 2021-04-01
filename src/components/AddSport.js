import React, { useState } from 'react';
import axios from 'axios';

const AddSport = () => {
  const [nameValue, setName] = useState('');
  const [minutesValue, setMinutes] = useState(0);
  const [secondsValue, setSeconds] = useState(0);
  const [hoursValue, setHours] = useState(0);
  const [distanceValue, setDistance] = useState(0);
  const [notesValue, setNotes] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    axios.post('http://localhost:4000/api/v1/sports', {
      name: nameValue,
      minutes: minutesValue,
      seconds: secondsValue,
      hours: hoursValue,
      distance: distanceValue,
      notes: notesValue,
    });
  };

  return (
    <div>
      <h1>SignUp Form</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={nameValue}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          name="minutes"
          placeholder="minutes"
          value={minutesValue}
          onChange={e => setMinutes(e.target.value)}
        />
        <br />
        <input
          type="number"
          name="seconds"
          placeholder="seconds"
          value={secondsValue}
          onChange={e => setSeconds(e.target.value)}
        />
        <br />
        <input
          type="number"
          name="hours"
          placeholder="hours"
          value={hoursValue}
          onChange={e => setHours(e.target.value)}
        />
        <br />
        <input
          type="number"
          name="distance"
          placeholder="distance"
          value={distanceValue}
          onChange={e => setDistance(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="notes"
          placeholder="notes"
          value={notesValue}
          onChange={e => setNotes(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddSport;
