// Simple JavaScript example for SonarQube
function greet(name) {
    if(!name) {
        console.log("Hello, World!");
    } else {
        console.log("Hello, " + name + "!");
    }
}

greet();          // will print "Hello, World!"
greet("Sonar");   // will print "Hello, Sonar!"

// Example with potential code smell
let a = 5;
let b = 0;
console.log(a / b);  // Division by zero

