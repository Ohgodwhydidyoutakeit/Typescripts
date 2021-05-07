import '../_styles/logo.scss'
import LanguageContext from '../_redux/context/languageContext';
import React, { useContext } from 'react';
import text from '../_misc/language/language.json';



export const Logo = () => {
    const { language } = useContext(LanguageContext);

    let str = language as keyof typeof text;
    return (

        <div className="container-logo">
            <h1>{text[str].title}</h1>

            <p>{text[str].startText}</p>



        </div>

    )
}