
const isPaired = (str) => {
    let brackets = "[]{}()"
    let itemStek = []


    for (let i = 0; i < str.length; i += 1) {
        let bracketsIndex = brackets.indexOf(str[i])
        if (!brackets.includes(str[i])) {
            continue;
        } else if (bracketsIndex % 2 == 0) {
            itemStek.push(bracketsIndex + 1)
        } else if (itemStek.pop() != bracketsIndex) {
            return false;
        }
    }
    return itemStek.length == 0
};
console.log(isPaired(
    '(((})))'
))
//2, 1, 0, 2, 0, 1
//2, 1, 2, 1, 0, 0