import React, { useEffect, useState } from 'react';

const Lineal = () => {
  const [plot, setPlot] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/train')  // Verifica que esta URL sea correcta
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPlot(data.plot);
      })
      .catch(error => {
        console.error('Error fetching plot:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
      <div style={{ width: '80%', maxWidth: '600px' }}>
        {plot ? (
          <img src={`data:image/png;base64,${plot}`} alt="Gráfica" style={{ width: '100%', height: 'auto' }} />
        ) : (
          <p>Cargando gráfico...</p>
        )}
      </div>
    </div>
  );
};

export default Lineal;
