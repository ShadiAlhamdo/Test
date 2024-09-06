import React, { useEffect, useState } from 'react'
import Title from '../Title/Title'
import Projectcard from './Projectcard'
import cookies from 'js-cookie';
import supabase from '../../supabaseClient';

const Project=()=> {
   const lng=cookies.get('i18next')||"en"
  
  const [fetcherror,setFetcherror]=useState(null);
  const [project,setproject]=useState(null);
  const [activeCategory, setActiveCategory] = useState('*'); // الحالة الجديدة لتتبع الفئة النشطة
 const [activeIdcategory,setActiveIdcategory]=useState(null);
  const [category,setCategory]=useState(null);
  useEffect(()=>{

  
   
   
    getCategory();
  
  },[])
  useEffect(()=>{

  
   
    getProject();
   
  
  },[activeCategory])

  const handleButtonClick = (categoryName,activeId) => {
    setActiveCategory(categoryName);
    setActiveIdcategory(activeId);
};


 
  const getProject= async (activeCategory) => {
    if(activeIdcategory==null){
      const {data,error} = await supabase
      .from('project')
      .select(`*
      )`)  
      
      if(error){
        setFetcherror("Could not Fetch Data")
        setproject(null)
        console.log(error)
      }
  
      
      if(data){
        setproject(data)
        console.log(data)
  
        setFetcherror(null)
  
      }
      if(data===null){
        console.log("DATA is Null")
      }
    }
    else{
      const {data,error} = await supabase
      .from('project')
      .select(`*
      )`).eq('category', activeIdcategory);    
      
      if(error){
        setFetcherror("Could not Fetch Data")
        setproject(null)
        console.log(error)
      }
  
      
      if(data){
        setproject(data)
        console.log(data)
  
        setFetcherror(null)
  
      }
      if(data===null){
        console.log("DATA is Null")
      }
    }
   
  };

  const getCategory=async ()=>{

    const {data,error}=await supabase
    .from("category")
    .select("id,name")
    if(error){
      setFetcherror("Could not Fetch Data")
      setCategory(null)
      console.log(error)
    }

    
    if(data){
      setCategory(data)
      setFetcherror(null)

    }
    if(data===null){
      console.log("DATA is Null")
    }
  }

 

  return (
    <section className='project' id='projects'>
        <div className='container'>
            <Title title={lng=='en'?`My Projects`:`مشاريعي`} 
            subtitle={lng=='en'?`In this section, you can see what i did`:`في هذا القسم يمكنك أن ترى ما فعلته`}/>
            <div className='buttons'>
            <button  onClick={() => handleButtonClick(`*`)}
            className={`primary-btn ${activeCategory === '*' ? 'active' : ''}`}>ALL</button>
             {
                category && category.map((val,ind)=>{
                  return(
                    <button  onClick={() => handleButtonClick(val.name,val.id)} 
                    className={`primary-btn ${activeCategory === val.name ? 'active' : ''}`}>
                      {val.name}
                    </button>
                  )
                })
                }
             
            </div>
            <div className='content'>
              {fetcherror && <p>{fetcherror}</p>}
                {project &&
                project.map((val,ind)=>{
                  return(
                    <Projectcard id={val.id}
                    name_ar={val.name_ar}
                    name_en={val.name_en}
                    desc_ar={val.desc_ar}
                    desc_en={val.desc_en}
                    demo={val.demo}
                    source={val.source}
                    date={val.date}
                    category={val.category}
                    img={val.img}
                    key={ind}
                    />
                  )
                })
                }
                
            </div>
        </div>
    </section>
  )
}

export default Project