
import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience=()=>{
  return(
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontent">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
               <BsFillPatchCheckFill className='experience__details-icon' />
               <div>
                 <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
               <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
               </div>
            </article> <article className='experience__details'>
               <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Javascript</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article> <article className='experience__details'>
               <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Bootstrap</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article> 
            <article className='experience__details'>
               <BsFillPatchCheckFill className='experience__details-icon'/>
               <div><h4>React</h4>
               <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>
        {/*end of frontend*/}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
               <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h4>.Net</h4>
               <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
               <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDb</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article> 
            <article className='experience__details'>
               <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Mysql</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article> 
            <article className='experience__details'>
               <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Django</h4>
               <small className='text-light'>Basic</small>
               </div>
            </article> 
            
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience