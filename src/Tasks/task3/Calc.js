import React, {useState} from 'react';
import "./calc.css"

const Calc = () => {

    const [inputValue, setInputValue] = useState("") // стейт для отслеживания ввода
    const [chosenAction, setChosenAction] = useState("") // стейт для определения операции
    const [isEqual, setIsEqual] = useState(false) // стейт для проверки было ли нажато =

    const add = () => {
        if ((inputValue !== "" && !inputValue.includes("+") && chosenAction === "") || isEqual) {
            setInputValue(prevState => prevState + "+")
            setChosenAction("+")
            setIsEqual(false)
        }
    }

    const sub = () => {
        if ((inputValue !== "" && !inputValue.includes("-") && chosenAction === "") || isEqual) {
            setInputValue(prevState => prevState + "-")
            setChosenAction("-")
            setIsEqual(false)

        }
    }
    const divide = () => {
        if ((inputValue !== "" && !inputValue.includes("/") && chosenAction === "") || isEqual) {
            setInputValue(prevState => prevState + "/")
            setChosenAction("/")
            setIsEqual(false)
        }
    }
    const multi = () => {
        if ((inputValue !== "" && !inputValue.includes("x") && chosenAction === "") || isEqual) {
            setInputValue(prevState => prevState + "x")
            setChosenAction("x")
            setIsEqual(false)
        }
    }

    const removeLast = () => {
        const conditions = inputValue.includes("+") ||
            inputValue.includes("-") ||
            inputValue.includes("/") ||
            inputValue.includes("x")

        if (inputValue !== "0") {
            if (conditions) {
                setChosenAction("")
            }
            setInputValue(prevState => prevState.slice(0, -1))
        }
    }

    const equal = () => {
        let valueArr = inputValue.split(chosenAction)
        let result;
        if (!isEqual) {
            switch (chosenAction) {
                case "+":
                    result = parseInt(valueArr[0]) + parseInt(valueArr[1])
                    setInputValue(result.toString())
                    break
                case "-":
                    result = parseInt(valueArr[0]) - parseInt(valueArr[1])
                    setInputValue(result.toString())
                    break
                case "/":
                    result = parseInt(valueArr[0]) / parseInt(valueArr[1])
                    setInputValue(result.toString())
                    break
                case "x":
                    result = parseInt(valueArr[0]) * parseInt(valueArr[1])
                    setInputValue(result.toString())
                    break
                default:
            }
            setIsEqual(true)
            setChosenAction("")
        }

    }


    return (
        <div>
            <form name="calc" className="wrapper">
                <table className="main">
                    <tbody>
                    <tr className="display">
                        <td colSpan="5">
                            <input onChange={(event) => setInputValue(prevState => prevState + event.target.value)}
                                   className="input" type="text" name="input" placeholder="0" value={inputValue}/>
                        </td>
                    </tr>
                    <tr className="buttons">
                        <td>
                            <input className="button" type="button" defaultValue="1"
                                   onClick={() => setInputValue(prevState => prevState + "1")}
                            />
                        </td>
                        <td>
                            <input className="button" type="button" defaultValue="2"
                                   onClick={() => setInputValue(prevState => prevState + "2")}
                            />
                        </td>
                        <td>
                            <input className="button" type="button" defaultValue="3"
                                   onClick={() => setInputValue(prevState => prevState + "3")}
                            />
                        </td>
                        <td>
                            <input className="button" id="div" type="button" defaultValue="/"
                                   onClick={() => divide()}
                            />
                        </td>
                    </tr>
                    <tr className="buttons">
                        <td>
                            <input className="button" type="button" defaultValue="4"
                                   onClick={() => setInputValue(prevState => prevState + "4")}
                            />
                        </td>
                        <td>
                            <input className="button" type="button" defaultValue="5"
                                   onClick={() => setInputValue(prevState => prevState + "5")}
                            />
                        </td>
                        <td>
                            <input className="button" type="button" defaultValue="6"
                                   onClick={() => setInputValue(prevState => prevState + "6")}
                            />
                        </td>
                        <td>
                            <input className="button" id="sub" type="button" defaultValue="-"
                                   onClick={() => sub()}
                            />
                        </td>
                    </tr>
                    <tr className="buttons">
                        <td>
                            <input className="button" type="button" defaultValue="7"
                                   onClick={() => setInputValue(prevState => prevState + "7")}
                            />
                        </td>
                        <td>
                            <input className="button" type="button" defaultValue="8"
                                   onClick={() => setInputValue(prevState => prevState + "8")}
                            />
                        </td>
                        <td>
                            <input className="button" type="button" defaultValue="9"
                                   onClick={() => setInputValue(prevState => prevState + "9")}
                            />
                        </td>
                        <td>
                            <input className="button" id="multi" type="button" defaultValue="x"
                                   onClick={() => multi()}
                            />
                        </td>
                    </tr>
                    <tr className="buttons">
                        <td>
                            <input className="reset" type="button" defaultValue="c"
                                   onClick={() => setInputValue("")}
                            />
                        </td>
                        <td>
                            <input className="button" type="button" defaultValue="0"
                                   onClick={() => {
                                       if (inputValue !== "0" && inputValue !== "") {
                                           setInputValue(prevState => prevState + "0")
                                       }
                                   }}
                            />
                        </td>
                        <td>
                            <input className="button" id="sum" type="button" defaultValue="+"
                                   onClick={() => add()}
                            />
                        </td>
                        <td>
                            <input id="equals" type="button" defaultValue="="
                                   onClick={() => equal()}
                            />
                        </td>
                    </tr>
                    <tr className="buttons">
                        <td>
                            <input className="button" id="remove" type="button" defaultValue="<-"
                                   onClick={() => removeLast()}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Calc;
