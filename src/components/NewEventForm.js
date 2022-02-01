import { useState, useRef } from 'react'
import './NewEventForm.css'

const NewEventForm = ({ addEvent }) => {
  const title = useRef()
  const date = useRef()
  // const [title, setTitle] = useState('')
  // const [date, setDate] = useState('')

  const resetForm = () => {
    title.current.value = ''
    date.current.value = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, date)

    const event = {
      title: title.current.value,
      date: date.current.value,
      id: Math.floor(Math.random() * 10000)
    }

    addEvent(event)
    resetForm()
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input type="text" name="title" id="title"
          ref={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" name="date" id="date"
          ref={date}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
 
export default NewEventForm;