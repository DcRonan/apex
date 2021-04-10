import React from 'react';
import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';

const SportList = () => {
  const sports = useSelector(state => state.sport.data);

  return (
    <div className="h-full">
      <div className="p-4 bg-lightblue text-white font-nimbuslight w-full text-center">
        <h1 className="text-2xl">Feed</h1>
      </div>
      <section>
        {sports.map(el => (
          <div key={Math.random().toString(36).substr(2, 9)}>
            <h2>{el.name}</h2>
            <p>
              <span>{el.hours}</span>
              :
              <span>{el.minutes}</span>
              :
              <span>{el.seconds}</span>
            </p>
            <div>{dateFormat(el.created_at, 'yyyy-MM-dd')}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SportList;
