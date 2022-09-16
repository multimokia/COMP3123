const {titleize, getLargest, moveLastThreeLetters, angleClassifier} = require("../lab1/src/index");

//Example 1
test("Tests all letter capitalization, expects 'The Quick Brown Fox'", () => {
    expect(titleize("the quick brown fox")).toBe("The Quick Brown Fox");
});

//Example 2
test("Tests maximum getter, (1, 0, 1) expects 1", () => {
    expect(getLargest(1, 0, 1)).toBe(1);
});

test("Tests maximum getter, (0, -10, -20) expects 0", () => {
    expect(getLargest(0, -10, -20)).toBe(0);
});

test("Tests maximum getter, (1000, 510, 440) expects 1000", () => {
    expect(getLargest(1000, 510, 440)).toBe(1000);
});

//Example 3
test("Tests last 3 switch on 'Python', expects 'honPyt'", () => {
    expect(moveLastThreeLetters("Python")).toBe("honPyt");
});

test("Tests last 3 switch on 'JavaScript', expects 'iptJavaScr'", () => {
    expect(moveLastThreeLetters("JavaScript")).toBe("iptJavaScr");
});

test("Tests last 3 switch on 'Hi', expects 'Hi'", () => {
    expect(moveLastThreeLetters("Hi")).toBe("Hi");
});


//Example 4
test("Tests angle classification on 47 degrees. Expects 'Acute angle'", () => {
    expect(angleClassifier(47)).toBe("Acute angle");
});

test("Tests angle classification on 90 degrees. Expects 'Right angle'", () => {
    expect(angleClassifier(90)).toBe("Right angle");
});

test("Tests angle classification on 145 degrees. Expects 'Obtuse angle'", () => {
    expect(angleClassifier(145)).toBe("Obtuse angle");
});

test("Tests angle classification on 180 degrees. Expects 'Straight angle'", () => {
    expect(angleClassifier(180)).toBe("Straight angle");
});
