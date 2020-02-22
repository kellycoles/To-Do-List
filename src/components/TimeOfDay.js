import React from 'react';

const TimeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if(hours<12) {
        timeOfDay='morning'
    } else if(hours > 12 && hours < 17){
        timeOfDay='evening'
    } else{
        timeOfDay='night'
    }
return(
    <h1>Good {timeOfDay}</h1>
)
}
export default TimeOfDay;