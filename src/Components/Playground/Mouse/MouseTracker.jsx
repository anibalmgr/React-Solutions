import React from 'react';
import Cat from './Cat';
import Mouse from './Mouse';


function MouseTracker() {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse render={mouse => (
        <Cat mouse={mouse} />
      )} />
    </div>
  )
}

export default MouseTracker;
