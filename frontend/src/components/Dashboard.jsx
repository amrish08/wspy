import React from 'react';
import {UserButton} from '@clerk/clerk-react';
import {useClerk} from '@clerk/clerk-react';

function Dashboard() {
    const {user} = useClerk();

    console.log(user);

  return (
    <div>
        <h1>Welcome to dashboard {user.firstName}</h1>
        <UserButton/>
    </div>
  )
};

export default Dashboard;