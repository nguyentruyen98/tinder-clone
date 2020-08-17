import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'
import database from './firebase';
import './css/tinderCards.css'

function TinderCards() {
  const [people, setPeople] = useState([]);
  // BAD
  // const people = [];
  // people.push('acas','sad');
  // GOOD 
  // setPeople([...people,'asdas','asd'])


  useEffect(() => {
    database
      .collection('people') 
      .onSnapshot(snapshot => (
        setPeople(snapshot.docs.map(doc => doc.data()))

      ));

  }, [])
  return (
    

    <div>
      {console.log(people)}
      <div className="tinderCards_cardContainer">
        {people.map(persion => {
          return (
            <TinderCard
              className="swipe"
              // thường xuyên sử dụng key trong ractjs app
              key={persion.name}
              preventSwipe={['Up', 'Down']}
            >
              <div
                style={{ backgroundImage: `url(${persion.url})` }}
                className="card">
                <h3>{persion.name}</h3>
              </div>
            </TinderCard>
          )
        })}
      </div>

    </div>
  )
}

export default TinderCards
