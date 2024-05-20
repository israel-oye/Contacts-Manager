import React, { useState } from 'react'
import "bootswatch/dist/solar/bootstrap.min.css";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Contacts from './components/Contacts';
import Form from './components/Form';

const App = () => {
  const [allContacts, setallContacts] = useState([]);

  const addContact = (newContact) => {
    setallContacts([...allContacts, newContact])
  }


  return (
    <>
      <Navbar />
      <main className="pt-3 mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <Sidebar />
              <Form contactPopulater={addContact}/>
            </div>
            <div className="col-md-9 col-sm-8">
              <Contacts allContacts={allContacts} setallContacts={setallContacts}/>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default App