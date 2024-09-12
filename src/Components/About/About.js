import React from 'react'
import  './About.css'
import Title from '../Title/Title'
import cookies from 'js-cookie';
import ScrollAnimation from 'react-animate-on-scroll';

const About=()=> {
  const lng=cookies.get('i18next')||"en"

  return (
    <section className='about'id='about'>
        <div className='container'>
            <Title 
            title={lng=="en"?`About me`:`لمحة عني`} 
            subtitle={lng=="en"?`About me and what I'm doing, and what i can help you in`:`لمحة عني وعن ما أفعله، وما يمكنني مساعدتك فيه`}
            />
            <div className='content'>
            <div className='row left'>
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'
                    className='img'>
                  <img src='../../images/about.jpg' alt=''/>
                </ScrollAnimation>
              </div>
              <div className='row right'>
                <h1>{lng=="en"?`Shadi Alhamdo`:`شادي الحمدو`}</h1>
                <p>{lng=='en'?`I am a computer engineer. I graduated in the sixth month of the year 2024.
                 During my academic career, my passion led me to learn website development. I developed many websites such as electronic stores, applications for controlling things remotely, personal blogs, education platforms, and automation of reception systems. I focused mainly on Reactjs to build...
                 Web interfaces and Nodejs for the server as well as dealing with many different technologies whether for design or programming`:
                 `أنا مهندس كومبيوتر تخرجت في الشهر السادس من العام 2024 وخلال مسيرتي الدراسية قادني الشغف لتعلم تطوير مواقع الويب 
                 و قد قمت بتطوير العديد من المواقع مثل المتاجر الالكترزنية 
                 و تطبيقات التحكم بالاشياء عن بعد 
                 و مدونات شخصية ومنصات التعليم و أتمتة أنظمة أستقبال , قمت بتالركيز بشكل أساسي على 
                 Reactjs لبناء واجهات الويب و Nodejs للسيرفر وكذلك تعاملت مع العديد من التقنيات المختلفة سواء للتصميم او للبرمجة  `}
                </p>
                <div className='skills'>
                  <h1>{lng=='en'?`My Skills`:`مهاراتي`}</h1>
                  <div className='flex'>
                    <span className='active'><img src='../../images/skills/vuejs.svg' alt=''/> vuejs</span>
                    <span className='active'><img src='../../images/skills/react.svg' alt=''/>reactjs</span>
                    <span className='active'><img src='../../images/skills/javascript.svg' alt=''/>Javascript</span>
                    <span className='active'><img src='../../images/skills/tailwindcss.svg' alt=''/>tailwindCSS</span>
                    <span className='active'><img src='../../images/skills/nodejs.svg' alt=''/>nodejs</span>
                    <span className='active'><img src='../../images/skills/mongodb.svg' alt=''/>mongodb</span>
                    <span><img src='../../images/skills/mysql.svg' alt=''/>mysql</span>
                    <span><img src='../../images/skills/nodejs.svg' alt=''/>expressJS</span>
                    <span><img src='../../images/skills/java.svg' alt=''/>java</span>
                    <span><img src='../../images/skills/php.svg' alt=''/>php</span>
                    <span><img src='../../images/skills/algorithms.svg' alt=''/>algorithms</span>
                    <span><img src='../../images/skills/figma.svg' alt=''/>figma</span>
                    <span><img src='../../images/skills/photoshop.svg' alt=''/>photoshop</span>
                    <span><img src='../../images/skills/linux.svg' alt=''/>linux</span>
                    <span><img src='../../images/skills/ubuntu.svg' alt=''/>ubuntu</span>
                    <span><img src='../../images/skills/aws.svg' alt=''/>AWS</span>
                    <span><img src='../../images/skills/networking.svg' alt=''/>networking</span>
                    <span><img src='../../images/skills/security.svg' alt=''/>cybersecurity</span>

                  </div>
                </div>
                
              </div>
              
            </div>
        </div>
    </section>
  )
}

export default About