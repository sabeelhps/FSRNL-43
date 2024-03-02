import React from 'react';

const Person = () => {

    const name = "Max";

    const luckyNumber = 7

    const randomNumber = Math.floor(Math.random() * 10); // 0-9

    let element = null;

    console.log(randomNumber);

    if (randomNumber === luckyNumber) {
        element = <img src="https://media1.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=6c09b952g99z5roa7zvklu76k4oa2htmhm1lpzmz80usxj7m&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" />
    } else {
        element = <p>Not a lucky number</p>
    }

    const hobbies = ["Watching Web Series", "Swimming", "Gym", "Reading Books"];

    return (
        <div>
            Name : {name}
            <p> {Math.floor(Math.random() * 100)}</p>
            {/* {
                randomNumber === luckyNumber ?
                    <img src="https://media1.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=6c09b952g99z5roa7zvklu76k4oa2htmhm1lpzmz80usxj7m&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" />
                    : <p>Not a lucky number</p>
            } */}
            {/* {element} */}
            <ul>
                {
                    hobbies.map(function (hobby) {
                        return <li>{ hobby }</li>
                    })
                }
            </ul>
            {randomNumber === luckyNumber && <img src="https://media1.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=6c09b952g99z5roa7zvklu76k4oa2htmhm1lpzmz80usxj7m&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" /> }
      </div>
    )
}

export default Person;
