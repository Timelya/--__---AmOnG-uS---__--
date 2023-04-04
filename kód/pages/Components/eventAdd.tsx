import React from 'react';

const EventAdd = () => {
  const data = [
    { name: 'John', number: 25 },
    { name: 'Emma', number: 12 },
    { name: 'Michael', number: 31 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventAdd;
