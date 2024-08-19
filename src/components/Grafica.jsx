import React from 'react';

const LookerStudioEmbed = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', height: '800px', marginRight: '50px' }}>
      <iframe
        width="1200"
        height="950"
        src="https://lookerstudio.google.com/embed/reporting/ab811e00-24c7-448d-93b3-e1c13a1b94bf/page/ZEF9D"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
};

export default LookerStudioEmbed;
