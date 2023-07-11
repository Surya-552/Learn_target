let questions = [
	{
		numb: 1,
		Question: " What is the maximum length of a Python identifier?",
		Answer: "No fixed length is specified ",
		Options: [
			"16",
			"32",
			"18",
			"No fixed length is specified",
		]

	},
	{
		numb: 2,
		Question: "Python is a ___object-oriented programming language.",
		Answer: "General purpose",
		Options: [
			"Special purpose",
			"General purpose",
			"Medium level programming language",
			"All of the mentioned above",
		]
	},

	{
		numb: 3,
		Question: "Amongst the following, who is the developer of Python programming?",
		Answer: "Guido van Rossum",
		Options: [
			"Guido van Rossum",
			"Denis Ritchie",
			"Y.C. Khenderakar",
			"None of the mentioned above",
		]
	},

	{
		numb: 4,
		Question: "Amongst which of the following is / are the application areas of Python programming?",
		Answer: "All of the mentioned above",
		Options: [
			"Web Development",
			"Game Development",
			"Artificial Intelligence and Machine Learning",
			"All of the mentioned above",
		]
	},

	{
		numb: 5,
		Question: "Amongst which of the following is / are the Numeric Types of Data Types?",
		Answer: "All of the mentioned above",
		Options: [
			"int",
			"float",
			"complex",
			"All of the mentioned above",
		]
	},
	{

		numb: 6,
		Question: "list, tuple, and range are the ___ of Data Types.",
		Answer: "Sequence Types",
		Options: [
			"Sequence Types",
			"Binary Types",
			"Boolean Types",
			"None of the mentioned above",
		]
	},
	{
		numb: 7,
		Question: "Float type of data type is represented by the float class.",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 8,
		Question: "bytes, bytearray, memoryview are type of the ___ data type.",
		Answer: "Binary Types",
		Options: [
			"Mapping Type",
			"Boolean Type",
			"Binary Types",
			"None of the mentioned above",
		]
	},
	{
		numb: 9,
		Question: "The type() function can be used to get the data type of any object.",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 10,
		Question: "Binary data type is a fixed-width string of length bytes?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},


	{
		numb: 11,
		Question: "Varbinary data type returns variable-width string up to a length of max-length bytes?",
		Answer: "TRUE",
		Option: [
			"TRUE",
			"FALSE",
		]
	},
	{
		numb: 12,
		Questions: "Amongst which of the following is / are the logical operators in Python?",
		Answer: "All of the mentioned above",
		Options: [
			"and",
			"or",
			"not",
			"All of the mentioned above",
		]
	},
	{
		numb: 13,
		Question: "Is Python supports exception handling?",
		Answer: "Yes",
		Options: [
			"Yes",
			"No",
		]
	},
	{
		numb: 14,
		Question: "What is the name of the operator ** in Python?",
		Answer: "Exponentiation",
		Options: [
			"Exponentiation",
			"Modulus",
			"Floor division",
			"None of the mentioned above",
		]
	},
	{
		numb: 15,
		Question: "The % operator returns the ___.",
		Answer: "Remainder",
		Options: [
			"Quotient",
			"Divisor",
			"Remainder",
			"None of the mentioned above",
		]
	},

	{
		numb: 16,
		Question: "Amongst which of the following is / are the method of list?",
		Answer: "All of the mentioned above",
		Options: [
			"append()",
			"extend()",
			"insert()",
			"All of the mentioned above",
		]
	},
	{
		numb: 17,
		Question: "The list.pop ([i]) removes the item at the given position in the list?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 18,
		Question: "The list.index(x[, start[, end]]) is used to ___.",
		Answer: "Both A and B",
		Options: [
			"Return zero-based index in the list",
			"Raises a ValueError if there is no such item",
			"Both A and B",
			"None of the mentioned above",
		]
	},
	{
		numb: 19,
		Question: "Python Dictionary is used to store the data in a ___ format.",
		Answer: "Key value pair",
		Options: [
			"Key value pair",
			"Group value pair",
			"Select value pair",
			"None of the mentioned above",
		]
	},
	{
		numb: 20,
		Question: "Python Literals is used to define the data that is given in a variable or constant?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 21,
		Questions: "Conditional statements are also known as ___ statements.",
		Answer: "Decision-making",
		Options: [
			"Decision-making",
			"Array",
			"List",
			"None of the mentioned above",
		]
	},
	{
		numb: 22,
		Questions: "The if statement is the most fundamental decision-making statement?",
		Answer: "True",
		options: [
			"True",
			"False",
		]
	},
	{
		numb: 23,
		Question: "The return statement is used to exit a function?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 24,
		Questions: "Amongst which of the following is / are the conditional statement in Python code?",
		Answer: "if a<=100:",
		Options: [

			"if a<=100:",
			"if (a >= 10)",
			"if (a => 200)",
			"None of the mentioned above",
		]
	},
	{
		numb: 25,
		Questions: "Which of the following is not used as conditional statement in Python?",
		Answer: "switch",
		Options: [
			"switch",
			"if...else",
			"elif",
			"None of the mentioned above",
		]
	},
	{
		numb: 26,
		Question: "Which of the following is false regarding conditional statement in Python?",
		Answer: "We cannot use python classes to implement the switch case statement",
		Options: [
			"If-elif is the shortcut for the if-else chain",
			"We use the dictionary to replace the Switch case statement",
			"We cannot use python classes to implement the switch case statement",
			"None of the mentioned above",
		]
	},
	{
		numb: 27,
		Question: "In Python, an else statement comes right after the block after 'if'?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 28,
		Question: "In a Python program, Nested if Statements denotes?",
		Answer: "if statement inside another if statement",
		Options: [
			"if statement inside another if statement",
			"if statement outside the another if statement",
			"Both A and B", ,
			"None of the mentioned above",
		]
	},
	{
		numb: 29,
		Question: "Scope and lifetime of a variable declared in a function exist till the function exists?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 30,
		Question: "File handling in Python refers the feature for reading data from the file and writing data into a file?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 31,
		Question: "Amongst which of the following is / are the key functions used for file handling in Python?",
		Answer: "All of the mentioned above",
		Options: [
			"open() and close()",
			"read() and write()",
			"append()",
			"All of the mentioned above",
		]
	},
	{
		numb: 32,
		Question: "Amongst which of the following is / are needed to open an existing file?",
		Answer: "Both A and B",
		options: [
			"filename",
			"mode",
			"Both A and B",
			"None of the mentioned above",
		]
	},
	{
		numb: 33,
		Question: "In Python, ___ defines a block of statements.",
		Answer: "Indentation",
		Options: [
			"Block",
			"Loop",
			"Indentation",
			"None of the mentioned above",
		]
	},

	{
		numb: 34,
		Question: "An ___ statement has less number of conditional checks than two successive ifs.",
		Answer: "if-else",
		Options: [
			"if else if",
			"if elif",
			"if-else",
			"None of the mentioned above",
		]
	},
	{
		numb: 35,
		Question: "In Python, the break and continue statements, together are called ___ statement.",
		Answer: "goto",
		Options: [
			"Jump",
			"goto",
			"compound",
			"None of the mentioned above",
		]
	},
	{
		numb: 36,
		Question: "Binary files are stored in the form of 0s and 1s?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 37,
		Question: "The elif statement allows us to check multiple expressions.",
		Answer: "True",
		Option: [
			"True",
			"False",
		]
	},
	{
		numb: 38,
		Question: "The function file_object.close() is used to ___.",
		Answer: "To close an opened file",
		Options: [
			"To open the existing file",
			"To append in an opened file",
			"To close an opened file",
			"None of the mentioned above",
		]
	},
	{
		numb: 39,
		Question: "Python always makes sure that any unwritten or unsaved data is written to the file before it is closed?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 40, Question: "If a condition is true the not operator is used to reverse the logical state?",
		Answer: "a",
		Options: [
			"(a)True",
			"(b)False",
		]
	},
	{
		numb: 41,
		Questions: "Loops are known as ___ in programming.",
		Answer: "Control flow statements",
		Options: [
			"Control flow statements",
			"Conditional statements",
			"Data structure statements",
			"None of the mentioned above",
		]
	},
	{
		numb: 42,
		Question: "The for loop in Python is used to ___ over a sequence or other iterable objects.",
		Answer: "Iterate",
		Options: [
			"Jump",
			"Iterate",
			"Switch",
			"All of the mentioned above",
		]
	},
	{
		numb: 43,
		Question: "With the break statement we can stop the loop before it has looped through all the items?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},
	{
		numb: 44,
		Question: "The continue keyword is used to ___ the current iteration in a loop.",
		Answer: "End",
		Options: [
			"Initiate",
			"Start",
			"End",
			"None of the mentioned above",
		]
	},
	{
		numb: 45,
		Question: "Amongst which of the following is / are true about the while loop?",
		Answer: "All of the mentioned above",
		Options: [
			"It continually executes the statements as long as the given condition is true",
			"It first checks the condition and then jumps into the instructions",
			"The loop stops running when the condition becomes fail, and control will move to the next line of code.",
			"All of the mentioned above",
		]
	},
	{
		numb: 46,
		Question: "The ___ is a built-in function that returns a range object that consists series of integer numbers, which we can iterate using a for loop.",
		Answer: "range()",
		Options: [
			"range()",
			"set()",
			"dictionary{}",
			"None of the mentioned above",
		]
	},
	{
		numb: 47,
		Question: "Amongst which of the following is / are needed to open an existing file?",
		Answer: "Both A and B",
		Options: [
			"filename",
			"mode",
			"Both A and B",
			"None of the mentioned above",
		]
	},

	{
		numb: 48,
		Question: "The looping reduces the complexity of the problems to the ease of the problems?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},

	{
		numb: 49,
		Question: "The while loop is intended to be used in situations where we do not know how many iterations will be required in advance?",
		Answer: "True",
		Options: [
			"True",
			"False",
		]
	},

	{
		numb: 50,
		Question: "Amongst which of the following is / are true with reference to loops in Python?",
		Answer: "All of the mentioned above",
		Options: [
			"It allows for code reusability to be achieved.",
			"By utilizing loops, we avoid having to write the same code over and over again.",
			"We can traverse through the elements of data structures by utilizing looping.",
			"All of the mentioned above",
		]
	},

]