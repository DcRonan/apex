import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { fetchSport } from '../actions';

const EditSport = () => {
  const singleSport = useSelector(state => state.singleSport.data);
  const [nameValue, setName] = useState(singleSport[0].name);
  const [minutesValue, setMinutes] = useState(singleSport[0].minutes);
  const [secondsValue, setSeconds] = useState(singleSport[0].seconds);
  const [hoursValue, setHours] = useState(singleSport[0].hours);
  const [distanceValue, setDistance] = useState(singleSport[0].distance);
  const [notesValue, setNotes] = useState(singleSport[0].notes);

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    axios.put(
      `https://apex-sport-tracker.herokuapp.com/api/v1/sports/${singleSport[0].id}`,
      {
        name: nameValue,
        minutes: minutesValue,
        seconds: secondsValue,
        hours: hoursValue,
        distance: distanceValue,
        notes: notesValue,
      },
    );

    dispatch(fetchSport());
    toast.success(`You successfully updated ${nameValue}`);
  };

  return (
    <div className="h-screen pb-20">
      <div className="p-4 bg-lightblue text-white font-nimbuslight w-full text-center">
        <h1 className="text-2xl">Edit</h1>
      </div>
      <section>
        <form
          onSubmit={onSubmit}
          className="flex flex-col px-16 space-y-1 pt-2 font-nimbuslight"
        >
          <div>
            <div>Name</div>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="w-full"
              value={nameValue}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <div>Minutes</div>
            <input
              type="number"
              name="minutes"
              placeholder="minutes"
              className="w-full"
              value={minutesValue}
              onChange={e => setMinutes(e.target.value)}
            />
          </div>
          <div>
            <div>Seconds</div>
            <input
              type="number"
              name="seconds"
              placeholder="seconds"
              className="w-full"
              value={secondsValue}
              onChange={e => setSeconds(e.target.value)}
            />
          </div>
          <div>
            <div>Hours</div>
            <input
              type="number"
              name="hours"
              placeholder="hours"
              className="w-full"
              value={hoursValue}
              onChange={e => setHours(e.target.value)}
            />
          </div>
          <div>
            <div>Distance</div>
            <input
              type="number"
              name="distance"
              className="w-full"
              placeholder="distance"
              value={distanceValue}
              onChange={e => setDistance(e.target.value)}
            />
          </div>
          <div>
            <div>Notes</div>
            <textarea
              name="notes"
              placeholder="notes"
              className="w-full"
              cols="20"
              rows="3"
              value={notesValue}
              required
              onChange={e => setNotes(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" bg-lightgreen py-4 px-2 mt-5 rounded-md"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditSport;
