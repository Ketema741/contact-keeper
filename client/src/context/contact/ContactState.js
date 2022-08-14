import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
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

    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{
       contacts: state.contacts
      
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;