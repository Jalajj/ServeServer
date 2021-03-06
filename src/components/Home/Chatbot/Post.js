import React from 'react';
import axios from 'axios';

function Post({steps}) {
  const data = {
    name: steps.name.value,
    email:steps.email.value,
    phone:steps.phone.value,
    services: steps.services.value
};


      axios.post('https://serve-server-chatbot.herokuapp.com/chats/create', data).then((service) => {
        console.log(service)
      }).catch((err) => {
        console.log(err);
      });

  return <div>
      <p>Thanks for reaching out! We will get in touch with you very soon.</p>
  </div>;
}

export default Post;
