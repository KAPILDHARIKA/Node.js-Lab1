const questionOne = function questionOne(arr) {
    // Implement question 1 here
    var t = 0;
    for (i = 0; i < 3; i++) {
        t = t + Math.pow(arr[i], 2);

    }
    return t;
}

const questionTwo = function questionTwo(num) {
    // Implement question 2 here
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    } else {
        return (questionTwo(num - 1) + num)
    }

}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    var c = 0;
    text = text.toLowerCase();
    var b = text.length;
    var i = 0;
    while (i < b) {
        if ((text[i] == "a") || (text[i] == "e") || (text[i] == "i") || (text[i] == "o") || (text[i] == "u")) {
            c = c + 1;
        }
        i = i + 1;
    };
    return c;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if (num < 0) { return "NaN" }
    if (num == 0) { return 1 } else {
        return (questionFour(num - 1) * num)
    }
}

module.exports = {
    firstName: "YOUR FIRST NAME",
    lastName: "YOUR LAST NAME",
    studentId: "YOUR STUDENT ID",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};

console.log(questionOne([5, 3, 10]));
console.log(questionTwo(5));
console.log(questionThree("Dharika kapil"));
console.log(questionFour(3));