// // ➡Creation of the Global Execution Context:
// // When a JavaScript program starts running, it creates the global execution context. This context consists of two phases: the memory phase and the execution phase.

// // ➡Memory Phase:
// // During the creation phase, the JavaScript engine sets up the global object (which is the window object in a browser environment), the 'this' keyword, and the outer environment reference.
// // It also scans through the code and sets up memory space for variables and functions through a process called "hoisting." Variables are set to undefined, and functions are stored in their entirety.

// // ➡Execution Phase:
// // After the creation phase, the execution phase begins. This is where the actual code is executed line by line.

// // ➡Function Execution:
// // When a function is called, a new execution context is created for that function. This includes its own memory space for variables and parameters.
// // The function goes through its own creation and execution phases.
// // After the function finishes executing, its execution context is popped off the call stack.

// // ➡Call Stack:
// // The call stack is a data structure that keeps track of the execution context of the program. It follows the Last In, First Out (LIFO) principle.
// // As functions are called, their execution contexts are added to the top of the call stack.
// // When a function completes its execution, its context is removed from the top of the call stack.

// // ➡Global Execution Completion:
// // Once the global execution context completes, the program finishes its execution.

// // 📝Note:  the returned value being passed to the global environment, it's more accurate to say that the returned value is passed to the calling context. If a function is called within another function, the returned value is typically used in the context of the calling function.


// // +++++++++++++++++++or++++++++++++++++++=
// 1.JS creates Global excution context 
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined 
//   until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and 
//   when the function s are called,it creates a memory phase and execution phase for the function 
//   just like the main one.

// For live demo:
// browser > inspect > Sources
// create a snippet with few functions and visually experience the call stack.