import React, { useState } from 'react'
import Title from '../Title/Title'
import './Contact.css'
import cookies from 'js-cookie';
import toast from 'react-hot-toast';
import supabase from '../../supabaseClient';

const Contact=()=> {
  const lng=cookies.get('i18next')||"en";
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = { name, email, message };

    try {
        const { data, error } = await supabase
            .from('message')
            .insert([form]) // إدراج البيانات من الكائن form
            .select();

        // تحقق من وجود خطأ
        if (error) {
            throw new Error(error.message); // رمي خطأ إذا فشل الإدراج
        }
        
        // إذا كان الإدراج ناجحاً
        console.log('Data inserted successfully:', data);
        setName("");
        setEmail("");
        setMessage("")
      toast.success('Message Add Successfully ');
        // يمكنك هنا تحديث الحالة أو إظهار رسالة نجاح

    } catch (err) {
        toast.error("This didn't work Please Try again later.")
        console.error('Error inserting data:', err.message);
        // إدارة الأخطاء - يمكنك هنا تحديث الحالة لإظهار رسالة خطأ للمستخدم
    }
};
            

     

     



  return (
    <section className='contact' id='contact'>
        <div className='container'>
            <Title title={lng=='en'?`Contact me`:`تواصل معي`} subtitle={lng=='en'?`feel free for contact me`:`لا تتردد في الاتصال بي...`}/>
            <form onSubmit={handleSubmit}>
            <div className='w-49'>
                <label>{lng === 'en' ? 'Your Name:' : 'أسمك:'}</label>
                <input
                    className='form-input'
                    type='text'
                    placeholder={lng === 'en' ? 'What is your name?' : 'ماهو أسمك؟'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className='w-49'>
                <label>{lng === 'en' ? 'Your Email:' : 'بريدك الإلكتروني:'}</label>
                <input
                    className='form-input'
                    type='email'
                    placeholder={lng === 'en' ? 'What is your email?' : 'ماهو بريدك الإلكتروني؟'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='w-100'>
                <label>{lng === 'en' ? 'Your Message:' : 'رسالتك:'}</label>
                <textarea
                    placeholder={lng === 'en' ? 'Write your message here...' : 'أكتب رسالتك هنا....'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button className='secondary-btn' type='submit'>
                    {lng === 'en' ? 'Send Message' : 'أرسل الرسالة'}
                </button>
            </div>
        </form>
        <div className='contact-links'>
            <a className='facebook' href='https://www.facebook.com/profile.php?id=100008293668112&mibextid=ZbWKwL'><i class="fa-brands fa-facebook"></i>Facebook</a>
            <a className='whatsapp' href=' https://wa.me/qr/MMILXYAFF7LFE1'><i class="fa-brands fa-whatsapp"></i>Whatsapp</a>
            <a className='telegram' href='https://t.me/ShadiAlhamdo'><i class="fa-brands fa-telegram"></i>Telegram</a>
            <a className='github' href='https://github.com/ShadiAlhamdo'><i class="fa-brands fa-github"></i>Git-Hub</a>

        </div>
        </div>
    </section>
  )
}

export default Contact