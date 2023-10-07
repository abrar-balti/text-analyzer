import React from 'react';

function Alert(props) {
  return (
    <>
      {props.type && props.message && (
        <div className={`alert alert-${props.type} alert-dismissible fade show d-flex justify-content-center align-items-center`} role="alert" >
          <b>{props.message}</b> 
       
        </div>
      )}
    </>
  );
}

export default Alert;
