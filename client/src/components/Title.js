// this is the child of Radio
// this receives props from radio
import React from 'react';
import Station from './AllStations'

//const handleCallLetters = event => {setCallLetters(event.target.value)

const Title = (props) => {
    return (
    <div>
    <h2>Currently listening to: {props.callLetters} - title component</h2>
    </div>
)
}
export default Title;
