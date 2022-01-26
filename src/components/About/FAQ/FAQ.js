
import React from 'react';
import Faq from "react-faq-component";
import data from './data';

function FAQ() {
  return <div style={{marginTop:'10%'}}>
   <Faq
      data={data}
        styles={{
          bgColor: "white",
          titleTextColor: "#2156c8",
          rowTitleColor: "#78789a",
          rowContentColor: "#48484a",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "20px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "50px",
          rowContentPaddingRight: "150px",
          arrowColor: "FBA504",
        }}
        config={{
          animate: true
        }}
    />
</div>;
}

export default FAQ;
