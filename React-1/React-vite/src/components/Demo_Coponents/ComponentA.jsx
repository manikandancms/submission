import React from 'react'
import ComponentB from './ComponentB';

const ComponentA = (props) => {
    console.log(props);
    
  return (
    <div>
        <p>ComponentA</p>
        <ComponentB userData={props.userData} />
    </div>
  )
}

export default ComponentA