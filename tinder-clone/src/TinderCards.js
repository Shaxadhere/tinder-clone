import React, {useEffect, useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import ax from './axios.js'


function TinderCards() {
    
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await ax.get('tinder/cards');

            setPeople(req.data);
        }

        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainder">
            {people.map((person) => (
              <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
              >
                  <div
                  style={{backgroundImage: `url(${person.url})`}}
                  className="card"
                  >

                  </div>
              </TinderCard>
            ))}

            </div>
        </div>
    );
}

export default TinderCards
