function ansver(ans) {
    let ansverBob = 'does not matter!'
    let tempStr = ans
    tempStr = tempStr.toUpperCase()
    
    for (let i = 1; i < ans.length; i += 1) {
        if (ans[i] == "?") {
            ansverBob = "Of course"
        };
        if (tempStr == ans && ans[i] == "!") {
            ansverBob = "Wow relax!"
        }
  
        if (tempStr == ans && ans[i] == "?") {
            ansverBob = "Calm down,i know!"
        }
    }
    if (ans.length == 0) {
        ansverBob = "Good! let it be!"
    }

    return ansverBob
}
result = prompt("Enter questions for Bob: ");

alert(`${ansver(result)}`)