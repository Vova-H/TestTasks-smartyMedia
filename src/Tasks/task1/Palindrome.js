const checkPalindrome = (word) => {
    const length = word.length
    const wordArr = word.split("")
    if (length % 2 === 0) { // кейс для слова с парным кол букв
        for (let i = 0; i < length / 2; i++) {
            if (wordArr[i] !== wordArr[length - (1 + i)]) {
                return false
            }
        }
        return true
    } else {
        for (let i = 0; i < (length - 1) / 2; i++) { // кейс для слова с непарным кол букв
            if (wordArr[i] !== wordArr[length - (1 + i)]) {
                return false
            }
        }
        return true
    }
}

export default checkPalindrome
