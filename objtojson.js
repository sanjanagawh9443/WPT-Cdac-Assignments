// Step 1: Declare an object
let person = {
  name: "Rahul",
  age: 25,
  city: "Pune"
};

console.log("Original Object:", person);

// Step 2: Convert object to JSON format
let jsonData = JSON.stringify(person);
console.log("JSON Format:", jsonData);

// Step 3: Convert JSON back to object
let newObject = JSON.parse(jsonData);
console.log("Converted Back to Object:", newObject);
