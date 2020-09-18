// useReducer is similar to redux
// useReducer is like useState but 
// typically will use objects rather than values
// https://www.youtube.com/watch?v=kK_Wqx3RnHk

import React, { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

// way one
// function reducer(state, action) {
//   return { count: state.count + 1 }
// }

function reducer(state, action) {
  // console.log(action.type);
  switch (action.type) {
    case ACTIONS.INCREMENT:
      console.log(state);
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
    return { count: state.count - 1 }
    default: 
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  // way one
  // function increment() {
  //   dispatch()
  // }

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT })
  }
  
  return (
    <>
      <button onClick={decrement}>-</button>
      {/* {console.log(state)} */}
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
