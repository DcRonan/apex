import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { fetchSingleSport } from '../actions';

const SportList = () => {
  const sports = useSelector(state => state.sport.data);
  const dispatch = useDispatch();

  return (
    <div className="h-full pb-16">
      <div className="p-4 bg-lightblue text-white font-nimbuslight w-full text-center">
        <h1 className="text-2xl">Feed</h1>
      </div>
      <section>
        {sports.map(el => (
          <Link
            onClick={() => dispatch(fetchSingleSport(el))}
            to={`/sports/${el.id}`}
            key={Math.random().toString(36).substr(2, 9)}
          >
            <div className="py-4 px-5 bg-gray-300 bg-opacity-30 border-b-2 border-t-2 flex justify-between items-center mb-4">
              <div>
                <h2 className="font-nimbusbold">{el.name}</h2>
                <p className="text-xs">
                  {dateFormat(el.created_at, 'yyyy-MM-dd')}
                </p>
              </div>
              <div className="font-nimbusbold text-green-700">
                {el.distance}
                <span className="p-1">mi</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default SportList;
