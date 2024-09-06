import React from 'react'
import Title from '../Title/Title'
import ServicesCard from './ServicesCard'
import './Services.css'
import cookies from 'js-cookie';

const Services=()=> {
    const lng=cookies.get('i18next')||"en"

  return (
    <section className='services' id='services'>
        <div className='container'>
            <Title title={lng=='en'?`My Services`:`خدماتي`}
             subtitle={lng=='en'?`In this section, you can see what can i help you`:
             `في هذا القسم، يمكنك رؤية ما يمكنني مساعدتك`}/>
            <div className='content'>
                <ServicesCard 
                icon={<i className="fa-brands fa-connectdevelop"></i>} 
                title={lng=="en"?`Website Development`:`تطوير الموقع`}
                subtitle={lng=="en"?`Design and develop responsive websites using React.js and Next.js.
                           Create attractive user interfaces using Bootstrap and Tailwind CSS`:
                           `تصميم مواقع التجارة الإلكترونية المباشرة باستخدام React.js وNext.js.
                             إنشاء واجهات مستخدم جذابة باستخدام Bootstrap وTailwind CSS`}/>
                <ServicesCard 
                icon={<i className="fa-brands fa-connectdevelop"></i>} 
                title={lng=="en"?`Website Development`:`تطوير الموقع`}
                subtitle={lng=="en"?`Build dynamic web applications using Node.js and Express.js.
                          Database integration with MySQL and MongoDB to store and manage data efficiently.`:`أنشاء تطبيقات ويب ديناميكية باستخدام Node.js وExpress.js.
                           وتكامل قاعدة البيانات مع MySQL وMongoDB لسهولة البيانات وإدارتها.S`}
                />
                <ServicesCard 
                icon={<i className="fa-solid fa-desktop"></i>} 
                title={lng=='en'?`User interface design`:`تصميم واجهة المستخدم`}
                subtitle={lng=='en'?`Design innovative and attractive user interfaces using Photoshop.
                          Improving the user experience (UX) to provide a seamless experience for users.`
                          :`تصميم واجهات مستخدم مبتكرة وجذابة باستخدام برنامج Photoshop.
                          تحسين تجربة المستخدم (UX) لتوفير تجربة سلسة للمستخدمين.`}
                />
                 <ServicesCard 
                icon={<i className="fa-solid fa-store"></i>} 
                title={lng=='en'?`Development of electronic stores`:`تطوير المتاجر الإلكترونية`}
                subtitle={lng=='en'?`Creating integrated online stores that include all the necessary features.
                          Providing safe and easy-to-use payment solutions.`
                          :`إنشاء متاجر إلكترونية متكاملة تتضمن كافة الميزات الضرورية.
                           توفير حلول دفع آمنة وسهلة الاستخدام.`}
                />
                 <ServicesCard 
                icon={<i className="fa-solid fa-house-laptop"></i>} 
                title={lng=='en'?`Remote control projects`:`مشاريع التحكم عن بعد`}
                subtitle={lng=='en'?`Develop remote control projects using the Arduino chip.
                          Create user interfaces to control devices remotely.`
                          :`
                          تطوير مشاريع التحكم عن بعد باستخدام شريحة الاردوينو.
                          إنشاء واجهات مستخدم للتحكم في الأجهزة عن بعد.`}
                />
                 <ServicesCard 
                icon={<i className="fa-solid fa-lightbulb"></i>} 
                title={lng=='en'?`Technical consulting`:`الاستشارات الفنية`}
                subtitle={lng=='en'?`Providing consultations on best practices in software development.
                          Helping companies choose the appropriate technology for their projects.`
                          :`
                          تقديم الاستشارات حول أفضل الممارسات في تطوير البرمجيات.
                          مساعدة الشركات على اختيار التكنولوجيا المناسبة لمشاريعها.`}
                />
                <ServicesCard 
                icon={<i className="fa-solid fa-hammer"></i>} 
                title={lng=='en'?`Maintaining and updating websites`:`صيانة وتحديث المواقع الإلكترونية`}
                subtitle={lng=='en'?`Providing periodic maintenance services and site updates to ensure optimal performance.
                           Bug fixes and performance improvements.`
                           :`
                            تقديم خدمات الصيانة الدورية وتحديث الموقع لضمان الأداء الأمثل.
                           إصلاحات الأخطاء وتحسينات الأداء.`}
                />
            </div>
            <div className='flex'>
                <div className='row left'>
                    <h3>{lng=='en'?`Why choose me?`:`لماذا تختارني؟`}</h3>
                    <p></p>
                </div>
                <div className='row right'>
                    <ul>
                        <li><span><i className="fa-solid fa-chevron-right"></i></span>
                        {lng=='en'?`Practical experience: Worked on various projects that meet different needs.`:`
                                    الخبرة العملية: عملت على مشاريع مختلفة تلبي الاحتياجات المختلفة.`}</li>
                        <li><span><i className="fa-solid fa-chevron-right"></i></span>{lng=='en'?`Commitment to quality: I provide the best possible solutions while focusing on details.`:
                        `الالتزام بالجودة: أقدم أفضل الحلول الممكنة مع التركيز على التفاصيل.`}</li>
                        <li><span><i className="fa-solid fa-chevron-right"></i></span>{lng=='en'?`Effective communication: I ensure constant communication with customers to ensure their satisfaction.`
                        :`التواصل الفعال: أحرص على التواصل الدائم مع العملاء لضمان رضاهم.`}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services