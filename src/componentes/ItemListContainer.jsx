import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const items = [
    { title: 'Pizza Margarita', description: 'Tomato, mozzarella, and basil', img: 'https://via.placeholder.com/150' },
    { title: 'Pepperoni Pizza', description: 'Pepperoni, mozzarella, and tomato sauce', img: 'https://via.placeholder.com/150' },
    { title: 'Vegetarian Pizza', description: 'Bell peppers, olives, and onions', img: 'https://via.placeholder.com/150' }
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{greeting}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.map((item, index) => (
          <div key={index} style={{ display: 'flex', backgroundColor: 'white', color: 'black', padding: '1rem', borderRadius: '8px' }}>
            <img src={item.img} alt={item.title} style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
            <div style={{ marginLeft: '1rem' }}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;

