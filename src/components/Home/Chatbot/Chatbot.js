import React from 'react';
import Chatbot from "react-simple-chatbot"
import { ThemeProvider } from 'styled-components';
import Post from './Post';

// all available theme props
const theme = {
  background: 'white',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#FBA504',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#FBA504',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};



function SimpleForm() {
    const config ={
        width: "400px",
        height: "500px",
        floating: true,
        color:'blue'
      };

  return <ThemeProvider theme={theme}>
      <Chatbot 
     steps={[
       {
         id:'q-services',
         message: 'What services are you looking for?',
         trigger:'services'
       },
       {
          id:'services', 
          user:true, 
          validator: (value) => {
             if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
               {
                 return true;
               }
             else
               {
                 return'Please input alphabet characters only.';
               }
          },
          trigger:'q-name'
         },
         {
          id:'q-name', 
          message:'Great!, what is you name?', 
          trigger:'name',
         },
         {
          id:'name', 
          user:true, 
          validator: (value) => {
             if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
               {
                 return true;
               }
             else
               {
                 return'Please input alphabet characters only.';
               }
          },
          trigger:'q-email'
         },
         {
          id:'q-email', 
          message:`What is your email?`, 
          trigger:'email',
         },
         {
          id:'email', 
          user:true, 
          validator: (value) => {
             if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
               {
                 return true;
               }
             else
               {
                 return'Please enter a valid email.';
               }
          },
          trigger: 'q-phone'
         }, {
          id:'q-phone', 
          message:`Lastly, What is your phone number?`,
          trigger:'phone',
         },
         {
          id:'phone', 
          user:true, 
          validator: (value) => {
             if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
               {
                 return true;
               }
             else
               {
                 return'Please enter a valid phone number.';
               }
          },
          trigger:'end-message',
         },
     {
                  id: 'end-message',
                  component: <Post />,
                  asMessage: true,
                  end: true,
               },
        ]}
        {...config}
       />
  </ThemeProvider>;
}

export default SimpleForm;
