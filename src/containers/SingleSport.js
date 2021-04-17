import React from 'react';
import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';

const SportList = () => {
  const singleSport = useSelector(state => state.singleSport.data);
  const title = singleSport[0].name;

  return (
    <div className="h-screen pb-20">
      <div className="p-4 bg-lightblue text-white font-nimbuslight w-full text-center">
        <h1 className="text-2xl">{title}</h1>
      </div>
      <section className="mx-6 text-center pt-10">
        {singleSport.map(el => (
          <div className="space-y-6" key={Math.random().toString(36).substr(2, 9)}>
            <div
              className="py-6 px-5 bg-gray-300 bg-opacity-30 relative"
            >
              <div className="text-xs text-lightgrey font-nimbuslight absolute top-2 left-2">
                Distance
              </div>
              <div className="font-nimbusbold text-green-700 text-2xl">
                <div>
                  <span>{el.distance}</span>
                  <span className="pl-1">mi</span>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 bg-gray-300 bg-opacity-30 relative">
              <div className="text-xs text-lightgrey font-nimbuslight absolute top-2 left-2">
                Time
              </div>
              <div className="font-nimbusbold text-red-700 text-2xl">
                <div>
                  <span>{el.hours}</span>
                  :
                  <span>{el.minutes}</span>
                  :
                  <span>{el.seconds}</span>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 bg-gray-300 bg-opacity-30 relative">
              <div className="text-xs text-lightgrey font-nimbuslight absolute top-2 left-2">
                Notes
              </div>
              <div className="font-nimbuslight text-black text-base">
                <div>
                  <p>{el.notes}</p>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 bg-gray-300 bg-opacity-30 relative">
              <div className="text-xs text-lightgrey font-nimbuslight absolute top-2 left-2">
                Time
              </div>
              <div className="font-nimbusbold text-black text-lg">
                <div>{dateFormat(el.created_at, 'yyyy-MM-dd')}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SportList;
