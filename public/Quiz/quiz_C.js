let questions= [
    {
        numb: 1,
        question: "Which of the following is not a valid C variable name   : ",
        answer: "int $main",
        options: [
            "int number",
            "float rate",
            "int variable_count",
            "int $main",
        ]
    },
    {
        numb: 2,
        question: "All keywords in C are in  :",
        answer: "LowerCase letters",
        options: [
            "LowerCase letters",
            "UpperCase letters",
            "CamelCase letters",
            "None of the mentioned",
        ]
    },
    {
        numb: 3,
        question: "Which of the following is true for variables names in c?",
        answer: "variables names cannot start with a digit",
        options: [
            "They can contain alphanumeric characters as well as special characters",
            "it is not an error to declare a variable to be one of the keywords(like goto,static)",
            "variables names cannot start with a digit",
            "Variables can be of any length",
        ]
    },
    {
        numb: 4,
        question: "Which is valid C expression ? ",
        answer: "int my_num=100000",
        options: [
            "int my_num=100,000",
            "int my_num=100000",
            "int my num=1000",
            "int $my_num=10000",
        ]

    },
    {
        numb: 5,
        question: "Which of the following cannot be a variable name in C ?",
        answer: "volatile",
        options: [
            "volatile",
            "true",
            "friend",
            "export",
        ]
    },
    {
        numb: 6,
        question: "What is the short int in C programming :",
        answer: "Short is the qualifier and int is the basic data type",
        options: [
            "The basic data type of C",
            "Qualifier",
            "Short is the qualifier and int is the basic data type",
            "All of the mentioned ",
        ]
    },
    {
        numb: 7,
        question: "Which of the following declaration is not supported in C  language ?",
        answer: "String str;",
        options: [
            "String str;",
            "char *str;",
            "float str=3e2;",
            "None of these",
        ]
    },
    {
        numb: 8,
        question: "What will be the output of the following expressions ?  (x=foo())!=1 considering foo() returns 2",
        answer: "2",
        options: [
            "2",
            "true",
            "1",
            "0",
        ]
    },
    {
        numb: 9,
        question: "What is the correct syntax to send a  3-dimensional arrays as a parameter ? (Assuming declaration int a[5][4][3]) ",
        answer: "func(a)",
        options: [
            "func(a)",
            "func(&a)",
            "func(*a)",
            "func(**a)",
        ]
    },
    {
        numb: 10,
        question: "Which of the applications of a multidimensional array?",
        answer: "All of the mentioned",
        options: [
            "Matrix-multiplication ",
            "Minimum Spanning Tree",
            "Finding connectivity between nodes",
            "All of the mentioned",
        ]
    },
    {
        numb: 11,
        question: "Which of the folowing is the correct syntax to declare a 3 dimensional array using pointers ?",
        answer: "char *a[][]",
        options: [
            "char *a[][]",
            "char **a[]",
            "char***a;",
            "all of the mentioned",
        ]
    },
    {
        numb: 12,
        question: "Which of the following comment is correct when a macro definition includes  arguments ?  ",
        answer: "The opening parenthesis should immediately follow  the macro name.",
        options: [
            "The opening parenthesis should immediately follow  the macro name.",
            "There should be at least one blank between the macro name and the opening parenthesis. ",
            "There should be only one blank between the macro name and the opening parenthesis. ",
            "All the above comments are correct.",
        ]
    },
    {
        numb: 13,
        question: "Why is a macro used in place of a function ?",
        answer: "It increases code size.",
        options: [
            "It reduce execution time. ",
            "It reduce code size.",
            "It increases execution time.",
            "It increases code size.",
        ]
    },
    {
        numb: 14,
        question: "A pointer is a memory address. Suppose the pointer variable has p address 1000,and that p is declared to have type int* , and an int is 4 bytes long. What address is represented by expression p+2 ?",
        answer: "1008",
        options: [
            "1002",
            "1004",
            "1006",
            "1008",
        ]
    },
    {
        numb: 15,
        question: "What is the 16-bit compiler allowable range foe integer constants ?",
        answer: "-32768 to 32767",
        options: [
            "-3.4e38 to 3.4e38",
            "-32767 to 32768",
            "-32668 to 32668",
            "-32768 to 32767",
        ]
    },
    {
        numb: 16,
        question: " How to declare a double-pointer in C?",
        answer: "int **val",
        options: [
            "int val",
            "int *val",
            "int **val",
            "int &val",
        ]
    },
    {
        numb: 17,
        question: "In c language ,the constant is defined -------------------?",
        answer: "Anywhere ,but starting on a new line.",
        options: [
            "Before main",
            "Anywhere ,but starting on a new line.",
            "After main",
            "None of the above",

        ]
    },
    {
        numb: 18,
        question: "How string represented in memory in C?",
        answer: "An array of characters",
        options: [
            "An array of characters",
            "Linked list of characters ",
            "The object of some class",
            "Some as other primitives data types",
        ]
    },
    {
        numb: 19,
        question: "What is the another name for .C file ",
        answer: "Distributable Code",
        options: [
            "Executable file ",
            "Source Code",
            "Distributable Code",
            "Macro Code",
        ]
    },
    {
        numb: 20,
        question: "What is keyword is used to define a C Macro",
        answer: "define",
        options: [
            "def",
            "definition",
            "define",
            "defy",
        ]
    },
    {
        numb: 21,
        question: "What is the C keywords is used to create global Constant ?",
        answer: "define",
        options: [
            "constant",
            "definition",
            "def",
            "define",
        ]
    },
    {
        numb: 22,
        question: "What is the output file generated after processing a .C file ?",
        answer: ".exe file",
        options: [
            ".h file",
            ".exe file",
            ".cp file",
            ".bak file",
        ]
    },
    {
        numb: 23,
        question: " How to separate a multiple macro in C language ?",
        answer: "Using \ operator",
        options: [
            
            "Using * operator",
            "Using % operator",
            "Using \ operator",
            "Using + operatorSSS",
        ]
    },
    {
        numb: 24,
        question: "What are the types of C Preprocessor Directives ?",
        answer: "All of the above",
        options: [
 
            "Macros",
            "Conditional Compilation",
            "File Inclusion ",
            "All of the above",
        ]
    },
    {
        numb: 25,
        question: "Which of the following is an exit loop ?",
        answer: "For loop",
        options: [
            "While loop ",
            "For loop",
            "do-while loop ",
            "None of the above ",
        ]
    },
    {
        numb: 26,
        question: "In which of the following languages is function overloading not possible ?",
        answer: "C",
        options: [
            "C++",
            "C",
            "Java",
            "Python",
        ]
    },
    {
        numb: 27,
        question: "Which data structure is used to handle recursion in C ?",
        answer: "Stack",
        options: [
            "Stack",
            "Queue",
            "Trees",
            "Deque",
        ]
    },
    {
        numb: 28,
        question: "Which of the following should be used to free memory from a pointer allocated using the -NEW- operator",
        answer: "delete",
        options: [
            "free()",
            "realloc()",
            "delete",
            "NOne of the above",
        ]
    },
    {
        numb: 29,
        question: "Which of the following will occur if we call the free() function on a NULL pointer ?",
        answer: "The program will execute normally",
        options: [
            "The program will execute normally",
            "Compilation Error",
            "Runtime Error",
            "undefined behavior",

        ]
    },
    {
        numb: 30,
        question: "How to find a length of array in C ?",
        answer: "sizeof(a)/sizeof(a[0])",
        options: [
            "sizeof(a)/sizeof(a[0])",
            "sizeof(a)",
            "sizeof(a)*sizeof(a[0])",
            "None of the above",
        ]
    },
    {
        numb: 31,
        question: "If addition had higher precendence than multiplication,then the value of the expression (1+2*3+4*5)",
        answer: "105",
        options: [
            "27",
            "105",
            "43",
            "67",
        ]
    },
    {
        numb: 32,
        question: "Directives are translated by ----------?",
        answer: "Pre-processor",
        options: [
            "Pre-processor",
            "Compiler",
            "Linker",
            "Editor",
        ]
    },
    {
        numb: 33,
        question: "How man y bytes does---int=D-- use ? ",
        answer: "2 or 4",
        options: [
            "1",
            "0",
            "10",
            "2 or 4",

        ]
    },
    {
        numb: 34,
        question: "To get the most accurate value we prefer the data type ?",
        answer: "double",
        options: [
            "double",
            "float",
            "int ",
            "long  int",
        ]
    },
    {
        numb: 35,
        question: "Which of the following true for binary tree ?",
        answer: "Each node has exactly zero or two children.",
        options: [
            "A node can have a single child also .",
            "It must have two child only.",
            "Each node has exactly zero or two children.",
            "All the leaves are at the same level.",
        ]
    },
    {
        numb: 36,
        question: "In c language ,if a function return type is not explicitly defined then it defaults to whats data type ?",
        answer: "int",
        options: [
            "void",
            "int",
            "double",
            "float",
        ]
    },
    {
        numb: 37,
        question: "A data of the file is stored in a  ",
        answer: "HARD DISK",
        options: [
            "RAM",
            "HARD DISK",
            "ROM",
            "None",
        ]
    },
    {
        numb: 38,
        question: "Select text file in which data is stored in ______________",
        answer: "ASCII Code",
        options: [
            "ASCII Code",
            "Binary Code",
            "Octal Code",
            "Text Code",

        ]
    },
    {
        numb: 39,
        question: "A mode which is used to open an existing file for both reading and writing ________?",
        answer: "R+",
        options: [
            "W",
            "W+",
            "R+",
            "A+",
        ]
    },
    {
        numb: 40,
        question: "The pictorial represention of a program is called____________________?",
        answer: "Flowchart",
        options: [
            "Algorithm",
            "Code",
            "Pseudocode",
            "Flowchart",
        ]
    },
    {
        numb: 41,
        question: "Which of the following is a type of subprogram - 1.Function   2. Subroutine ?",
        answer: "Both 1 and 2",
        options: [
            "only 1",
            "only 2",
            "Neither 1 or 2",
            "Both 1 and 2",

        ]

    },
    {
        numb: 42,
        question: "Which of the following option is not a valid keywords in C language ?",
        answer: "type",
        options: [
            "type",
            "auto",
            "break",
            "enum",
        ]
    },
    {
        numb: 43,
        question: "Which of the following is not an example of computer language ?",
        answer: "ALGORITHM",
        options: [
            "ALGORITHM",
            "FORTRAN",
            "PASCAL",
            "COBOL",
        ]
    },
    {
        numb: 44,
        question: "Assume that objects of type short ,float and long accupy 2 bytes ,4 bytes and 8 bytes, repectively .The memory requirement for variable t, ignoring alignment considerations is ",
        answer: "18 bytes",
        options: [
            "22 bytes ",
            "18 bytes",
            "14 bytes",
            "10 bytes",
        ]
    },
    {
        numb: 45,
        question: "Which of the folowing is NOT possible with any 2 operators in C ?",
        answer: "Same precedence,Different associativity",
        options: [
            "Different precedence,same associativity",
            "Different precedence,Different associativity",
            "Same precedence,Different associativity",
            "All of the mentioned",
        ]
    },
    {
        numb: 46,
        question: "Property which allows to produce different executable for different platforms in C is called ?",
        answer: "Conditional compilation",
        options: [
            "File inclusion",
            "Selective inclusion ",
            "Conditional compilation",
            "Recursive macros",

        ]
    },
    {
        numb: 47,
        question: "Which of following is not  accepted in C ?",
        answer: "static static int a;// a static varible prefixed with static",
        options: [
            "static a=10;// static as",
            "static int func(int );//parameter as static ",
            "static static int a;// a static varible prefixed with static",
            "All of the mentioned",
        ]
    },
    {
        numb: 48,
        question: "functions can return enumeration constants in C ? ",
        answer: "true",
        options: [
            "true",
            "false",
            "depends on the compiler",
            "depends on the standard ",
        ]
    },
    {
        numb: 49,
        question: "Which of the following typecasting is accepted by c language ?",
        answer: "Widening & Narrowing conversions",
        options: [
            "Widening conversions ",
            "Narrowing conersions ",
            "Widening & Narrowing conversions",
            "None of the mentioned",
        ]
    },
    {
        numb: 50,
        question: "Which keywords is used to prevent any changes in the variable within a C program ?  ",
        answer: "const",
        options: [
            "immutuble ",
            "mutable",
            "const",
            "volatile",
        ]
    }
]