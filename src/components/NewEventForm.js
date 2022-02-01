import { useState } from 'react'
import './NewEventForm.css'

const NewEventForm = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  // const handleChange = (e) => {
  //   setTitle(e.target.value)
  // }

  return (
    <form className='new-event-form'>
      <label>
        <span>Event Title:</span>
        <input type="text" name="title" id="title" 
          onChange={e => setTitle(e.target.value)} 
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" name="date" id="date" 
          onChange={e => setDate(e.target.value)} 
        />
      </label>
      <button type="submit">Submit</button>
      <p>title - {title}, date - {date}</p>
    </form>
  );
}
 
export default NewEventForm;