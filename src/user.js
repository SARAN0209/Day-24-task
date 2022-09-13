import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function User() {
  const urlParams = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <>
      <h3> User Component </h3>
      User Id : {urlParams.userId} <br />
      Course Id : {urlParams.courseId} <br /> <br />
      {location.state ? (
        <>
          Name : {location.state.name} <br />
          Age : {location.state.age} <br /> <br />
        </>
      ) : (
        <> </>
      )}
      <button onClick={() => navigate(-1)}> Back </button> &nbsp;
      <button onClick={() => navigate(1)}> Forward </button>
    </>
  );
}

export default User;
