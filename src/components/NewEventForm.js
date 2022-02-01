import { useState } from 'react'
import './NewEventForm.css'

const NewEventForm = () => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  // const handleChange = (e) => {
  //   setTitle(e.target.value)
  // }

  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000)
    }

    console.log(event)
    resetForm()
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input type="text" name="title" id="title"
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" name="date" id="date"
          value={date} 
          onChange={e => setDate(e.target.value)} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
 
export default NewEventForm;