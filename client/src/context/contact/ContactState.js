import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { v4 } from "uuid"; 

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';



const ContactState = (props) => {
  const initialState = {
    contacts:[
      {
        name:'ofi',
        email:'ofi@gmail.com',
        phone:'092312',
        type:'personal',
        _id:'1'
      },
      {
        name:'KG',
        email:'kg@gmail.com',
        phone:'092312',
        type:'personal',
        _id:'2'
      },
      {
        name:'Ketema',
        email:'ketema@gmail.com',
        phone:'092312',
        type:'personal',
        _id:'3'
      }

    ],
    current:null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  
  // add contact
  const addContact = (contact)=>{
    contact._id = v4();
    dispatch({ type:ADD_CONTACT, payload:contact })
  }

  // Delete Contact
  const deleteContact = (_id)=>{
    dispatch({ type:DELETE_CONTACT, payload:_id })
  }


// set current
const setCurrent = (contact)=>{
  dispatch({ type:SET_CURRENT, payload:contact })
}

// set current
const clearCurrent = ()=>{
  dispatch({ type:CLEAR_CURRENT })
}

  return (
    <ContactContext.Provider value={{
       contacts: state.contacts,
       addContact,
       deleteContact,
       setCurrent,
       clearCurrent
      
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;