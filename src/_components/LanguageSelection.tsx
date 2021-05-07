
import { useContext } from 'react';
import LanguageContext from '../_redux/context/languageContext';


import '../_styles/language.scss';
export const LanguageSelection = () => {
    return (
        <div className="container-language">
            <Button shortLang={"PL"} />
            <Button shortLang={"EN"} />
        </div>
    )
}


type buttonProps = {
    shortLang: string
}


const Button = ({ shortLang }: buttonProps) => {

    const { setLanguage } = useContext(LanguageContext)
    const clicked = (e: any) => {
        setLanguage(e.target.textContent)
    }

    return (
        <button className="rounded-edges border-small" onClick={(e) => { clicked(e) }} >{shortLang}</button>
    )
}