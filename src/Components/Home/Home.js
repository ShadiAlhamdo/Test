import React from 'react'
import './Home.css'
import cookies from 'js-cookie';
import toast from 'react-hot-toast';
import supabase from '../../supabaseClient';
import ScrollAnimation from 'react-animate-on-scroll';

const Home=()=> {
    
    const lng=cookies.get('i18next')||"en"
const handelShowCv = async () => {
    try {
        // استرجاع آخر سجل من جدول Cv
        const { data: lastCv, error: fetchError } = await supabase
            .from('cv')
            .select('cv') // حقل المسار فقط
            .order('id', { ascending: false }) // ترتيب حسب ID تنازلي للحصول على الأحدث
            .limit(1) // الحصول على سجل واحد فقط
            .single(); // استرجاع سجل واحد

        if (fetchError) {
            throw fetchError;
        }

        // تحقق مما إذا كانت هناك بيانات
        if (!lastCv || !lastCv.cv) {
            console.error('لم يتم العثور على الملف.');
            toast.error('لم يتم العثور على الملف.')
            return;
        }

        // تنزيل الملف من مجموعة التخزين
        const { data: fileData, error: downloadError } = await supabase.storage
            .from('profile') // استخدام اسم التخزين
            .download(lastCv.cv); // استخدم المسار من قاعدة البيانات
        if (downloadError) {
            throw downloadError;
        }
        // إنشاء رابط لتحميل الملف
        const url = URL.createObjectURL(fileData);
        const a = document.createElement('a');
        a.href = url;
        a.download = lastCv.cv.split('/').pop(); // استخدام اسم الملف من المسار
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url); // تحرير الذاكرة
        toast.success("تم التنزيل بنجاح")

    } catch (error) {
        console.error('خطأ أثناء تنزيل السيرة الذاتية:', error.message);
        toast.error(`${error.message}`)
        // يمكنك أيضًا عرض رسالة خطأ للمستخدم هنا
    }
};
  return (
    <section className='home' id='home'>
        <div className='container'>
            <div  
            className='row left'>
            <p className='first'>{lng=="en"?`Hi, Im shadi Alhamdo `:`مرحباً , أنا شادي الحمدو`}</p>
            <h2 className=''>
            I'm <span className="gradient-text-color">Full-Stack</span>
             Developer.
             </h2>
             <p className='text'>{lng=="en"?`I am a full-stack web programmer.
                 I work on developing websites from the front end using the Reactjs and Vuejs and Nextjs frameworks, and I ensure integrated design using Tailwindcss and Bootstrap.
                  I develop servers and connect to databases in a safe,
                   smooth and professional manner.`:`
                   أنا مطور مواقع ويب , اعمل على تطوير واجهات الويب بإستخدام أطر اعمل (),وأضمن ان التصميم متجاوب باستخدام BOOTSTRAPو Tailwindcss ,
                   أعمل من جهة المخدم باستخدام NODE JS بشكل أساسي باستخدام إطار عمل EXPRESS JS والاتصال مع قواعد البيانات بشكل سلس وآمن`}
            </p>
            <div className="buttons">
                    <button className='primary-btn animation-1' href='' >{lng=='en'?`Contact me`:`تـواصل معي`} <i className="fa-brands fa-linkedin"></i></button>
                    
                    <button 
                        className='secondary-btn updating' 
                        onClick={handelShowCv}
                    >
                        {lng === 'en' ? 'Download CV' : 'تحميل السيرة الذاتية'}
                    </button>
            </div>
        
            </div >
            <div 
            className='row right'>
                <div className='img'>
                    <img src='../../images/home.svg' alt=''/>
                </div>
            </div >
        </div>
    </section>
  )
}

export default Home