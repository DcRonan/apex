import React from 'react';
import { useSelector } from 'react-redux';

const Progress = () => {
  const sports = useSelector(state => state.sport.data);
  const distanceTotal = sports.reduce((a, b) => ({ distance: a.distance + b.distance }));

  return (
    <section>
      <div>Progress</div>
    </section>
  );
};

export default Progress;
