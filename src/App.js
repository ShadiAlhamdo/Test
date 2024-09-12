import React, { useEffect } from "react";
import i18n from "i18next";
import toast, { Toaster } from 'react-hot-toast';
import HttpApi from 'i18next-http-backend';
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import cookies from 'js-cookie';
import  "./App.css";
import Homepage from "./Components/Homepage";
import "animate.css/animate.compat.css"

import Dashboard from "./Components/Dashboard/Dashboard";


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      ar: {
        translation: {
          "Welcome to React": "اهلا بكمةفي رياكت"
        }
      }
    },
    fallbackLng: "en",
    detection :{
      order: ['cookie','htmlTag', 'localStorage', 'sessionStorage', 'navigator',  'path', 'subdomain'],
      caches:["cookie"],
    },
    backend:{
      loadPath: '/locales/{{lng}}/Translation.json',
    }
  });

function App() {
  const { t } = useTranslation();
  const lng=cookies.get('i18next')||"en";
  console.log(lng+"2555555555555");
  useEffect(()=>{
    window.document.dir = i18n.dir();
  },[lng])

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <Homepage/>
    </>
  );
}



export default App;
