import React, { useEffect, useState } from 'react'
import cookies from 'js-cookie';
import supabase from '../../supabaseClient';
import formatDate from '../formDate';
import ScrollAnimation from 'react-animate-on-scroll';

const Projectcard=(props)=> {
    const lng=cookies.get('i18next')||"en"
    const[fetcherror,setFetcherror]=useState(null)
    const [technical,setTechnical]=useState(null);

    useEffect(()=>{
       getTechnical();
    },[props.id]);
    

const getTechnical= async () => {

  const {data,error} = await supabase
  .from('project')
  
  .select(`
    
    project_tools_rel (
        tools,
        tools (
            *
        )
    )
`) .eq('id', props.id);
  
  if(error){
    setFetcherror("Could not Fetch Data")
    setTechnical(null)
    console.log(error)
  }

  
  if(data){
    setTechnical(data)
    setFetcherror(null)
    

  }
  if(data===null){
    console.log("DATA is Null")
  }
};
    

  return (
    <>
   
       
                <ScrollAnimation animateIn='bounceInRight' className='projectcard' key={props.key}>
                <div className='img'>
                   <img src={props.img} alt='img'/>
                </div>
            <div className='text'>
                <p className='date'>{formatDate(props.date)}</p>
                <div className='project-name'>
                    <h3>{lng=='en'?props.name_en: props.name_ar}</h3>
                    <div>
                        <a href={props.demo}><i class="fa-regular fa-eye"></i>demo</a>
                        <a href={props.source}>source<i class="fa-solid fa-download"></i></a>
                    </div>
                </div>
                <p className='desc'>
                {lng=='en'?props.desc_en :props.desc_ar}
                </p>
                <h3>Tools:</h3>
               
                
                {technical && technical.map((project, index) => {
    return (
        <div key={index} className='tools'>
            {project.project_tools_rel && project.project_tools_rel.map((relation, relIndex) => (
                <span key={relIndex}>
                    {relation.tools.name} {/* عرض اسم الأداة هنا */}
                </span>
            ))}
        </div>
    );
})}
                   
              
            </div>
            </ScrollAnimation>
         
    </>
  )
}

export default Projectcard
