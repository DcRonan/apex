import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = () => {
  const sports = useSelector(state => state.sport.data);
  const totalDistance = sports.reduce((a, b) => ({
    distance: a.distance + b.distance,
  }));
  const totalHours = sports.reduce((a, b) => ({ hours: a.hours + b.hours }));
  const totalMinutes = sports.reduce((a, b) => ({
    minutes: a.minutes + b.minutes,
  }));
  const totalSeconds = sports.reduce((a, b) => ({
    seconds: a.seconds + b.seconds,
  }));
  const distanceResult = Object.keys(totalDistance).map(key => [
    totalDistance[key],
  ]);
  const hoursResult = Object.keys(totalHours).map(key => [totalHours[key]]);
  const minutesResult = Object.keys(totalMinutes).map(key => [
    totalMinutes[key],
  ]);
  const secondsResult = Object.keys(totalSeconds).map(key => [
    totalSeconds[key],
  ]);

  return (
    <div className="h-screen">
      <div className="p-4 bg-lightblue text-white font-nimbuslight w-full text-center">
        <h1 className="text-2xl">Progress</h1>
      </div>
      <section className="bg-gray-300 bg-opacity-30 px-5 h-full space-y-8 pt-10">
        <div className="px-6">
          <CircularProgressbar
            value={distanceResult}
            text={`${distanceResult} mi`}
            styles={buildStyles({
              textSize: '16px',
              pathTransitionDuration: 2,
              pathColor: `rgb(0,204,0, ${distanceResult / 100})`,
              textColor: '#97e493',
              trailColor: '#d6d6d6',
            })}
          />
        </div>
        <div className="bg-white text-black w-full shadow-md flex flex-col items-center justify-center py-5">
          <h2 className="text-xs text-gray-500">Time Total</h2>
          <div className="text-green-500 text-2xl font-nimbuslight">
            {hoursResult}
            :
            {minutesResult}
            :
            {secondsResult}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Progress;
