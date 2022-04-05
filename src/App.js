// imp react import
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route } from "react-router-dom";
// components and stylesheet import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import AddContact from "./components/AddContact";
import Profile from "./components/Profile";
import Contacts from "./components/Contacts";
import ContactData from "./ContactData";
// import Home from "./pages/Home";
//css files (must include)
import "./styles.css";
import "./pallete.css";

//main function
function App() {
  const LOCAL_STORAGE_KEY = "Contacts";
  const [contacts, setContacts] = useState([...ContactData]);
  // addContacts by clicking on add button
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };
  // delete funtionality
  const deleteHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  //set and get contacts from localStorage
  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getContacts) setContacts(getContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="App d-flex flex-column gap-3">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
         */}
        {/* <Route path="/" element={<Footer />} /> */}
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/"
          element={
            <Contacts contact={contacts} deleteHandler={deleteHandler} />
          }
        />
        <Route path="/contact/:id" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
