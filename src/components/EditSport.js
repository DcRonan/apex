import React from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { toast } from 'react-toastify';

const EditSport = () => {
  const singleSport = useSelector(state => state.singleSport.data);
  const title = singleSport[0].name;

  return (
    <div>
      {title}
    </div>
  );
};

export default EditSport;
