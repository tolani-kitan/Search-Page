import React from 'react';

const Card = ({ data, users }) => {

    let count = 0;

    data = data.map((d) => {

        return (
            <div className='ui card' key={d.id}>
                <div className="image images">
                <img src={users[count].image} alt={d.company.catchPhrase} />
                </div>
                <div className="content">
                <p className="header">{d.name}</p>
                    <p>{d.username}</p>
                    <p>{d.email}</p>
        <p>{d.phone} {count++}</p>
                    
            </div>
            </div>
        )
    })
    return data
}

export default Card;