import React from 'react';
// import "../service.css"
import skillData from './skillData';

function Skills() {
  return <div className='container'>
  <h2 className="text-center m-4 bg-light p-4" style={{borderRadius:'10px'}}>Technologies We Use In Our Development Process</h2>
   <div className='row m-auto'>
   {skillData.map((skill) => {
     return (
      <div className='col-xl-3 m-auto col-sm-3' key={skill.id}>
       <div className='card p-4 m-3'>
           <img style={{height:100, width:'auto', objectFit:'contain'}} src={skill.src} alt="db" />
       </div>
       </div>
     )
   })}
   </div>
   {/* <h5 className="text-center m-auto skill-cap" style={{width:'60%', padding:'3%'}} >Its the most efficient, cutting edge and trending technology used to build native apps as well as web apps.
   </h5> */}
  </div>;
}

export default Skills;
