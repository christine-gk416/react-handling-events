import React from 'react'

function EventsFunctional() {

  function clickHandler () {
    console.log('Clicked the functional button')
  }
  return (
    <div><button onClick={clickHandler}>click me- events functional</button></div>
  )
}

export default EventsFunctional