import React from "react";

const Map = () => {
  return (
    <div className="relative w-[328px] md:w-[688px] xl:w-[600px] xlr:w-[632px] h-[464px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.04893008433044!2d18.84301685515404!3d42.29231041978883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd56fcd8f4119%3A0xfb77e9968ec7e131!2sPIVOTEKA%2077%20Budva!5e0!3m2!1sru!2s!4v1742936489109!5m2!1sru!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;