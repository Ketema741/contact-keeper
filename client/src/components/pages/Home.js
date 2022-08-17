import React, { useContext, useEffect } from 'react'
import Contacts from '../contact/Contacts'
import ContactForm from '../contact/ContactForm'
import ContactFilter from '../contact/ContactFilter'
import AuthContext from '../../context/auth/authContext'

const Home = () => {

    const authContext = useContext(AuthContext)

    const { loadUser } = authContext;

    useEffect(() => {
        
        loadUser()
        console.log('from loadUser()')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return(
        <div className='grid-2'>
        <div>
            <ContactForm />
        </div>
            <div>
            <ContactFilter />
                <Contacts />
            </div>
        </div>
    )
}

export default Home;