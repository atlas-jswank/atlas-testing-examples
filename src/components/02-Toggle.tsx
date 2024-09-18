import React from 'react'

export default function Toggle() {
    const [isToggled, setToggle] = React.useState(false);
  return (
    <button onClick={() => setToggle(!isToggled)}>
      {isToggled ? 'ON' : 'OFF'}
    </button>
  )
}
