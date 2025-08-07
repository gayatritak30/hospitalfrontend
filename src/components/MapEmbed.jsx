import React from 'react';

const MapEmbed = () => {
  return (
    <div className="w-full h-[400px] mt-10 rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Hospital Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2127048914474!2d73.84962707478264!3d18.516429982576464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07b5c13c9fd%3A0xd36654dc9d22edc!2sFortis%20Hospital%2C%20Pune!5e0!3m2!1sen!2sin!4v1657095021412!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
