var id = 34;
console.log("id", id);
var concatenate = function (a, b) {
    return a + b;
};
console.log(concatenate("12", "5"));
// hello.ts
var message = "Hello, World!";
console.log(message);
var personDetails = {
    name: "jphn",
    age: 34
};
console.log(personDetails);
var circle = {
    area: function () { return (3.14 * 5 * 55).toFixed(2); }
};
console.log("area rusult", circle.area());
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Alice"));
