
import { useEffect, useState } from 'react';
import '../_styles/word.scss'


/*
    1. String for word comes from an array or some api or some other local json
    2. Styles come from styled components or scss file 

*/
type WordProps = {
    message: string,
    delay: number
}


export const Word = ({ message, delay }: WordProps) => {
    const colors: string[] = ["f72585", "b5179e", "7209b7", "560bad", "480ca8", "3a0ca3", "3f37c9", "4361ee", "4895ef", "4cc9f0"]

    const [show, setShow] = useState<boolean>(false);
    const [style, setStyle] = useState({
        col: `#${colors[Math.floor(Math.random() * colors.length)]}`,
        fon: `${Math.random() * 3 + 1}em`,
        left: `${Math.floor(Math.random()*800)}px`,
        top: `${Math.floor(Math.random()*200)}px`
        
    })
    useEffect(() => {
        setShow(true);
    }, [show])

    const cardStyle = {
        opacity: show ? 1 : 0,
        transition: "1.5s",
        // TODO: Add variable to a multiplicator
        transitionDelay: `${delay * 1.4}s`,
        // now using variables we will style our components
        // fontSize: `${Math.random() * 2 + 1}em`,
        fontSize: style.fon,
        color: style.col,
        left:style.left,
        top:style.top,
        // color:`#${colors[Math.floor(Math.random() * colors.length)]}`,



    };

    return (
        <div style={cardStyle} className="word" >
            {message}
        </div>
    )


}