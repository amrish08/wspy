import React from 'react';
import {SignInButton} from '@clerk/clerk-react';

function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <SignInButton mode='modal' redirectUrl='/dashboard'/>
    </div>
  );
};

export default Home;