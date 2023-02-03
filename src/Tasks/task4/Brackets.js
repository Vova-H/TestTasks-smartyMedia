import React, {useState} from 'react';


const Brackets = () => {

    const [inputValue, setInputValue] = useState("")
    const [isCorrect, setIsCorrect] = useState(true)


    const checkBrackets = (text) => {

        let tmpOpened = []  // круглые скобки открытые
        let tmpClosed = []  // круглые скобки закрытые
        let tmp2Opened = []  // фигурные скобки открытые
        let tmp2Closed = []  // фигурные скобки закрытые
        let tmp3Opened = []  // квадратные скобки открытые
        let tmp3Closed = []  // квадратные скобки закрытые

        setInputValue(text)
        for (let i = 0; i < text.length; i++) {
            switch (text[i]) {

                case "(" :
                    tmpOpened.push("(")
                    continue
                case ")":
                    tmpClosed.push(")")
                    continue

                case "{" :
                    tmp2Opened.push("{")
                    continue
                case "}":
                    tmp2Closed.push("}")
                    continue

                case "[" :
                    tmp3Opened.push("[")
                    continue
                case "]":
                    tmp3Closed.push("]")
                    break
                default:
            }
        }

        if (tmpOpened.length === tmpClosed.length
            && tmp2Opened.length === tmp2Closed.length
            && tmp3Opened.length === tmp3Closed.length
        ) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
    }


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <input type="text" value={inputValue} onChange={(event) => checkBrackets(event.target.value)}/>
            {
                isCorrect ?
                    <span>True</span>
                    :
                    <span>False</span>
            }
        </div>
    );
};

export default Brackets;
