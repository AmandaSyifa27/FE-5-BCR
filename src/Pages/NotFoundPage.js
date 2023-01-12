import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <h1 style={{color: '#0d28a6', fontWeight: 900, fontSize: '300px', }}>404</h1>
        <h1 style={{fontWeight: 700, fontFamily: 'serif', marginTop: '30px', marginBottom: '30px'}}>PAGE NOT FOUND</h1>
        <em>Maybe you entered the wrong word</em>
        <br />
        <button style={{marginTop: '25px'}} className='button2'><Link to='/'><strong>Back To Home</strong></Link></button>
    </div>
  )
};

export default NotFoundPage;