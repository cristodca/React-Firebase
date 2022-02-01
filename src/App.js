import React, { useState } from 'react'
import './App.css'

// Ext. Components
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

// React component
function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents(prevEvents => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter(event => {
        return id !== event.id
      })
    })
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
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      }
      {
        showModal && 
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      }
    </div>
  );
}

export default App;
