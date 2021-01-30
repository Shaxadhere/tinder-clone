import React, {useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        },
        {
            name: "Jeff Bezoz",
            url: "https://www.gstatic.com/tv/thumb/persons/532529/532529_v9_bb.jpg",
        },
    ]);

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
