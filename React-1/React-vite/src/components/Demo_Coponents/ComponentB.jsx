import React from 'react'


const ComponentB = (props) => {
    console.log(props);
    
  return (
    <div>
        <p>ComponentB</p>
        {props.userData && props.userData.user ? props.userData.user : 'No user data available'}
    </div>
  )
}

export default ComponentB