import React, { useState } from 'react'
import './App.css'

// Ext. Components
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'

// React component
function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  console.log(showModal)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter(event => {
        return id !== event.id
      })
    })
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const subtitle = 'all the latest events in Marioland'
 
  return ( 
    <div className="App">
      <Title 
        title='Events in Your Area'
        subtitle={subtitle}
      />

      { showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>
            hide events
          </button>
        </div>
      )}
      { !showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>
            show events
          </button>
        </div>
      )}

      { showEvents && <EventList events={events} handleClick={handleClick} /> }

      {/* <Modal>
        <h2>10% off coupon code!</h2>
        <p>
            use the code ninja19 at the checkout.
        </p>
      </Modal> */}
      {
        !showModal && 
        <button onClick={() => setShowModal(true)}>show modal</button>
      }
      {
        showModal && 
        <Modal handleClose={handleModalClose} isSalesModal={false}>
          <h2>Terms & Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aspernatur, quo non rem possimus voluptate, quia, iste ipsum ab labore quaerat libero tempora quibusdam in aut. Pariatur corporis consequatur nemo!
          </p>
        </Modal>
      }
    </div>
  );
}

export default App;
