import React, { useState, useRef } from 'react';
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Form = () => {
  const [nameValue, setName] = useState('');
  const [minutesValue, setMinutes] = useState(0);
  const [secondsValue, setSeconds] = useState(0);
  const [hoursValue, setHours] = useState(0);
  const [distanceValue, setDistance] = useState(0);
  const [notesValue, setNotes] = useState('');
  const [title, setTitle] = useState('Name of sport');

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

  // Progress bar
  const minuteBar = useRef(null);
  const hourBar = useRef(null);
  const secondsBar = useRef(null);
  const distanceBar = useRef(null);

  const goToFirstPage = () => {
    nameInput.current.classList = 'block';
    hoursInput.current.classList = 'hidden';
    secondButtons.current.classList = 'hidden';
    firstButtons.current.classList = 'bg-gray-100 rounded-lg p-2';
    hoursInput.current.classList = 'hidden';
    hourBar.current.classList = 'hidden';
    setTitle('Name of sport');
  };

  const goToSecondPage = () => {
    nameInput.current.classList = 'hidden';
    hoursInput.current.classList = 'block';
    secondButtons.current.classList = 'flex bg-gray-100 rounded-lg p-2';
    firstButtons.current.classList = 'hidden';
    thirdButtons.current.classList = 'hidden';
    minsInput.current.classList = 'hidden';
    minuteBar.current.classList = 'hidden';
    hourBar.current.classList = 'flex w-3/4';
    setTitle('Hours');
  };

  const goToThirdPage = () => {
    hoursInput.current.classList = 'hidden';
    minsInput.current.classList = 'block';
    secondButtons.current.classList = 'hidden';
    thirdButtons.current.classList = 'flex bg-gray-100 rounded-lg p-2';
    fourthButtons.current.classList = 'hidden';
    secondsInput.current.classList = 'hidden';
    minuteBar.current.classList = 'block w-3/4';
    hourBar.current.classList = 'hidden';
    secondsBar.current.classList = 'hidden';
    setTitle('Minutes');
  };

  const goToFourthPage = () => {
    minsInput.current.classList = 'hidden';
    secondsInput.current.classList = 'block';
    thirdButtons.current.classList = 'hidden';
    fourthButtons.current.classList = 'flex bg-gray-100 rounded-lg p-2';
    fifthButtons.current.classList = 'hidden';
    distanceInput.current.classList = 'hidden';
    minuteBar.current.classList = 'hidden';
    secondsBar.current.classList = 'block w-3/4';
    distanceBar.current.classList = 'hidden';
    setTitle('Seconds');
  };
  const goToFifthPage = () => {
    secondsInput.current.classList = 'hidden';
    distanceInput.current.classList = 'block';
    fourthButtons.current.classList = 'hidden';
    fifthButtons.current.classList = 'flex bg-gray-100 rounded-lg p-2';
    sixthButtons.current.classList = 'hidden';
    notesInput.current.classList = 'hidden';
    secondsBar.current.classList = 'hidden';
    distanceBar.current.classList = 'block w-3/4';
    setTitle('Distance');
  };

  const goToSixthPage = () => {
    distanceInput.current.classList = 'hidden';
    notesInput.current.classList = 'block';
    fifthButtons.current.classList = 'hidden';
    sixthButtons.current.classList = 'flex bg-gray-100 rounded-lg p-2';
    distanceBar.current.classList = 'hidden';
    setTitle('Notes');
  };

  return (
    <div className="text-center h-full">
      <div className="p-4 bg-lightblue text-white font-nimbuslight w-full">
        <h1 className="text-2xl">Add sport</h1>
      </div>
      <div className="p-4 border-b-2">
        <div>
          <h3 className="text-base text-gray-500 font-nimbusbold">{title}</h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Progress bar */}
        <div className="flex flex-col items-center justify-center py-10 font-nimbuslight">
          <section ref={hourBar} className="hidden w-3/4">
            <CircularProgressbar
              value={hoursValue}
              text={`${hoursValue} h`}
            />
          </section>
          <section ref={minuteBar} className="hidden w-3/4">
            <CircularProgressbar
              value={minutesValue}
              text={`${minutesValue} mins`}
              maxValue={59}
            />
          </section>
          <section ref={secondsBar} className="hidden w-3/4">
            <CircularProgressbar
              value={secondsValue}
              text={`${secondsValue} s`}
              maxValue={59}
            />
          </section>
          <section ref={distanceBar} className="hidden w-3/4">
            <CircularProgressbar
              value={distanceValue}
              text={`${distanceValue} miles`}
            />
          </section>
        </div>
        {/* FORM */}
        <form onSubmit={onSubmit} className="space-y-4 absolute bottom-20 font-nimbuslight">
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
          <textarea
            ref={notesInput}
            name="notes"
            placeholder="notes"
            className="hidden"
            cols="20"
            rows="6"
            value={notesValue}
            required
            onChange={e => setNotes(e.target.value)}
          />
          {/* FIRST */}
          <div ref={firstButtons} className="bg-gray-100 rounded-lg p-2">
            <button
              type="button"
              className="p-2 bg-lightgreen text-white w-full rounded-lg"
              onClick={() => goToSecondPage()}
            >
              Next
            </button>
          </div>
          {/* SECOND */}
          <div ref={secondButtons} className="hidden">
            <button
              type="button"
              className="p-3 rounded-lg text-gray-600 w-full"
              onClick={() => goToFirstPage()}
            >
              Prev
            </button>
            <button
              type="button"
              className="p-3 rounded-lg bg-lightgreen text-white w-full"
              onClick={() => goToThirdPage()}
            >
              Next
            </button>
          </div>
          {/* THIRD */}
          <div ref={thirdButtons} className="hidden">
            <button
              type="button"
              className="p-3 text-grey-600 w-full text-gray-600"
              onClick={() => goToSecondPage()}
            >
              Prev
            </button>
            <button
              type="button"
              className="p-3 bg-lightgreen text-white w-full rounded-lg"
              onClick={() => goToFourthPage()}
            >
              Next
            </button>
          </div>
          {/* FOURTH */}
          <div ref={fourthButtons} className="hidden">
            <button
              type="button"
              className="p-3 rounded-lg text-gray-600 w-full"
              onClick={() => goToThirdPage()}
            >
              Prev
            </button>
            <button
              type="button"
              className="p-3 bg-lightgreen text-white w-full rounded-lg"
              onClick={() => goToFifthPage()}
            >
              Next
            </button>
          </div>
          {/* FIFTH */}
          <div ref={fifthButtons} className="hidden">
            <button
              type="button"
              className="p-3 text-gray-600 w-full"
              onClick={() => goToFourthPage()}
            >
              Prev
            </button>
            <button
              type="button"
              className="p-3 bg-lightgreen text-white w-full rounded-lg"
              onClick={() => goToSixthPage()}
            >
              Next
            </button>
          </div>
          {/* SIXTH */}
          <div ref={sixthButtons} className="hidden">
            <button
              type="button"
              className="p-3 text-gray-600 w-full"
              onClick={() => goToFifthPage()}
            >
              Prev
            </button>
            <button
              type="submit"
              className="p-3 bg-lightgreen text-white w-full rounded-lg"
              onClick={() => goToSixthPage()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
