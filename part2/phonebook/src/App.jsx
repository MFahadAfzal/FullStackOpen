import { useState, useEffect } from 'react'
import axios from 'axios'
import noteService from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // Initial fetch from db.json (simulated)
  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        console.log(response)
        setPersons(response)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    if (!newName || !newNumber) return
    const newPerson = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1).toString() // temporary ID
    }

    noteService
      .create(newPerson)
      .then(returnedNote => {
        setPersons(persons.concat(returnedNote))
        setNewName('')
        setNewNumber('')
      })

  }

  const deletePerson = (id) => {
    setPersons(persons.filter(p => p.id !== id))
    noteService
      .deletePerson(id)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>

      <h3>Numbers</h3>
      <ul>
        {persons.map(p => (
          <li key={p.id}>
            {p.name}: {p.number} 
            <button onClick={() => deletePerson(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App