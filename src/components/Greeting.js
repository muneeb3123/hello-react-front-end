import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting_slice';

function Greeting() {
  const dispatch = useDispatch();

  const { greeting, isLoading } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div>
          <h1>Loading....</h1>
        </div>
      )
        : (
          <div>
            <h1>You can see different greeting message on refresh</h1>
            <p>
              Greeting:
              {greeting}
            </p>
          </div>
        )}
    </>
  );
}

export default Greeting;
