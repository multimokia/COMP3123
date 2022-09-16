//Exercise 1
/**
 *
 * @param {string} phrase The phrase to titlize
 */
function titleize(phrase) {
    let words = phrase.split(' ');

    //Update all the words to be capitalized
    for (const [ind, word] of words.entries()) {
        words[ind] = `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
    }

    return words.join(" ");
}

/**
 * @param {Number} arguments The numbers to find the maximum of
 */
function getLargest() {
    //Min must be -inf
    let maximum = -Infinity;

    for (const num of arguments) {
        if (num > maximum) {
            maximum = num;
        }
    }

    return maximum;
}

/**
 *
 * @param {string} word Word to move the last 3 letters of
 */
function moveLastThreeLetters(word) {
    //Word length must be >= 3
    if (word.length < 3) {
        return word;
    }

    return `${word.substring(word.length - 3)}${word.substring(0, word.length - 3)}`;
}

/**
 *
 * @param {Number} angleDegrees degree to classify
 */
function angleClassifier(angleDegrees) {
    if (angleDegrees < 90) { return "Acute angle"; }
    if (angleDegrees > 90 && angleDegrees < 180) { return "Obtuse angle"; }
    if (angleDegrees == 180) { return "Straight angle" }

    //Fallback option
    return "Right angle"
}

module.exports = {
    titleize: titleize,
    getLargest: getLargest,
    moveLastThreeLetters: moveLastThreeLetters,
    angleClassifier: angleClassifier
}
