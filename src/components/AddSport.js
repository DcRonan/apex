import React, { useState, useRef } from 'react';
import axios from 'axios';
// import Buttons from './PrevAndNext';

const Form = () => {
  const [nameValue, setName] = useState('');
  const [minutesValue, setMinutes] = useState();
  const [secondsValue, setSeconds] = useState();
  const [hoursValue, setHours] = useState();
  const [distanceValue, setDistance] = useState();
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

  // Inputs
  const nameInput = useRef(null);
  const minsInput = useRef(null);
  const secondsInput = useRef(null);
  const hoursInput = useRef(null);
  const distanceInput = useRef(null);
  const notesInput = useRef(null);

  // Buttons
  const firstButtons = useRef(null);
  const secondButtons = useRef(null);
  const thirdButtons = useRef(null);
  const fourthButtons = useRef(null);
  const fifthButtons = useRef(null);
  const sixthButtons = useRef(null);

  const goToFirstPage = () => {
    nameInput.current.classList = 'block';
    hoursInput.current.classList = 'hidden';
    secondButtons.current.classList = 'hidden';
    firstButtons.current.classList = 'block';
    hoursInput.current.classList = 'hidden';
  };

  const goToSecondPage = () => {
    nameInput.current.classList = 'hidden';
    hoursInput.current.classList = 'block';
    secondButtons.current.classList = 'block';
    firstButtons.current.classList = 'hidden';
    thirdButtons.current.classList = 'hidden';
    minsInput.current.classList = 'hidden';
  };

  const goToThirdPage = () => {
    hoursInput.current.classList = 'hidden';
    minsInput.current.classList = 'block';
    secondButtons.current.classList = 'hidden';
    thirdButtons.current.classList = 'block';
    fourthButtons.current.classList = 'hidden';
    secondsInput.current.classList = 'hidden';
  };

  const goToFourthPage = () => {
    minsInput.current.classList = 'hidden';
    secondsInput.current.classList = 'block';
    thirdButtons.current.classList = 'hidden';
    fourthButtons.current.classList = 'block';
    fifthButtons.current.classList = 'hidden';
    distanceInput.current.classList = 'hidden';
  };
  const goToFifthPage = () => {
    secondsInput.current.classList = 'hidden';
    distanceInput.current.classList = 'block';
    fourthButtons.current.classList = 'hidden';
    fifthButtons.current.classList = 'block';
    sixthButtons.current.classList = 'hidden';
    notesInput.current.classList = 'hidden';
  };

  const goToSixthPage = () => {
    distanceInput.current.classList = 'hidden';
    notesInput.current.classList = 'block';
    fifthButtons.current.classList = 'hidden';
    sixthButtons.current.classList = 'block';
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl">Add sport</h1>
      {/* FORM */}
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center"
      >
        <input
          ref={nameInput}
          type="text"
          name="name"
          placeholder="name"
          value={nameValue}
          onChange={e => setName(e.target.value)}
        />
        <input
          ref={minsInput}
          type="number"
          name="minutes"
          placeholder="minutes"
          value={minutesValue}
          className="hidden"
          onChange={e => setMinutes(e.target.value)}
        />
        <input
          ref={secondsInput}
          type="number"
          name="seconds"
          placeholder="seconds"
          className="hidden"
          value={secondsValue}
          onChange={e => setSeconds(e.target.value)}
        />
        <input
          ref={hoursInput}
          type="number"
          name="hours"
          placeholder="hours"
          className="hidden"
          value={hoursValue}
          onChange={e => setHours(e.target.value)}
        />
        <input
          ref={distanceInput}
          type="number"
          name="distance"
          placeholder="distance"
          className="hidden"
          value={distanceValue}
          onChange={e => setDistance(e.target.value)}
        />
        <input
          ref={notesInput}
          type="text"
          name="notes"
          placeholder="notes"
          className="hidden"
          value={notesValue}
          required
          onChange={e => setNotes(e.target.value)}
        />
        {/* FIRST */}
        <div ref={firstButtons}>
          <button
            type="button"
            className="p-2 bg-lightgreen text-white"
            onClick={() => goToSecondPage()}
          >
            Next
          </button>
        </div>
        {/* SECOND */}
        <div ref={secondButtons} className="hidden">
          <button
            type="button"
            className="p-2 bg-red-600 text-white"
            onClick={() => goToFirstPage()}
          >
            Prev
          </button>
          <button
            type="button"
            className="p-2 bg-lightgreen text-white"
            onClick={() => goToThirdPage()}
          >
            Next
          </button>
        </div>
        {/* THIRD */}
        <div ref={thirdButtons} className="hidden">
          <button
            type="button"
            className="p-2 bg-red-600 text-white"
            onClick={() => goToSecondPage()}
          >
            Prev
          </button>
          <button
            type="button"
            className="p-2 bg-lightgreen text-white"
            onClick={() => goToFourthPage()}
          >
            Next
          </button>
        </div>
        {/* FOURTH */}
        <div ref={fourthButtons} className="hidden">
          <button
            type="button"
            className="p-2 bg-red-600 text-white"
            onClick={() => goToThirdPage()}
          >
            Prev
          </button>
          <button
            type="button"
            className="p-2 bg-lightgreen text-white"
            onClick={() => goToFifthPage()}
          >
            Next
          </button>
        </div>
        {/* FIFTH */}
        <div ref={fifthButtons} className="hidden">
          <button
            type="button"
            className="p-2 bg-red-600 text-white"
            onClick={() => goToFourthPage()}
          >
            Prev
          </button>
          <button
            type="button"
            className="p-2 bg-lightgreen text-white"
            onClick={() => goToSixthPage()}
          >
            Next
          </button>
        </div>
        {/* SIXTH */}
        <div ref={sixthButtons} className="hidden">
          <button
            type="button"
            className="p-2 bg-red-600 text-white"
            onClick={() => goToFifthPage()}
          >
            Prev
          </button>
          <button
            type="submit"
            className="p-2 bg-lightgreen text-white"
            onClick={() => goToSixthPage()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
