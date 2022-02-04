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
let name;
  return <ThemeProvider theme={theme}>
      <Chatbot 
     steps={[
         {
          id:'q-name', 
          message:'Hi there, What service do you want?', 
          trigger:'name',
         },
         {
          id:'name', 
          user:true, 
          validator: (value) => {
              name =value;
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
          message:`Hello ${name}, What is your email?`, 
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
          message:`What is your phone number, ${name}?`,
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
