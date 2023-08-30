import React from 'react';
import './GoogleForm.css'

const GoogleFormEmbed = () => {
  return (
    <div className='google-form-container'>
      <iframe
        src="https://forms.gle/EoszpuCVXruBc5DAA"
        width="640"
        height="480"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleFormEmbed;