import React from 'react'

function ArrayComponent() {
    const arr= [10 ,20 ,30];
    const index =1;

    if (index >= arr.length) {
        throw new Error("array index out of bound");
    }
  return (
    <div>
      <h3>array element: {arr[index]}</h3>
    </div>
  )
}

export default ArrayComponent;
