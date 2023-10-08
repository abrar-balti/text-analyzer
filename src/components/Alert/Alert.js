import React from 'react';

function Alert(props) {
  return (
    <>
    <div style={{height:'50px'}}>
      {props.type && props.message && (
        <div className={`alert alert-${props.type} alert-dismissible fade show d-flex justify-content-center align-items-center`} role="alert" >
          <b>{props.message}</b> 
       
        </div>
      )}
      </div>
    </>
  );
}

export default Alert;
