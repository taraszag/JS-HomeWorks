function ansver(ans) {
    let tempStr = ans
    tempStr = tempStr.toUpperCase()
    let elm = "?"

    if (ans.indexOf(elm) != -1 && tempStr != ans) {
        return "Of course"
    }
    else if (tempStr == ans && ans.indexOf(elm) == -1 && ans.length != 0 ) {
       return "Wow relax!"
    }
    else if (ans.indexOf(elm) != -1 && tempStr == ans) {
        return "Calm down,i know!"
    }
    else if (ans.length == 0) {
        console.log(ans.length)
       return "Good! let it be!"
    }
    else if (ans.indexOf(elm) == -1 && tempStr != ans )
    return "does not matter!"
}
result = prompt("Enter questions for Bob: ");

alert(`${ansver(result)}`)