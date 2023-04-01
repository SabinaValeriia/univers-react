import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../thunks';
import { useEffect } from "react";
import React from 'react';
const User = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData(userId));
  }, [dispatch, userId]);
  if (!user || !user.data) {
    return <div>Loading...</div>;
  }
  
  if (user.status === 'loading') {
    return <div>Loading...</div>;
  }
  
  if (user.status === 'failed') {
    return <div>Error: {user.error}</div>;
  }
  
  return (
    <div>
      <h1>{user.data.name}</h1>
      <p>{user.data.bio}</p>
    </div>
  );
  
};
export default User;