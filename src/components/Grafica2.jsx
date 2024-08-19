import React from 'react';

const LookerStudioEmbed = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '400px',
      marginLeft: '260px'  // Ajusta este valor para mover el iframe más a la derecha
    }}>
      <iframe
        width="1400"
        height="550"
        src="https://lookerstudio.google.com/embed/reporting/ab811e00-24c7-448d-93b3-e1c13a1b94bf/page/p_zx7fd6k9jd"
        frameBorder="0"
        style={{ border: 'none', maxWidth: '100%', maxHeight: '100%' }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
};

export default LookerStudioEmbed;
