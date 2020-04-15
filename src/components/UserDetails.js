import React from 'react';
import '../App.css';
import Card from './Card';

const UserDetails = ({ data, users, searchName}) => {
    return <div className='ui link cards'>
        <Card  data={data} users={users} searchName={searchName} />
    </div>
}

export default UserDetails;