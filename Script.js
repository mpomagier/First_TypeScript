function showMyName(name) {
    console.log(name);
}
showMyName("John");
function square(a) {
    return a * a;
}
var result = square(10);
function sum(title) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return title + " = " + numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
var sumResult = sum("Numbers", 1, 6, 10);
function executeFunc(func) {
    var title = "Lorem Ipsum";
    func(title, 24, ["Sport", "Movies"]);
}
executeFunc(function (title, age, hobbies) {
    return true;
});
