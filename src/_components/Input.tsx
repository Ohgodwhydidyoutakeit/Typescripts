import '../_styles/input.scss'
import GameContext from '../_redux/context/gameContext';
import LanguageContext from '../_redux/context/languageContext';
import WordContext from '../_redux/context/wordContext';

import { useContext } from 'react';

import text from '../_misc/language/language.json';
export const Input = () => {
    const { game, setGame } = useContext(GameContext);
    const { language } = useContext(LanguageContext);
    const { word, setWord } = useContext(WordContext);
    let str = language as keyof typeof text;

    const scored = (e: any) => {
        if (e.code !== "Enter") return
        let index = word.word.indexOf(e.target.value)

        if (index !== -1 && game.game) {
            word.word[index] = "";
            setWord({
                ...word,
                word: word.word
                // word: word.word[index]= 
                // word: [...word.word.slice(0, index), ...word.word, ...word.word.slice(index + 1)]
                //[...array.slice(0, index), ...items, ...array.slice(index + 1)];

            })

            e.target.value = ""
        }
        e.target.value = ""
    }
    const placeholder = (): string | undefined => {
        if (!game.game) {
            return text[str].inputPlaceholder
        } else {
            return undefined
        }
    }
    return (
        <div className="container-input ">
            {/* ustawia na na nowo genetuje rezczy bo zmienia game za kadym razem */}
            <input type="text" className="rounded-edges border-small" onFocus={() => {
                setGame({
                    ...game,
                    timer: game.timer = true
                })

            }}
                onKeyDown={(e) => scored(e)}

                placeholder={placeholder()}

            />
        </div>
    )
}