import React from 'react'
// import { CircularProgress } from '@material-ui/core';

function Loading() {
    return (
         <div style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         <div className="spinner-border text-primary" role="status" style={{height:100, width:100}}>
            <span className="sr-only">Loading...</span>
         </div>
              {/* <CircularProgress size="5rem" /> */}
        </div>
    )
}

export default Loading;
