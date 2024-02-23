import React from 'react';
import {SignInButton} from '@clerk/clerk-react';

function Home() {
  return (
    <div>
        <SignInButton mode='modal' redirectUrl='/dashboard'/>
         <h1>Home Page</h1>
    </div>
  );
};

export default Home;