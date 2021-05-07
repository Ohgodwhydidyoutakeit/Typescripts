import React from 'react';

const LanguageContext = React.createContext({
    language: "en",
    setLanguage: (lan: string ) => { }
});
export default LanguageContext;