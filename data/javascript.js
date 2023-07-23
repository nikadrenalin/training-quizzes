'use strict';

const questions = [
    {
        questionNumber: 1,
        question: `
        Given the user.js file with the following code:
        
        export default function sayHi() {}
        
        Choose the right dynamic import directives.`,
        option1: `import 'sayHi' from './user.js'`,
        option2: `import('./user.js').then(...)`,
        option3: `let { sayHi } = async import('./user.js')`,
        option4: `let { default as sayHi } = import('./user.js')`,
        answer: 2,
    },
    {
        questionNumber: 2,
        question: `
        Determine the output of the following code snippet:
        
        console.log (3 < 2 < 1)`,
        option1: `true`,
        option2: `false`,
        answer: 1,
    },
    {
        questionNumber: 3,
        question: `
        Determine the output of the following code snippet:
        
        console.log([1, 1] + [2, 2])`,
        option1: `33`,
        option2: `1,12,2`,
        option3: `1,1,2,2`,
        answer: 2,
    },
    {
        questionNumber: 4,
        question: `
        Determine the output of the following code snippet:
        
        let obj = {}, a = [1], b = [a];
        obj[a] = 3;
        obj[b] = 4;
        console.log(obj);`,
        option1: `{1: 3, '[1]': 4}`,
        option2: `{1: 3, '[object Object]': 4}`,
        option3: `{1: 4}`,
        answer: 3,
    },
    {
        questionNumber: 5,
        question: `
        Select what will be the output of execution of this code:
        
        [1, 4, 9, 16].filter(x => x % 2);`,
        option1: `[1, 9]`,
        option2: `[4, 16]`,
        answer: 2,
        explanation: `В данном случае условие x % 2 проверяет, является ли элемент x четным числом (т.е., остаток от деления на 2 равен 0). Если элемент удовлетворяет этому условию, то он включается в новый массив.

        Поэтому результатом выполнения данного кода будет новый массив [4, 16], так как только числа 4 и 16 являются четными в исходном массиве [1, 4, 9, 16]`
    },
    {
        questionNumber: 6,
        question: `
        Select what will be the output of execution of this code:

        const months = ['Jan', 'March', 'April', 'June'];
        console.log(months.splice(1, 0, 'Feb'));
        console.log(months);`,
        option1: `['Feb'] and ['Jan', 'Feb', 'March', April', 'June']`,
        option2: `['March'] and ['Jan', 'Feb', April', 'June']`,
        option3: `[ ] and ['Jan', 'Feb', 'March', April', 'June']`,
        answer: 3,
        explanation: `The splice() method is used to add, remove, or replace elements in an array. In this code, months.splice(1, 0, 'Feb') is called.

        The first argument 1 indicates the index at which the modification will be performed. In this case, it means inserting the new element at index 1.
        The second argument 0 indicates the number of elements to be removed. Since we are not removing any elements, it is set to 0.
        The third argument 'Feb' is the element to be inserted at the specified index.
        The splice() method returns an empty array [] when no elements are removed. In this case, since the second argument is 0, no elements are removed. That's why the first console.log(months.splice(1, 0, 'Feb')) outputs an empty array [].
        
        After the modification, the months array will be ['Jan', 'Feb', 'March', 'April', 'June']. So, the second console.log(months) outputs ['Jan', 'Feb', 'March', 'April', 'June'].`
    },
    {
        questionNumber: 7,
        question: `
        Select what will be the output of execution of this code:

        const arr = [1, 2, 3];
        arr.push(6);
        arr.shift();
        arr.unshift(8);
        arr.pop();
        console.log(arr);`,
        option1: `[1, 2, 3]`,
        option2: `[8, 2, 3]`,
        option3: `[6, 1, 2, 3, 8]`,
        answer: 2,
    },
    {
        questionNumber: 8,
        question: `
        Given the user.js file with the following code:
        
        export default class User {}
        export function sayHi() {}
        
        Choose the right dynamic import directives.`,
        option1: `import all from './user.js'`,
        option2: `import * as all from './user.js'`,
        option3: `import { default as User, sayHi } from './user.js'`,
        option4: `import { User }, sayHi from './user.js'`,
        option5: `import { User, sayHi } from './user.js'`,
        option6: `A, B, C are correct.`,
        option7: `B, C, D are correct.`,
        answer: 6,
    },
    {
        questionNumber: 9,
        question: `
        What is the output of the following code?
        
        const object1 = {};
        Object.preventExtensions(object1);
        
        const object2 = object1;
        object2.property = 5;
        
        console.log(object1.property);
        `,
        option1: `{ property: 5 }`,
        option2: `5`,
        option3: `{}`,
        option4: `Throws an error`,
        answer: 3,
    },
    {
        questionNumber: 10,
        question: `
        Determine the output of the following code snippet:
        
        function getRandom() {
            return (() => Math.random())();
        }

        console.log(typeof getRandom());`,
        option1: `object`,
        option2: `number`,
        option3: `function`,
        option4: `undefined`,
        answer: 2,
    },
    {
        questionNumber: 11,
        question: `
        Determine the output of the following code snippet:
        
        function wrappedFunc() { console.log(hello); }
        
        function createClosure() {
            var hello = 'Hello';
            return wrappedFunc;
        }

        createClosure()();`,
        option1: `hello`,
        option2: `undefined`,
        option3: `ReferenceError: hello is not defined`,
        answer: 3,
    },
    {
        questionNumber: 12,
        question: `
        const sum = num1 => (num2, num3 = 0) => num1 + num2 + num3;

        What is the only correct way to receive the result 10?`,
        option1: `sum()(5, 5)`,
        option2: `sum(5)(5)`,
        option3: `sum(10)()`,
        option4: `sum()(10)`,
        answer: 2,
    },
    {
        questionNumber: 13,
        question: `
        What does this code print to console?

        class Person {
          constructor(name) {
            this.name = name;
          }
        }

        console.log(typeof Person);`,
        option1: `object`,
        option2: `class`,
        option3: `function`,
        option4: `Person`,
        answer: 3,
    },
    {
        questionNumber: 14,
        question: `
        What does this code print to console?
        
        class Dog {
            constructor(name) {
                this.name = name;
            }
        }
        
        Dog.prototype.bark = function() {
            console.log(\`Woof I am \${this.name}\`);
        }
        
        const pet = new Dog('Sparky')
        
        pet.bark();
        
        delete Dog.prototype.bark
        
        pet.bark();`,
        option1: `'Woof I am Sparky' and 'Woof I am Sparky'`,
        option2: `Type Error and Type Error`,
        option3: `'Woof I am Sparky' and 'Type Error'`,
        option4: `'Woof I am Sparky' and undefined`,
        answer: 3,
    },
    {
        questionNumber: 15,
        question: `
        Which constructor successfully extends given class Dog?

        class Dog {
          constructor(name) {
            this.name = name;
          }
        };`,
        option1: `class Labrador extends Dog {
            constructor(name, size) {
                this.size = size;
            }
        }`,
        option2: `class Labrador extends Dog {
            constructor(name, size) {
                super(name);
                this.size = size;
            }
        }`,
        option3: `class Labrador extends Dog {
            constructor(size) {
                super(name);
                this.size = size;
            }
        }`,
        option4: `class Labrador extends Dog {
            constructor(name, size) {
                this.name = name;
                this.size = size;
            }
        }`,
        answer: 2,
    },
    {
        questionNumber: 16,
        question: `
        What does this code print to console?
        
        class Person {
            constructor() {
                this.name = 'Jane';
            }
        }
        
        Person = class AnotherPerson {
            constructor() {
                this.name = 'Kate';
            }
        }
        
        const member = new Person();
        console.log(member.name);`,
        option1: `Jane`,
        option2: `Kate`,
        option3: `Error: cannot redeclare Person`,
        option4: `SyntaxError`,
        answer: 2,
    },
    {
        questionNumber: 17,
        question: `
        What are the properties of error object that is passed to catch block?`,
        option1: `'name' and 'stacktrace'`,
        option2: `'title' and 'message'`,
        option3: `'title' and 'stack'`,
        option4: `'name' and 'message'`,
        answer: 4,
    },
    {
        questionNumber: 18,
        question: `
        What does this code print to console?
        
        (() => {
            let x, y;

            try {
                throw new Error();
            } catch (x) {
                (x = 1), (y = 2);
                console.log(x);
            }

            console.log(x);
            console.log(y);
        })();`,
        option1: `1 undefined 2`,
        option2: `undefined undefined undefined`,
        option3: `1 1 2`,
        option4: `1 undefined undefined`,
        answer: 1,
    },
    {
        questionNumber: 19,
        question: `
        What does this code print to console?
        
        const myPromise = Promise.reject('Woah some cool data');
        
        (async () => {
            try {
                console.log(await myPromise);
            } catch {
                throw new Error("Oops didn't work");
            } finally {
                console.log('Oh finally!');
            }
        })();`,
        option1: `'Oh finally!' and 'Oops didn't work'`,
        option2: `'Oh finally!' and 'Woah some cool data'`,
        option3: `'Woah some cool data' and 'Oh finally!'`,
        option4: `SyntaxError: catch called without identifier`,
        answer: 1,
    },
    {
        questionNumber: 20,
        question: `
        What does this code print to console?

        console.log(Promise.resolve(5));`,
        option1: `5`,
        option2: `Promise {<pending>: 5}`,
        option3: `Promise {<fulfilled>: 5}`,
        option4: `Error`,
        answer: 3,
        explanation: `
        Когда вызывается Promise.resolve(5), создается новый промис, который немедленно разрешается со значением 5. Затем, используя console.log(), выводится этот промис в консоль. В результате выводится строка "Promise {<fulfilled>: 5}", которая указывает на разрешенный промис со значением 5.
        `
    },
    {
        questionNumber: 21,
        question: `
        What does this code print to console?
        
        const firstPromise = new Promise((res, rej) => {
            setTimeout(res, 500, 'one');
        });

        const secondPromise = new Promise((res, rej) => {
            setTimeout(res, 100, 'two');
        });
        
        Promise.race([firstPromise, secondPromise]).then(res => console.log(res));`,
        option1: `one`,
        option2: `two`,
        option3: `one two`,
        option4: `two one`,
        answer: 2,
    },
    {
        questionNumber: 22,
        question: `
        What does this code print to console?
        
        const myPromise = Promise.resolve('Woah some cool data');
        
        (async () => {
            try {
                console.log(await myPromise);
            } catch {
                throw new Error("Oops didn't work");
            } finally {
                console.log('Oh finally!');
            }
        })();`,
        option1: `Woah some cool data`,
        option2: `Oh finally!`,
        option3: `'Woah some cool data' and 'Oh finally!'`,
        option4: `'Oops didn't work' 'Oh finally!'`,
        answer: 3,
    },
    {
        questionNumber: 23,
        question: `
        What is the correct code to replace the last line with an async/await function?
        
        const getId = new Promise((resolve, reject) => {
            setTimeout(() => resolve(15), 1500);
        });
        
        const getBook = bookId => new Promise((resolve, reject) => {
            setTimeout(() => resolve('\${bookId}:Javascript Algorithms'), 1500);
        });
        
        getId.then(id => getBook(id)).then(data => data);`,
        option1: `async function getBookInfo() {
            const id = await getId;
            const result = await getBook(id);
        }
        
        getBookInfo();`,
        option2: `async function getBookInfo() {
            const id = await getId;
            const result = await getBook(id);
        }
        
        await getBookInfo();`,
        option3: `await function getBookInfo() {
            const id = await getId;
            const result = await getBook(id);
        }
        
        async getBookInfo();`,
        option4: `async function getBookInfo() {
            const id = getId;
            const result = getBook(id);
        }
        
        await getBookInfo();`,
        answer: 1,
    },
    {
        questionNumber: 24,
        question: `
        What does this code print to console?
        
        async function getData() {
            return await Promise.resolve('I made it!');
        }
        
        const data = getData();
        console.log(data);`,
        option1: `I made it!`,
        option2: `Promise {<resolved>: "I made it!"}`,
        option3: `Promise {<pending>}`,
        option4: `undefined`,
        answer: 3,
    },
    {
        questionNumber: 25,
        question: `
        Which of the following code snippets transforms an array to [2,3]?
        
        let nums = [1, 2, 3];`,
        option1: `nums.pop(0)`,
        option2: `nums.slice(0,1)`,
        option3: `nums.unshift()`,
        option4: `nums.shift()`,
        option5: `delete nums[0]`,
        answer: 4,
    },
    {
        questionNumber: 26,
        question: `
        How to convert an array into the string "1, 3, 5"?
        
        let arr = [1, 3, 5];`,
        option1: `There is no correct answer.`,
        option2: `arr.concat()`,
        option3: `arr.join()`,
        option4: `arr.toString()`,
        option5: `B and D are correct`,
        option6: `C and D are correct`,
        answer: 6,
    },
    {
        questionNumber: 27,
        question: `
        How to handle and error in "fetch"?`,
        option1: `fetch("http://goo.gl").error( ... )`,
        option2: `try { fetch("http://goo.gl") } catch (e) {  }`,
        option3: `fetch("http://goo.gl").catch( ... )`,
        option4: `No way to handle an error in fetch`,
        option5: `B and C are correct.`,
        answer: 3,
    },
    {
        questionNumber: 28,
        question: `
        How to check for a substring "java" in a string?
        
        let lang = 'javascript';`,
        option1: `if (lang.find('java')) { ... }`,
        option2: `if (lang.contains('java')) { ... }`,
        option3: `There is no correct answer`,
        option4: `if (lang.includes('java')) { ... }`,
        option5: `B and D are correct`,
        answer: 4,
    },
    {
        questionNumber: 29,
        question: `
        How to check for a substring "java" in a string?
        
        let lang = 'javascript';`,
        option1: `if (lang.startsWith('java')) { ... }`,
        option2: `if (lang.indexOf('java')) { ... }`,
        option3: `There is no correct answer`,
        option4: `if (lang.begins('java')) { ... }`,
        option5: `A and B are correct`,
        answer: 1,
    },
    {
        questionNumber: 30,
        question: `
        How to get the first "form" element in a document?`,
        option1: `windows.getForms().firstChild`,
        option2: `There is no correct answer`,
        option3: `document.getElementsByTagName("form").at(0)`,
        option4: `document.forms[0]`,
        option5: `document.getForms(0)`,
        answer: 4,
    },
    {
        questionNumber: 31,
        question: `
        What does the following code output to the console?
        
        function f() {
            console.log(arguments.join());
        }
        
        f(10, 20, 30);`,
        option1: `"102030"`,
        option2: `It throws an error`,
        option3: `[10, 20, 30]`,
        option4: `"10, 20, 30"`,
        option5: `"10,20,30"`,
        answer: 2,
    },
    {
        questionNumber: 32,
        question: `
        How to check whether an object "admin" belongs to a class "User"?`,
        option1: `admin instanceof User`,
        option2: `admin.prototype == User`,
        option3: `admin.belongsTo(User)`,
        option4: `admin.___proto___ == User`,
        option5: `User.isPrototypeOf(admin)`, 
        option6: `User.prototype.isPrototypeOf(admin)`,
        option7: `A and F are correct`,
        answer: 7,
    },
    {
        questionNumber: 33,
        question: `
        What does the following code output to the console?
        
        let a = 10;
        
        function func(a) {
            console.log(a); // #1
            a = 20;
        }
        
        func(a);
        console.log(a); // #2`,
        option1: `It throws an error`,
        option2: `10, 20`,
        option3: `undefined, 20`,
        option4: `10, 10`,
        option5: `undefined, 10`,
        answer: 4,
    },
    {
        questionNumber: 34,
        question: `
        What does the following code output to the console?
        
        let num = 10;
        
        function getNum() {
            console.log(num); // #1

            if (true) {
                let num = 20;
            }

            console.log(num); // #2
        }
        
        getNum();`,
        option1: `It throws an error`,
        option2: `20, 10`,
        option3: `10, 10`,
        option4: `20, 20`,
        option5: `undefined, 20`,
        option6: `undefined, 10`,
        option7: `10, 20`,
        answer: 3,
    },
    {
        questionNumber: 35,
        question: `
        Which expression will result in number 2?`,
        option1: `"-4" / "-2"`,
        option2: `"2" - false`,
        option3: `2 + undefined`,
        option4: `2 + NaN`,
        option5: `4 + "-2"`,
        option6: `A, B, C and D are correct`,
        option7: `A and B are correct`,
        answer: 7,
    },
    {
        questionNumber: 36,
        question: `
        What are the correct ways to declare a function?`,
        option1: `let func = function { ... }`,
        option2: `let func = () => { ... }`,
        option3: `let func() => { ... }`,
        option4: `let func => { ... }`,
        option5: `function func { ... }`,
        option6: `A, B, D, E are correct`,
        option7: `A, B, E are correct`,
        answer: 2,
    },
    {
        questionNumber: 37,
        question: `
        Which of the following statements are TRUE?`,
        option1: `DOMContentLoaded event triggers when all style sheets and images are loaded`,
        option2: `Synchronous scripts are loaded sequentially one after another in the order in which the appear in the document`,
        option3: `In window "unload" event handler we still have the option to ask wheter the user really wants to leave.`,
        option4: `Window "load" event triggers when all scripts are loaded (even with defer/async attributes)`,
        option5: `There is no correct answer`,
        option6: `B, C and D are correct`,
        answer: 6,
    },
    {
        questionNumber: 38,
        question: `
        What are the correct ways to get a property "name"?
        
        const person = {
            name: "John",
            age:30
        };`,
        option1: `const name = person->name`,
        option2: `const name = person('name')`,
        option3: `const name = person.getValue(name)`,
        option4: `const name = person['name']`,
        option5: `const { name } = person`,
        option6: `D and E are correct`,
        option7: `There is no correct answer`,
        answer: 6,
    },
    {
        questionNumber: 39,
        question: `
        What does the following code output to the console?
        
        let color = 'red';
        
        let obj = {
            color: 'blue',
            prop: {
                color: 'green',
                printColor() {
                    console.log(this ? this.color : 'yellow');
                }
            }
        };
        
        obj.prop.printColor();`,
        option1: `red`,
        option2: `green`,
        option3: `blue`,
        option4: `yellow`,
        option5: `undefined`,
        answer: 2,
    },
    {
        questionNumber: 40,
        question: `
        What are the different data types used in JavaScript?`,
        option1: `string, number, BigInt, Boolean, null, undefined, object, symbol.`,
        option2: `string, number, BigInt, Boolean, null, undefined`,
        option3: `string, number, Boolean, null, undefined, object, symbol.`,
        option4: `There is no correct answer`,
        answer: 1,
    },
    {
        questionNumber: 41,
        question: `
        Which collections of data are ordered by a key?`,
        option1: `Map`,
        option2: `Array`,
        option3: `Set Objects`,
        option4: `Object`,
        option5: `A and C are correct`,
        answer: 1,
    },
    {
        questionNumber: 42,
        question: `
        A developer wants to use a module called DatePrettyPrint.
        
        This module exports one default function called printDate().
        
        How can a developer import and use the printDate() function?`,
        option1: `import printDate() from '/path/DatePrettyPrint.js'; 
        printDate();`,
        option2: `import printDate from '/path/DatePrettyPrint.js'; 
        printDate();`,
        option3: `import DatePrettyPrint from '/path/DatePrettyPrint.js'; 
        DatePrettyPrint.printDate();`,
        option4: `import printDate from '/path/DatePrettyPrint.js'; 
        DatePrettyPrint.printDate();`,
        answer: 2,
    },
    {
        questionNumber: 43,
        question: `
        How to delete the property from an object?`,
        option1: `obj.name.pop()`,
        option2: `obj.name.shift()`,
        option3: `delete obj.name`,
        answer: 3,
    },
    {
        questionNumber: 44,
        question: `
        What does this code print to console?
        
        console.log(typeof null);`,
        option1: `"null"`,
        option2: `"undefined"`,
        option3: `"object"`,
        option4: `There is no answer correct`,
        answer: 3,
    },
    {
        questionNumber: 45,
        question: `
        What does this code print to console?
        
        console.log(typeof (typeof 1));`,
        option1: `"object"`,
        option2: `"number"`,
        option3: `There is no answer correct`,
        option4: `"string"`,
        answer: 4,
    },
    {
        questionNumber: 46,
        question: `
        What does this code print to console?
        
        console.log(typeof !!(-1));`,
        option1: `"string"`,
        option2: `"boolean"`,
        option3: `There is no answer correct`,
        option4: `"number"`,
        answer: 2,
    },
    {
        questionNumber: 47,
        question: `
        What does this code print to console?
        
        console.log(100 + null + 20 + "world");`,
        option1: `100NaN20NaN`,
        option2: `NaN`,
        option3: `Type Error`,
        option4: `120world`,
        answer: 4,
    },
    {
        questionNumber: 48,
        question: `
        What does this code print to console?
        
        console.log(100 + 200 + undefined + "world");`,
        option1: `300undefinedworld`,
        option2: `NaN`,
        option3: `NaNworld`,
        option4: `300world`,
        answer: 3,
    },
    {
        questionNumber: 49,
        question: `
        What does this code print to console?
        
        var x = {};
        console.log(x + "world");`,
        option1: `world`,
        option2: `0world`,
        option3: `NaNworld`,
        option4: `[object Object]world`,
        answer: 4,
    },
    {
        questionNumber: 50,
        question: `
        What does this code print to console?
        
        console.log("hello" > "Hello");`,
        option1: `true`,
        option2: `false`,
        answer: 1,
        explanation: `
        При сравнении строк в JavaScript используется лексикографическое сравнение, где каждый символ в строке имеет свое числовое представление (код символа). При сравнении строк символы сравниваются по их числовым значениям.

В данном случае, символы "h" и "H" имеют разные числовые значения. Код символа "h" (строчная буква "h") больше кода символа "H" (заглавная буква "H"). Поэтому строка "hello" считается больше строки "Hello" при лексикографическом сравнении. В результате console.log("hello" > "Hello") возвращает true.`
    },
    {
        questionNumber: 51,
        question: `
        What does this code print to console?
        
        let x = 10;
        let x = 20;
        
        console.log(x);`,
        option1: `10`,
        option2: `SyntaxError`,
        option3: `TypeError`, 
        option4: `ReferenceError`,
        answer: 2,
    },
    {
        questionNumber: 52,
        question: `
        What does this code print to console?
        
        const x = 10;
        x = 20;
        
        console.log(x);`,
        option1: `10`,
        option2: `SyntaxError`,
        option3: `TypeError`,
        option4: `ReferenceError`,
        answer: 3,
    },
    {
        questionNumber: 53,
        question: `
        How to convert "Hello Everyone" to ["Hello", "Everyone"]?`,
        option1: `"Hello Everyone".split('');`,
        option2: `"Hello Everyone".replace('Hello');`,
        option3: `"Hello Everyone".split(' ');`,
        option4: `"Hello Everyone".join('');`,
        answer: 3,
    },
    {
        questionNumber: 54,
        question: `
        How to define an array in Javascript?`,
        option1: `var arr = { elem1, elem2, ...elemN }`,
        option2: `var arr = new Array();`,
        option3: `var arr = new Array(Number length);`,
        option4: `var arr = new Array(elem1, elem2, ...elemN);`,
        option5: `B, C, and D are correct`,
        answer: 5,
    },
    {
        questionNumber: 55,
        question: `
        What does this code print to console?
        
        let oldCar = {
            name: 'Toyota',
            year: 2017
        }

        for (let key of oldCar) {
            console.log(key);
        }`,
        option1: `TypeError`,
        option2: `0 
        1`,
        option3: `{ name: 'Toyota', year: 2017 }`,
        option4: `Toyota 
        2017`,
        answer: 1,
    },
    {
        questionNumber: 56,
        question: `
        What does this code print to console?
        
        console.log(typeof NaN);`,
        option1: `NaN`,
        option2: `number`,
        option3: `object`,
        option4: `undefined`,
        answer: 2,
    },
    {
        questionNumber: 57,
        question: `
        let btn = document.querySelector('#btn');
        let body = document.querySelector('#body');
        
        body.addEventListener('click', function(event) {
            console.log('currentTarget ', event.currentTarget);
            console.log('target ', event.target);
        });
        
        What does this code print to console if the button is clicked?`,
        option1: `currentTarget is the body element
        target is the button element`,
        option2: `currentTarget is the button element
        target is the body element`,
        answer: 1,
    },
    {
        questionNumber: 58,
        question: `
        const myFunction = arr => {
            return arr.reduce((result, current) => {
                return result + current;
            }, 10);
        }
        
        What is the output of this function when called with an empty array?`,
        option1: `10`,
        option2: `NaN`,
        option3: `0`,
        option4: `Throws an error`,
        answer: 1,
    },
    {
        questionNumber: 59,
        question: `
        function Animal(size, type) {
            this.size = size || 'small';
            this.type = type || 'Animal';
            this.canTalk = false;
        }
        
        let Pet = function(size, type, name, owner) {
            Animal.call(this, size, type);
            this.name = name;
            this.owner = owner;
        }
        
        Pet.prototype = Object.create(Animal.prototype);
        let pet1 = new Pet();
        
        Given the code above, which properties are set for pet1?`,
        option1: `owner`,
        option2: `name`,
        option3: `type`,
        option4: `size`,
        option5: `canTalk`,
        option6: `C, D and E are true`,
        option7: `All properties are set`,
        answer: 6,
    },
    {
        questionNumber: 60,
        question: `
        Which options are Node.js modules?`,
        option1: `iostream`,
        option2: `worker`,
        option3: `http`,
        option4: `exception`,
        option5: `B and C are correct`,
        option6: `There is no correct answer`,
        answer: 5,
    },
    {
        questionNumber: 61,
        question: `
        const cat = {
            firstName: 'Fancy',
            lastName: 'Whiskers',
            get fullName() {
                return this.firstName + ' ' + this.lastName;
            }
        }
        
        How can a developer access the fullName property for cat?`,
        option1: `cat.function.fullName()`,
        option2: `cat.fullName`,
        option3: `cat.get.fullName`,
        option4: `cat.fullName()`,
        answer: 2,
    },
    {
        questionNumber: 62,
        question: `
        <html lang="en">
            <div class="outerDiv">
                <button class="myButton">Click me!</button>
            </div>
            <script>
                function displayInnerMessage(ev) {
                    console.log('Inner Message');
                }

                function displayOuterMessage(ev) {
                    console.log('Outer Message');
                }

                window.onload = (event) => {
                    document.querySelector('.outerDiv')
                    .addEventListener('click', displayOuterMessage, true);

                    document.querySelector('.myButton')
                    .addEventListener('click', displayInnerMessage, true);
                }
            </script>
        </html>

        What will the console show when the button is clicked?`,
        option1: `Outer Message`,
        option2: `Inner Message`,
        option3: `Outer Message
        Inner Message`,
        option4: `Inner Message
        Outer Message`,
        answer: 3,
    },
    {
        questionNumber: 63,
        question: `
        A developer needs to test this function:
        
        const sum3 = (arr) => {
            if (!arr.length) return 0;
            if (arr.length === 1) return arr[0];
            if (arr.length === 2) return arr[0] + arr[1];
            return arr[0] + arr[1] + arr[2]; 
        }
        
        Which assert statements are valid tests for this function?`,
        option1: `console.assert(sum3([0]) === 0)`,
        option2: `console.assert(sum3(['hello', 2, 4, 4]) === NaN)`,
        option3: `console.assert(sum3([1, '2']) === 12)`,
        option4: `console.assert(sum3([-3, 2]) === -1)`,
        option5: `All above is correct`,
        option6: `A and D are true`,
        option7: `A, B and D are true`,
        answer: 6,
    },
    {
        questionNumber: 64,
        question: `
        At Universal Containers, every team has its own way of copying JavaScript objects. 
        
        The code snippet show as implementation from one team:
        
        function Person() {
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.name = () => {
                console.log('Hello \${this.firstName} \${this.lastName}');
            }
        }
        
        const john = new Person();
        const dan = JSON.parse(JSON.stringify(john));
        dan.firstName = 'Dan';
        dan.name();
        
        What is the output of the code execution?`,
        option1: `Hello John Doe`,
        option2: `TypeError: dan.name is not a function`,
        option3: `TypeError: Assignment to constant variable`,
        option4: `Hello Dan Doe`,
        answer: 2,
        explanation: `
        Этот подход копирования объекта с использованием JSON.stringify() и JSON.parse() создает новый объект, но он не сохраняет методы объекта. В результате, у объекта dan будет только два свойства`
    },
    {
        questionNumber: 65,
        question: `
        01 function GameConsole(name) {
        02     this.name = name;
        03 }
        04
        05 GameConsole.prototype.load = function(gamename) {
        06     console.log(\`'\${this.name} is loading a game: \${gamename}...\`);
        07 }
        08 
        09 function Console16bit(name) {
        10     GameConsole.call(this, name);
        11 }
        12 
        13 Console16bit.prototype = Object.create(GameConsole.prototype);
        14 
        15 // Insert code here
        16   console.log(\`\${this.name} is loading a cartridge game: \${gamename}...\`);
        17 }
        18
        19 const console16bit = new Console16bit('SNEGeneziz');
        20 console16bit.load('Super Monic 3x Force');
        
        What should a developer insert at line 15 to output the following message using the load method?
        
        > SNEGeneziz is loading a cartridge game: Super Monic 3x Force...`,
        option1: `Console16bit = Object.create(GameConsole.prototype).load = function (gamename) {`,
        option2: `Console16bit.prototype.load(gamename) = function() {`,
        option3: `Console16bit.prototype.load = function(gamename) {`,
        option4: `Console16bit.prototype.load(gamename) {`,
        answer: 3,
    },
    {
        questionNumber: 66,
        question: `
        A developer creates a generic function to log custom messages in the console. 
        
        To do this, the function below is implemented.
        
        01 function logStatus(status) {
        02    console./*Answer goes here*/('Item status is: %s', status);
        03 }
        
        Which console logging methods allow the use of string substitution in the line 02?`,
        option1: `message`,
        option2: `error`,
        option3: `info`,
        option4: `log`,
        option5: `assert`,
        option6: `B, C and D are correct`,
        option7: `D and E are correct`,
        answer: 6,
    },
    {
        questionNumber: 67,
        question: `
        myArray, can have one level, two levels, or more levels.
        
        Which statement flattens myArray when it can be arbitrarily nested?`,
        option1: `myArray.flat(Infinity)`,
        option2: `myArray.join('').split(',');`,
        option3: `[].concat(...myArray);`,
        option4: `myArray.reduce((prev, curr) => prev.concat(curr), [])`,
        answer: 1,
    },
    {
        questionNumber: 68,
        question: `
        Refer to the HTML below:
        
        <p>
            The current status of an Order: <span id='status'>In Progress</span>
        </p>
        
        Which JavaScript statement changes the text 'In Progress' to 'Completed'?`,
        option1: `document.getElementById('status').innerHTML = 'Completed';`,
        option2: `document.getElementById('.status').innerHTML = 'Completed';`,
        option3: `document.getElementById('#status').innerHTML = 'Completed';`,
        option4: `document.getElementById('status').Value = 'Completed';`,
        answer: 1,
    },
    {
        questionNumber: 69,
        question: `
        Which actions can be done using the JavaScript browser console?`,
        option1: `View and change security cookies`,
        option2: `Display a report showing the performance of a page`,
        option3: `View and change the DOM of the page`,
        option4: `Run code that is not related to the page`,
        option5: `View, change, and debug the JavaScript code of the page`,
        option6: `B, C, E are correct`,
        option7: `There is no correct answer`,
        answer: 6,
    },
    {
        questionNumber: 70,
        question: `
        function Vehicle(name, price) {
            this.name = name;
            this.price = price;
        }
        
        Vehicle.prototype.priceInfo = function() {
            return 'Cost of the \${this.name} is \${this.price}$';
        }
        
        var ford = new Vehicle('For Fiesta', '20,000');
        
        Given the requirement to refactor the code above to JavaScript class format. 
        
        Which class definition is correct?`,
        option1: `class Vehicle {
            constructor(name, price) {
                this.name = name;
                this.price = price;
            }

            priceInfo() {
                return 'Cost of the \${this.name} is \${this.price}$';
            }
        }`,
        option2: `class Vehicle {
            constructor(name, price) {
                name = name;
                price = price;
            }

            priceInfo() {
                return 'Cost of the \${this.name} is \${this.price}$';
            }
        }`,
        option3: `class Vehicle {
            vehicle(name, price) {
                this.name = name;
                this.price = price;
            }

            priceInfo() {
                return 'Cost of the \${this.name} is \${this.price}$';
            }
        }`,
        option4: `class Vehicle {
            constructor() {
                this.name = name;
                this.price = price;
            }

            priceInfo() {
                return 'Cost of the \${this.name} is \${this.price}$';
            }
        }`,
        answer: 1,
    },
    {
        questionNumber: 71,
        question: `
        01 x = 3.14;
        02 
        03 function myFunction() {
        04      'use strict';
        05      y = x;            
        06 }
        07
        08 z = x;
        09 myFunction();
        
        Considering the implications of the 'use strict' on line 04.
        
        Which statements describe the execution of the code?`,
        option1: `'use strict' has an effect only on line 05.`,
        option2: `'use strict' is hoisted, so it has an effect on all lines.`,
        option3: `z is equal to 3.14`,
        option4: `Line 05 throws an error`,
        option5: `'use strict' has an effect between line 04 and the end of the file`,
        option6: `There is no correct answer`,
        option7: `A, C and D are correct`,
        option8: `C and D are correct`,
        answer: 8,
    },
    {
        questionNumber: 72,
        question: `
        let o = {
            get js() {
                let city1 = String('St.Louis');
                let city2 = String('New York');

                return {
                    firstCity: city1.toLowerCase(),
                    secondCity: city2.toLowerCase(),
                }
            }
        }
        
        What value can a developer expect when referencing o.js.secondCity?`,
        option1: `new york`,
        option2: `New York`,
        option3: `undefined`,
        option4: `An error`,
        answer: 1,
    },
    {
        questionNumber: 73,
        question: `
        const delay = async delay => {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, delay);
            });
        };
        
        const callDelay = async() => {
            const yup = await delay(1000);
            console.log(1);
        };
        
        console.log(2);
        callDelay();
        console.log(3);
        
        What is logged to the console?`,
        option1: `2
        1
        3
        Resolve promise`,
        option2: `2
        3
        Resolve promise
        1`,
        option3: `2
        1
        Resolve promise
        3`,
        option4: `2
        Resolve promise
        1
        3`,
        answer: 2,
        explanation: `
        console.log(2) logs the number 2 to the console.
callDelay() is called, which is an asynchronous function that logs the number 1 to the console after a delay of 1000 milliseconds.
console.log(3) logs the number 3 to the console.
Therefore, the output is 2, 3, and then 1.`
    },
    {
        questionNumber: 74,
        question: `
        import {foo,bar} from '/path/Utils.js';
        foo();
        bar();
        
        Which implementations of Utils.js export foo and bar such that the code above runs without error?`,
        option1: `const foo = () => { return 'foo'; }
        const bar = () => { return 'bar'; }
        export default foo, bar;`,
        option2: `const foo = () => { return 'foo'; }
        const bar = () => { return 'bar'; }
        export { foo, bar };`,
        option3: `//FooUtils.js and BarUtils.js exist
        import {foo} from '/path/FooUtils.js';
        import {bar} from '/path/BarUtils.js';
        export {foo, bar}`,
        option4: `export default class {
            foo() { return 'foo'; }
            bar() { return 'bar'; }
        }`,
        answer: 2,
    },
    {
        questionNumber: 75,
        question: `
        01 let total = 10;
        02 const interval = setInterval(() => {
        03    total++;
        04    clearInterval(interval);
        05    total++;
        06 }, 0);
        07 total++
        08 console.log(total);
        
        Considering that JavaScript is single-threaded.
        
        What is the output of the line 08 after the code executes?`,
        option1: `12`,
        option2: `10`,
        option3: `13`,
        option4: `11`,
        answer: 4,
    },
    {
        questionNumber: 76,
        question: `
        A class was written to represent items for purchase in an online store, 
        and a second class representing items that are on sale at a discounted price.
        
        The constructor sets the name to the first value passed in. 
        
        The pseudocode is bellow:
        
        class Item {
            constructor(name, price) {
                ... // Constructor Implementation
            }
        }
        
        class SaleItem extends Item {
            constructor(name, price, discount) {
                ... // Constructor Implementation
            }
        }
        
        There is a new requirement for a developer to implement a description method 
        that will return a brief description for Item and SaleItem.
        
        01 let regItem = new Item('Scarf', 55);
        02 let saleItem = new SaleItem('Shirt', 80, .1);
        03
        04 Item.prototype.description = function() { return 'This is a ' + this.name; }
        05
        06 console.log(regItem.description());
        07 console.log(saleItem.description());
        08
        09 SaleItem.prototype.description = function() { 
        10    return 'This is a discounted ' + this.name; 
        11 }
        12
        13 console.log(regItem.description());
        14 console.log(saleItem.description());
        
        What is the output when executing the code above?`,
        option1: `This is a Scarf
        This is a Shirt
        This is a Scarf
        This is a discounted Shirt`,
        option2: `This is a Scarf
        Uncaught TypeError: saleItem.description is not a function
        This is a Shirt
        This is a discounted Shirt`,
        option3: `This is a Scarf
        This is a Shirt
        This is a discounted Scarf
        This is a discounted Shirt`,
        option4: `This is a Scarf
        Uncaught TypeError: saleItem.description is not a function
        This is a Scarf
        This is a discounted Shirt`,
        answer: 1,
    },
    {
        questionNumber: 77,
        question: `
        01 let sayHello = () => {
        02  console.log('Hello, World!');
        03 };
        
        Which code executes sayHello once, two minutes from now?`,
        option1: `setInterval(sayHello, 120000)`,
        option2: `delay(sayHello, 120000)`,
        option3: `setTimeout(sayHello, 120000)`,
        option4: `setTimeout(sayHello(), 120000)`,
        answer: 3,
    },
    {
        questionNumber: 78,
        question: `
        Which statement accurately describes the behavior of the async/await keywords`,
        option1: `The associated function can only be called via asynchronous methods`,
        option2: `The associated class contains some asynchronous functions`,
        option3: `The associated function sometimes returns a promise`,
        option4: `The associated function will always return a promise`,
        answer: 4,
    },
    {
        questionNumber: 79,
        question: `
        Which statements are true about promises?`,
        option1: `A settled promise can become resolved`,
        option2: `The executor of a new Promise runs automatically`,
        option3: `A fulfilled or rejected promise will not change states`,
        option4: `A promise has a .then() method`,
        option5: `A pending promise can become fulfilled, settled, or rejected`,
        option6: `All the above are correct`,
        option7: `C, D and E are correct`,
        answer: 7,
    },
    {
        questionNumber: 80,
        question: `
        Which JavaScript methods can be used to serialize an object into a string and deserialize a JSON string into an object respectively?`,
        option1: `JSON.stringify and JSON.parse`,
        option2: `JSON.parse and JSON.deserialize`,
        option3: `JSON.serialize and JSON.deserialize`,
        option4: `JSON.encode and JSON.decode`,
        answer: 1,
    },
    {
        questionNumber: 81,
        question: `
        A developer has an ErrorHandler module that contains multiple functions.
        
        What kind of export should be leveraged so that multiple functions can be used?`,
        option1: `default`,
        option2: `multi`,
        option3: `all`,
        option4: `named`,
        answer: 4,
    },
    {
        questionNumber: 82,
        question: `
        function foo() {
            const a = 2;
            function bar() {
                console.log(a);
            }
            return bar;
        }
        
        Why does the function bar have access to variable a?`,
        option1: `Outer function's scope`,
        option2: `Inner function's scope`,
        option3: `Hoisting`,
        option4: `Prototype chain`,
        answer: 2,
    },
    {
        questionNumber: 83,
        question: `
        01 let first = 'Who';
        02 let second = 'What';
        03
        04 try {
        05    try {
        06       throw new Error('Sad trombone');
        07    } catch (err) {
        08      first = 'Why';    
        09    } finally {
        10      second = 'When';
        11    }    
        12 } catch (err) {
        13    second = 'Where';
        14 }
        
        What are the values for first and second once the code executes?`,
        option1: `first is Who and second is Where`,
        option2: `first is Why and second is When`,
        option3: `first is Who and second is When`,
        option4: `first is Why and second is Where`,
        answer: 2,
    },
    {
        questionNumber: 84,
        question: `
        01 const exec = (item, delay) =>
        02 new Promise(resolve => setTimeout(() => resolve(item), delay));
        03
        04 async function runParallel() {
        05    const [result1, result2, result3] = await Promise.all(
        06        [exec('x','100'), exec('y', '500'), exec('z', '100')]
        07    );
        08    return \`parallel is done: \${result1}\${result2}\${result3}\`;
        09 }
        
        Which statements correctly execute the runParallel() function?`,
        option1: `runParallel().then(data);`,
        option2: `runParallel().then(function(data){
            return data;
        });`,
        option3: `async runParallel().then(data);`,
        option4: `runParallel().done(function(data){
            return data;
        });`,
        option5: `A and B are correct`,
        option6: `There is no correct answer`,
        answer: 2,
    },
    {
        questionNumber: 85,
        question: `
        Which statement can a developer apply to increment the browser's navigation history without a page refresh?`,
        option1: `window.history.state.push(newStateObject)`,
        option2: `window.history.replaceState(newStateObject, '', null)`,
        option3: `window.history.pushState(newStateObject)`,
        option4: `window.history.pushState(newStateObject, '', null);`,
        answer: 4,
    },
    {
        questionNumber: 86,
        question: `
        A developer wrote a fizzbuzz function that when passed in a number, returns the following:
        
        - 'fizz' if the number is divisible by 3.
        - 'buzz' if the number is divisible by 5.
        - 'fizzbuzz' if the number is divisible by both 3 and 5.
        - Empty string if the number is divisible by neither 3 or 5.
        
        Which test cases will properly test scenarios for the fizzbuzz function?`,
        option1: `let res = fizzbuzz(5);
        console.assert(res === '');`,
        option2: `let res = fizzbuzz(3);
        console.assert(res === 'buzz');`,
        option3: `There is no correct answer`,
        option4: `let res = fizzbuzz(15);
        console.assert(res === 'fizzbuzz');`,
        option5: `let res = fizzbuzz(Infinity);
        console.assert(res === '');`,
        option6: `D and E are correct`,
        answer: 6,
    },
    {
        questionNumber: 87,
        question: `
        01 function Person() {
        02    this.firstName = 'John';
        03 }
        04
        05 Person.prototype = {
        06    job: x => 'Developer'
        07 };
        08
        09 const myFather = new Person();
        10 const result = myFather.firstName + ' ' + myFather.job();
        
        What is the value of result after line 10 executes?`,
        option1: `undefined Developer`,
        option2: `John Developer`,
        option3: `John undefined`,
        option4: `Error: myFather.job is not a function`,
        answer: 2,
    },
    {
        questionNumber: 88,
        question: `
        A developer creates a simple webpage with an input field. 
        
        When a user enters text in the input field and clicks the button, the actual value of the field must be displayed in the console.
        
        Here is the HTML file content:
        
        <input type='text' value='Hello' name='input'/>
        <button type='button'>Display</button>
        
        The developer wrote the JavaScript code below:
        
        01 const button = document.querySelector('button');
        02
        03 button.addEventListener('click', () => {
        04    const input = document.querySelector('input');
        05    console.log(input.getAttribute('value'));
        06 });
        
        When the user clicks the button, the output is always "Hello".
        
        What needs to be done to make this code work as expected?`,
        option1: `Replace line 03 with:
        button.addEventListener('onclick', function() => {`,
        option2: `Replace line 04 with:
        const input = document.getElementByName('input');`,
        option3: `Replace line 05 with:
        console.log(input.value);`,
        option4: `Replace line 03 with:
        button.addCallback('click', function() {`,
        answer: 3,
    },
    {
        questionNumber: 89,
        question: `
         let obj = {
            foo: 1,
            bar: 2
         }
        
         let output = [];
        
         for (let something in obj) {
             output.push(something);
         }
        
         console.log(output);
        
        What is the output of line 12?`,
        option1: `[1, 2]`,
        option2: `['foo', 'bar']`,
        option3: `['foo:1', 'bar:2']`,
        option4: `['bar', 'foo']`,
        answer: 2,
    },
    {
        questionNumber: 90,
        question: `
        A developer is setting up a new Node.js server with a client library that is built using events and callbacks.
        
        The library will establish a web socket connection and handle receipt of messages to the server will be imported with require and 
        made available with a variable called ws.
        
        The developer also wants to add error logging if a connection fails.
        
        Given this information, which code segment shows the correct way to set up a client with two events that listen at execution time?`,
        option1: `ws.on('connect', () => {
            console.log('Connected to client');

            ws.on('error', (error) => {
                console.log('ERROR', error);
            });
        });`,
        option2: `try {
            ws.connect(() => {
                console.log('Connected to client');
            });
        } catch(error) {
            console.log('ERROR', error);
        }`,
        option3: `ws.connect(() => {
            console.log('Connected to client'); 
        }).catch((error) => {
            console.log('ERROR', error);
        });`,
        option4: `ws.on('connect', () => {
            console.log('Connected to client');
        });
        
        ws.on('error', (error) => {
            console.log('ERROR', error);
        });`,
        answer: 4,
    },
    {
        questionNumber: 91,
        question: `
        A developer is trying to convince management that their team will benefit from using Node.js for a backend server that they are going to create. 
        
        The server will be a web server that handles API requests from a website that the team has already built using HTML, CSS, and JavaScript.
        
        Which benefits of Node.js can the developer use to persuade their manager?`,
        option1: `Performs a static analysis on code before execution to look for runtime errors`,
        option2: `Ensures stability with one major release every few years`,
        option3: `Use non-blocking functionality for performant request handling`,
        option4: `Executes server-side JavaScript code to avoid learning a new language`,
        option5: `Installs with its own package manager to install and manage third-party libraries`,
        option6: `All the above are correct`,
        option7: `C, D and E are correct`,
        answer: 7,
    },
    {
        questionNumber: 92,
        question: `
        A test has a dependency on database.query. 
        
        During the test, the dependency is replaced with an object called database with the method query, that returns an array. 
        
        The developer needs to verify how many times the method was called and the arguments used each time.
        
        Which test approaches describe the requirement?`,
        option1: `Mocking`,
        option2: `White box`,
        option3: `Black box`,
        option4: `Integration`,
        option5: `A and B are correct`,
        option6: `There is no correct answer`,
        answer: 5,
    },
    {
        questionNumber: 93,
        question: `
        class Student {
            constructor(name){
                this.name = name;
            }

            takeTest() {
                console.log('\${this.name} got 70% on test.');
            }
        }
        
        class BetterStudent extends Student {
            constructor(name) {
                super(name);
                this.name = 'Better student ' + name;
            }

            takeTest() {
                console.log(\`\${this.name} got 100% on test.\`);
            }
        }
        
        let student = new BetterStudent('Jackie');
        student.takeTest();
        
        What is the console output?`,
        option1: `Uncaught ReferenceError`,
        option2: `Better student Jackie got 100% on test`,
        option3: `Better student Jackie got 70% on test`,
        option4: `Jackie got 70% on test`,
        answer: 2,
    },
    {
        questionNumber: 94,
        question: `
        let country = {
            get capital() {
                let city = Number('London');
                return {
                    cityString: city.toString(),
                }
            }
        }
        
        Which value can a developer expect when referencing country.capital.cityString?`,
        option1: `An error`,
        option2: `undefined`,
        option3: `'NaN'`,
        option4: `'London'`,
        answer: 3,
    },
    {
        questionNumber: 95,
        question: `
        const searchText = 'Yay! Salesforce is amazing!';
        
        let result1 = searchText.search(/sales/i);
        let result2 = searchText.search(/sales/);
        
        console.log(result1);
        console.log(result2);
        
        After running this code, which result is displayed on the console?`,
        option1: `5
        5`,
        option2: `5
        -1`,
        option3: `5
        undefined`,
        option4: `true
        false`,
        answer: 2,
    },
    {
        questionNumber: 96,
        question: `
        A developer is debugging a web server that uses Node.js. The server hits a runtime error every third request to 
        an important endpoint on the web server.
        
        The developer added a break point to the start script, that is at index.js at the root of the server's source code. 
        The developer wants to make use of Chrome DevTools to debug.
        
        Which command can be run to access DevTools and make sure the breakpoint is hit?`,
        option1: `node --inspect-brk index.js`,
        option2: `node inspect index.js`,
        option3: `node --i index.js`,
        option4: `node --inspect index.js`,
        answer: 1,
    },
    {
        questionNumber: 97,
        question: `
        Which code statement correctly retrieves and returns an object from localStorage?`,
        option1: `const retrieveFromLocalStorage = () {
            return JSON.stringify(window.localStorage.getItem(storageKey));
        }`,
        option2: `const retrieveFromLocalStorage = (storageKey) {
            return JSON.parse(window.localStorage.getItemstorageKey));
        }`,
        option3: `const retrieveFromLocalStorage = (storageKey) {
            return window.localStorage[storageKey];
        }`,
        option4: `const retrieveFromLocalStorage = (storageKey) {
            return window.localStorage.getItem(storageKey);
        }`,
        answer: 4,
    },
    {
        questionNumber: 98,
        question: `
        const event = new CustomEvent(
           // Missing code
        );
        obj.dispatchEvent(event);
        
        A developer needs to dispatch a custom event called update to send information about recordId.
        
        Which options could a developer insert at the placeholder in line 02 to achieve this?`,
        option1: `'update', '123abc'`,
        option2: `'update', {
            detail: {
                recordId: '123abc'
            }
        }`,
        option3: `'update', {
            recordId: '123abc'
        }`,
        option4: `{ type: 'update', recordId: '123abc' }`,
        option5: `All the above are correct`,
        option6: `B and C are correct`,
        answer: 6,
    },
    {
        questionNumber: 99,
        question: `
        <div>
            <div id="row-uc">Universal Containers</div>
            <div id="row-as">Applied Shipping</div>
            <div id="row-bt">Burligton Textiles</div>
        </div>
        
        Which statement adds the priority-account CSS class to the Universal Containers row?`,
        option1: `document.querySelectorAll('#row-uc').classList.add('priority-account');`,
        option2: `document.getElementById('row-uc').addClass('priority-account');`,
        option3: `document.querySelector('#row-uc').classes.push('priority-account');`,
        option4: `document.querySelector('#row-uc').classList.add('priority-account');`,
        answer: 4,
    },
    {
        questionNumber: 100,
        question: `
        Refer to the string below:
        
        const str = 'Salesforce';
        
        Which statements result in the word 'Sales'?`,
        option1: `str.substr(0, 5);`,
        option2: `str.substr(1, 5);`,
        option3: `str.substring(0, 5);`,
        option4: `str.substring(1, 5);`,
        option5: `There is no correct answer`,
        option6: `A and C are correct.`,
        answer: 6,
    },
    {
        questionNumber: 101,
        question: `
        A developer has the function shown below, that is called when a page loads.
        
        function onLoad() {
            console.log('Page has loaded!');
        }
        
        Where can the developer see the log statement after loading the page in the browser?`,
        option1: `Terminal running the web server`,
        option2: `Browser JavaScript console`,
        option3: `On the webpage`,
        option4: `Browser performance tools`,
        answer: 2,
    },
    {
        questionNumber: 102,
        question: `
        Universal Containers (UC) notices that its application that allows users to search for accounts makes 
        a network request each time a key is pressed. 
        
        This results in too many requests for the server to handle.
        
        To address this problem, UC decides to implement a debounce function in the search string change handler.
        
        What are key steps to implement this debounce function?`,
        option1: `If there is an existing setTimeout and the search string changes, allow the existing setTimeout to finish, and do not enqueue a new setTimeout.`,
        option2: `Ensure that the network request has the property debounce set to true.`,
        option3: `If there is an existing setTimeout and the search string changes, cancel the existing setTimeout using the persisted timerId and replace it with a new setTimeout.`,
        option4: `When the search string changes, enqueue the request within a setTimeout.`,
        option5: `Store the timerId of the setTimeout last enqueued by the search string change handler.`,
        option6: `A, C and E are correct`,
        option7: `B and D are correct`,
        option8: `C, D and E are correct`,
        answer: 8,
    },
    {
        questionNumber: 103,
        question: `
        let array = [1, 2, 3, 4, 4, 5, 4, 4];
        
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 4) {
                array.splice(i, 1);
                i--;
            }
        }
        
        What is the value of array the code executes?`,
        option1: `[1, 2, 3, 4, 5, 4, 4]`,
        option2: `[1, 2, 3, 5]`,
        option3: `[1, 2, 3, 4, 4, 5, 4]`,
        option4: `[1, 2, 3, 4, 5, 4]`,
        answer: 2,
    },
    {
        questionNumber: 104,
        question: `
        01 function test() {
        02    if (val === undefined) {
        03        return 'Undefined value!';
        04    }
        05    if (val === null) {
        06        return 'Null value!';
        07    }
        08    return val;
        09 }
        10
        11 let x;
        12
        13 test(x);
        
        What is returned by the function call on the line 13?`,
        option1: `Line 13 throws an error`,
        option2: `undefined`,
        option3: `'Undefined value!'`,
        option4: `'Null value!'`,
        answer: 1,
    },
    {
        questionNumber: 105,
        question: `
        A developer wrote the following code to test a sum3 function that takes in an array of numbers and 
        returns the sum of the first three numbers in the array. 
        
        The test passes:
        
        01 let res = sum3([1, 2, 3]);
        02 console.assert(res === 6);
        03 
        04 res = sum3([1, 2, 3, 4]);
        05 console.assert(res === 6);
        
        A different developer made changes to the behavior of sum3 to instead sum all of the numbers present in the array.
        
        Which result occurs when running the test on the updated sum3 function?`,
        option1: `The line 05 assertion passes`,
        option2: `The line 02 assertion passes`,
        option3: `The line 05 assertion fails`,
        option4: `The line 02 assertion fails`,
        option5: `B and C are correct`,
        option6: `A and B are correct`,
        answer: 5,
    },
    {
        questionNumber: 106,
        question: `
        A developer writes the code below to calculate the factorial of a given number:
        
        01 function factorial(number) {
        02    return number * factorial(number - 1);
        03 }
        04 factorial(3);
        
        What is the result of executing line 04?`,
        option1: `6`,
        option2: `-Infinity`,
        option3: `0`,
        option4: `RuntimeError`,
        answer: 4,
    },
    {
        questionNumber: 107,
        question: `
        A developer is wondering whether to use, Promise.then or Promise.catch, especially when a promise throws an error. 
        
        Which promises are rejected?`,
        option1: `new Promise(() => {throw 'Cool error here'}).then((null, error => console.error(error)));`,
        option2: `Promise.reject('Cool error here').then(error => console.error(error));`,
        option3: `new Promise((resolve, reject) => {throw 'Cool error here'}).catch(error => console.error(error));`,
        option4: `Promise.reject('Cool error here').catch(error => console.error(error));`,
        option5: `A and C are true`,
        option6: `C and D are true`,
        option7: `A, C and D are true`,
        answer: 6,
    },
    {
        questionNumber: 108,
        question: `
        bar.awesome is a popular Javascript module. The versions published to npm are:
        
        1.2
        1.3.1
        1.3.5
        1.4.0
        
        Teams at Universal Containers use this module in a number of projects. 
        
        A particular project has the package.json defintion below:
        
        {
            "name": "UC Project Extra",
            "version": "0.0.5",
            "dependencies": {
                "bar.awesome": "~1.3.0."
            }
        }
        
        A developer runs this command: npm install
        
        Which version of bar.awesome is istalled?`,
        option1: `1.3.1`,
        option2: `The command fails, because version 1.3.0 is not found`,
        option3: `1.3.5`,
        option4: `1.4.0`,
        answer: 3,
    },
    {
        questionNumber: 109,
        question: `
        A developer is trying to handle an error within a function.
        
        Which code segment shows the correct approach to handle an error without propagation it elsewhere?`,
        option1: `try {
            doSomething();
        } catch (error) {
            return error;
        }`,
        option2: `try {
            doSomething();
        } catch (error) {
            return null;
        }`,
        option3: `try {
            doSomething();
        } catch (error) {
            processError (error);
        }`,
        option4: `try {
            doSomething();
        } catch (error) {
            throw new Error('Error found');
        }`,
        answer: 3,
    },
    {
        questionNumber: 110,
        question: `
        A developer is creating a simple webpage with a button. When a user clicks this button for the first time, 
        a message is displayed.
        
        The developer wrote the JavaScript code below, but something is missing. 
        
        The message gets displayed every time a user clicks the button, instead of just the first time.
        
        01 function listen(event) {
        02    
        03    alert('Hey! I am Litox Chikamatsu');
        04
        05 }
        06 button.addEventListener('click', listen);
        
        Which code lines make this code work as required?`,
        option1: `On line 04, use event.stopPropagation();`,
        option2: `On line 02, use event.first to test if it is the first execution.`,
        option3: `On line 06, add an option called once to button.addEventListener().`,
        option4: `On line 04, use button.removeEventListener('click', listen)`,
        option5: `A, C, D are correct.`,
        option6: `C and D are correct`,
        answer: 6,
    },
    {
        questionNumber: 111,
        question: `
        01 function Person(name, email) {
        02    this.name = name;
        03    this.email = email;
        04 }
        05
        06 const john = new Person('John', 'john@email.com');
        07 const jane = new Person('Jane', 'jane@email.com');
        08 const emily = new Person('Emily', 'emily@email.com');
        09
        10 let usersList = [john, jane, emily];
        
        Which method can be used to provide a visual representation of the list of users and 
        to allow sorting by the name or email attribute?`,
        option1: `console.group(usersList);`,
        option2: `console.table(usersList);`,
        option3: `console.info(usersList);`,
        option4: `console.groupCollapsed(usersList);`,
        answer: 2
    },
    {
        questionNumber: 112,
        question: `
        What's the value of output?
        
        const one = false || {} || null;
        const two = null || false || '';
        const three = [] || 0 || true;
        
        console.log(one, two, three);`,
        option1: `false, null, []`,
        option2: `null, '', true`,
        option3: `{}, '', []`,
        option4: `null, null, true`,
        answer: 3,
    },
    {
        questionNumber: 113,
        question: `
        What's the value of output?
        
        function compareMembers(person1, person2 = person) {
            if (person1 !== person2) {
                console.log('Not the same!');
            } else {
                console.log('They are the same!');
            }
        }
        
        const person = { name: 'Litox' };
        
        compareMembers(person);`,
        option1: `Not the same!`,
        option2: `They are the same!`,
        option3: `ReferenceError`,
        option4: `SyntaxError`,
        answer: 2,
    },
    {
        questionNumber: 114,
        question: `
        What's the value of output?
        
        console.log(\`\${(x => x)('I love')} to program\`);`,
        option1: `I love to program`,
        option2: `undefined to program`,
        option3: `\${(x => x)('I love')} to program`,
        option4: `TypeError`,
        answer: 1,
    },
    {
        questionNumber: 115,
        question: `
        function sumValues(x, y, z) {
            return x + y + z;
        }
        
        Which of the following options will return 6?`,
        option1: `sumValues([...1, 2, 3]);`,
        option2: `sumValues([...[1, 2, 3]]);`,
        option3: `sumValues(...[1, 2, 3]);`,
        option4: `sumValues([1, 2, 3]);`,
        answer: 3,
    },
    {
        questionNumber: 116,
        question: `
        What's the value of output?
        
        // index.js
        console.log('running index.js');
        import { sum } from './sum.js';
        console.log(sum(1, 2));
        
        // sum.js
        console.log('running sum.js');
        export const sum = (a, b) => a + b;`,
        option1: `running index.js, running sum.js, 3`,
        option2: `running sum.js, running index.js, 3`,
        option3: `running sum.js, 3, running index.js`,
        option4: `running index.js, undefined, running sum.js`,
        answer: 2,
    },
    {
        questionNumber: 117,
        question: `
        What's the output?
        
        const box = { x: 10, y: 20};
        
        Object.freeze(box);
        
        const shape = box;
        shape.x = 100;
        
        console.log(shape);`,
        option1: `{ x: 100, y: 20 }`,
        option2: `{ x: 10, y: 20 }`,
        option3: `{ x: 100 }`,
        option4: `ReferenceError`,
        answer: 2,
    },
    {
        questionNumber: 118,
        question: `
        What's the output?
        
        setTimeout(() => {
            console.log('1');
        });
        
        console.log('2');
        
        new Promise((resolve, reject) => {
            resolve('3');
        }).then(() => {
            console.log('3');
        });
        
        console.log('4');`,
        option1: `1, 2, 3, 4`,
        option2: `1, 2, 4, 3`,
        option3: `2, 4, 3, 1`,
        option4: `2, 4, 1, 3`,
        answer: 3,
    },
    {
        questionNumber: 119,
        question: `
        Which Object method returns an iterable that can be used to iterate over the properties of an object?`,
        option1: `Object.get()`,
        option2: `Object.loop()`,
        option3: `Object.each()`,
        option4: `Object.keys()`,
        answer: 4,
    },
    {
        questionNumber: 120,
        question: `
        After the following code, what is the value of a.length?
        
        var a = ['dog', 'cat', 'hen'];
        a[100] = 'fox';`,
        option1: `101`,
        option2: `3`,
        option3: `4`,
        option4: `100`,
        answer: 1,
    },
    {
        questionNumber: 121,
        question: `
        Which CLI option can you use to debug a node script in Chrome DevTools?`,
        option1: `--dev-tools`,
        option2: `--inspect`,
        option3: `--chrome`,
        option4: `--debug`,
        answer: 2,
    },
    {
        questionNumber: 122,
        question: `
        How do you make an HTTP server object active and listen to request on certain ports?`,
        option1: `server.start`,
        option2: `server.activate`,
        option3: `server.listen`,
        option4: `server.run`,
        answer: 3,
    },
    {
        questionNumber: 123,
        question: `
        The developer wants to test this code:
        
        const stringifyNumber = (num) => Number(num).toString();
        
        Which tests are the most accurate for this code?`,
        option1: `console.assert(stringifyNumber() === 'NaN');`,
        option2: `console.assert(typeof stringifyNumber(2) === 'string');`,
        option3: `console.assert(stringifyNumber(-2) === '-2');`,
        option4: `console.assert(stringifyNumber(' ') === '0');`,
        option5: `All above is correct`,
        option6: `B, C and D are correct`,
        answer: 5,
    },
    {
        questionNumber: 124,
        question: `
        Refer to the code below:
        
        function changeValue(obj) {
            obj.value = obj.value / 2;
        }
        
        const objA = {};
        const objB = objA;
        
        changeValue(objB);
        const result = objA.value;
        
        What is the value of result after the code executes?`,
        option1: `10`,
        option2: `5`,
        option3: `undefined`,
        option4: `NaN`,
        answer: 4,
    },
    {
        questionNumber: 125,
        question: `
        A developer tries to retrieve all cookies, then sets a certain key value pair in the cookie. 
        
        These statements are used:
        
        01 document.cookie;
        02 document.cookie = 'key=John Smith';
        
        What is the behavior?`,
        option1: `Cookies are read and they value is set, and all cookies are wiped.`,
        option2: `Cookies are read and the key value is set, the remaining cookies are unaffected.`,
        option3: `Cookies are not read because line 01 should be document.cookies, but the key value is set and all cookies are wiped.`,
        option4: `Cookies are read, but the key value is not set because the value is not URL enconded.`,
        answer: 2,
    },
    {
        questionNumber: 126,
        question: `
        A team works on a big project uses npm to deal with the projects dependencies. 
        
        A developer added a dependency to manipulate dates and pushed the updates to the remote repository.
        
        The rest of the team complains that the dependency does not get downloaded when they execute npm install.
        
        Which reasons could be possible explanations for this?`,
        option1: `The developer missed the option --save when adding the dependency`,
        option2: `The developer missed the option --add when adding the dependency`,
        option3: `The developer added the dependency as a dev dependency, and NODE_ENV is set to production.`,
        option4: `The developer added the dependency as a dev dependency, and NPM_ENV is set to production.`,
        option5: `A and D are correct`,
        option6: `A and C are correct`,
        answer: 6,
    },
    {
        questionNumber: 127,
        question: `
        What's the output?
        
        function sayHi() {
            console.log(name);
            console.log(age);
            var name = 'Lydia';
            let age = 21;
        }

        sayHi();`,
        option1: `Lydia and undefined`,
        option2: `Lydia and ReferenceError`,
        option3: `ReferenceError and 21`,
        option4: `undefined and ReferenceError`,
        answer: 4,
    },
    {
        questionNumber: 128,
        question: `
        What's the output?
        
        for (var i = 0; i < 3; i++) {
            setTimeout(() => console.log(i), 1);
        }

        for (let i = 0; i < 3; i++) {
            setTimeout(() => console.log(i), 1);
        }`,
        option1: `0 1 2 and 0 1 2`,
        option2: `0 1 2 and 3 3 3`,
        option3: `3 3 3 and 0 1 2`,
        answer: 3,
    },
    {
        questionNumber: 129,
        question: `
        What's the output?
        
        const shape = {
          radius: 10,
          diameter() {
            return this.radius * 2;
          },
          perimeter: () => 2 * Math.PI * this.radius,
        };

        console.log(shape.diameter());
        console.log(shape.perimeter());`,
        option1: `20 and 62.83185307179586`,
        option2: `20 and NaN`,
        option3: `20 and 63`,
        option4: `NaN and 63`,
        answer: 2,
    },
    {
        questionNumber: 130,
        question: `
        What's the output?
        
        class Chameleon {
          static colorChange(newColor) {
            this.newColor = newColor;
            return this.newColor;
          }

          constructor({ newColor = 'green' } = {}) {
            this.newColor = newColor;
          }
        }

        const freddie = new Chameleon({ newColor: 'purple' });
        console.log(freddie.colorChange('orange'));`,
        option1: `orange`,
        option2: `purple`,
        option3: `green`,
        option4: `TypeError`,
        answer: 4,
    },
    {
        questionNumber: 131,
        question: `
        What happens when we do this?
        
        function bark() {
          console.log('Woof!');
        }

        bark.animal = 'dog';`,
        option1: `Nothing, this is totally fine!`,
        option2: `SyntaxError. You cannot add properties to a function this way.`,
        option3: `"Woof" gets logged.`,
        option4: `ReferenceError`,
        answer: 1,
    },
    {
        questionNumber: 132,
        question: `
        What's the output?
        
        function Person(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
        }

        const member = new Person('Lydia', 'Hallie');
        
        Person.getFullName = function() {
          return \`\${this.firstName} \${this.lastName}\`;
        };

        console.log(member.getFullName());`,
        option1: `TypeError`,
        option2: `SyntaxError`,
        option3: `Lydia Hallie`,
        option4: `undefined undefined`,
        answer: 1,
    },
    {
        questionNumber: 133,
        question: `
        What's the output?
        
        function Person(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
        }

        const lydia = new Person('Lydia', 'Hallie');
        const sarah = Person('Sarah', 'Smith');

        console.log(lydia);
        console.log(sarah);`,
        option1: `Person {firstName: "Lydia", lastName: "Hallie"} and undefined`,
        option2: `Person {firstName: "Lydia", lastName: "Hallie"} and 
        Person {firstName: "Sarah", lastName: "Smith"}`,
        option3: `Person {firstName: "Lydia", lastName: "Hallie"} and {}`,
        option4: `Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError`,
        answer: 1,
    },
    {
        questionNumber: 134,
        question: `
        What are the three phases of event propagation?`,
        option1: `Target > Capturing > Bubbling`,
        option2: `Bubbling > Target > Capturing`,
        option3: `Target > Bubbling > Capturing`,
        option4: `Capturing > Target > Bubbling`,
        answer: 4,
    },
    {
        questionNumber: 135,
        question: `
        What's the output?
        
        let number = 0;

        console.log(number++);
        console.log(++number);
        console.log(number);`,
        option1: `1 1 2`,
        option2: `1 2 2`,
        option3: `0 2 2`,
        option4: `0 1 2`,
        answer: 3,
    },
    {
        questionNumber: 136,
        question: `
        What's the output?
        
        function getPersonInfo(one, two, three) {
          console.log(one);
          console.log(two);
          console.log(three);
        }

        const person = 'Lydia';
        const age = 21;

        getPersonInfo\`\${person} is \${age} years old\`;`,
        option1: `"Lydia" 21 ["", " is ", " years old"]`,
        option2: `["", " is ", " years old"] "Lydia" 21`,
        option3: `"Lydia" ["", " is ", " years old"] 21`,
        answer: 2,
    },
    {
        questionNumber: 137,
        question: `
        What's the output?
        
        function checkAge(data) {
          if (data === { age: 18 }) {
            console.log('You are an adult!');
          } else if (data == { age: 18 }) {
            console.log('You are still an adult.');
          } else {
            console.log(\`Hmm.. You don't have an age I guess\`);
          }
        }

        checkAge({ age: 18 });`,
        option1: `You are an adult!`,
        option2: `You are still an adult.`,
        option3: `Hmm.. You don't have an age I guess`,
        answer: 3,
    },
    {
        questionNumber: 138,
        question: `
        What is the output of the code:
        
        JSON.stringify([String(false), Boolean(false),  undefined]);`,
        option1: `["String(false)", "Boolean(false)",  "undefined"]`,
        option2: `["", "false", "undefined"]`,
        option3: `["", "", ""]`,
        option4: `["false", false, null]`,
        answer: 4,
    },
    {
        questionNumber: 139,
        question: `
        How long is "cool_secret" accessible?
        
        sessionStorage.setItem('cool_secret', 123);`,
        option1: `Forever, the data doesn't get lost`,
        option2: `When the user closes the tab.`,
        option3: `When the user closes the entire browser, not only the tab.`,
        option4: `When the user shuts off their computer.`,
        answer: 2,
    },
    {
        questionNumber: 140,
        question: `
        What's the output?
        
        const obj = { 1: 'a', 2: 'b', 3: 'c' };
        const set = new Set([1, 2, 3, 4, 5]);

        obj.hasOwnProperty('1');
        obj.hasOwnProperty(1);
        set.has('1');
        set.has(1);`,
        option1: `false true false true`,
        option2: `false true true true`,
        option3: `true true false true`,
        option4: `true true true true`,
        answer: 3,
        explanation: `
        obj.hasOwnProperty('1') returns true because the object has a property named '1'.
obj.hasOwnProperty(1) returns true because the object has a property named 1. JavaScript automatically converts the string '1' to the number 1.
set.has('1') returns false because the set does not have an element with the value '1'. The set has an element with the value 1, but JavaScript does not automatically convert the string '1' to the number 1.
set.has(1) returns true because the set has an element with the value 1.`
    },
    {
        questionNumber: 141,
        question: `
        Which of the following works properly?`,
        option1: `JSON.parse("'test'");`,
        option2: `JSON.parse('"test"');`,
        option3: `JSON.parse('test');`,
        option4: `JSON.parse("test");`,
        answer: 2,
    },
    {
        questionNumber: 142,
        question: `
        What's the output?
        
        const person = { name: 'Lydia' };

        function sayHi(age) {
          return \`\${this.name} is \${age}\`;
        }

        console.log(sayHi.call(person, 21));
        console.log(sayHi.bind(person, 21));`,
        option1: `undefined is 21, Lydia is 21`,
        option2: `function, function`,
        option3: `Lydia is 21, Lydia is 21`,
        option4: `Lydia is 21, function`,
        answer: 4,
    },
    {
        questionNumber: 143,
        question: `
        What does the setInterval method return in the browser?
        
        setInterval(() => console.log('Hi'), 1000);`,
        option1: `строки "Hi" каждую секунду`,
        option2: `the amount of milliseconds specified`,
        option3: `the passed function`,
        option4: `undefined`,
        answer: 1,
        explanation: `
        Этот код запустит функцию console.log('Hi') через каждый интервал времени в 1000 миллисекунд (1 секунда). Результатом выполнения кода будет вывод в консоль строки "Hi" каждую секунду.

Функция setInterval используется для установки повторяющихся интервалов и выполняет указанную функцию через определенный промежуток времени. В данном случае, она будет вызывать функцию console.log('Hi') каждую секунду, пока не будет явно остановлена`
    },
    {
        questionNumber: 144,
        question: `
        What's the output?
        
        let person = { name: 'Lydia' };
        const members = [person];
        person = null;

        console.log(members);`,
        option1: `null`,
        option2: `[null]`,
        option3: `[{}]`,
        option4: `[{ name: "Lydia" }]`,
        answer: 4,
    },
    {
        questionNumber: 145,
        question: `
        What's the output?
        
        function Car() {
          this.make = 'Lamborghini';
          return { make: 'Maserati' };
        }

        const myCar = new Car();
        console.log(myCar.make);`,
        option1: `"Lamborghini"`,
        option2: `"Maserati"`,
        option3: `ReferenceError`,
        option4: `TypeError`,
        answer: 2,
    },
    {
        questionNumber: 146,
        question: `
        What's the output?
        
        const set = new Set([1, 1, 2, 3, 4]);

        console.log(set);`,
        option1: `[1, 1, 2, 3, 4]`,
        option2: `[1, 2, 3, 4]`,
        option3: `{1, 1, 2, 3, 4}`,
        option4: `{1, 2, 3, 4}`,
        answer: 4,
        explanation: `
        The reason is that the Set constructor creates a new set object with the elements [1, 1, 2, 3, 4]. However, since sets only allow unique values, the duplicate value 1 is removed from the set. Therefore, the output is a set object with the elements [1, 2, 3, 4].`
    },
    {
        questionNumber: 147,
        question: `
        What's the output?
        
        // counter.js
        let counter = 10;
        export default counter;
        
        // index.js
        import myCounter from './counter';

        myCounter += 1;

        console.log(myCounter);`,
        option1: `10`,
        option2: `11`,
        option3: `Error`,
        option4: `NaN`,
        answer: 3,
        explanation: `
        В коде выше, мы импортируем значение counter из модуля counter.js с помощью выражения import myCounter from './counter'. Однако, поскольку мы импортируем значение по умолчанию (export default), оно импортируется как только для чтения (read-only).

Поэтому, попытка изменить значение myCounter с помощью myCounter += 1 приведет к ошибке, так как значение myCounter является неизменяемым.

Для того чтобы изменить значение переменной counter, необходимо в модуле counter.js экспортировать его как изменяемую переменную, например, с помощью export let counter = 10;.`
    },
    {
        questionNumber: 148,
        question: `
        What's the output?
        
        const name = 'Lydia';
        age = 21;

        console.log(delete name);
        console.log(delete age);`,
        option1: `false, true`,
        option2: `"Lydia", 21`,
        option3: `true, true`,
        option4: `undefined, undefined`,
        answer: 1,
    },
    {
        questionNumber: 149,
        question: `
        What's the output?
        
        const numbers = [1, 2, 3, 4, 5];
        const [y] = numbers;

        console.log(y);`,
        option1: `[[1, 2, 3, 4, 5]]`,
        option2: `[1, 2, 3, 4, 5]`,
        option3: `1`,
        option4: `[1]`,
        answer: 3,
    },
    {
        questionNumber: 150,
        question: `
        What's the output?
        
        const settings = {
          username: 'lydiahallie',
          level: 19,
          health: 90,
        };

        const data = JSON.stringify(settings, ['level', 'health']);
        console.log(data);`,
        option1: `"{"level":19, "health":90}"`,
        option2: `"{"username": "lydiahallie"}"`,
        option3: `"["level", "health"]"`,
        option4: `"{"username": "lydiahallie", "level":19, "health":90}"`,
        answer: 1,
    },
    {
        questionNumber: 151,
        question: `
        How can we log the values that are commented out after the console.log statement?
        
        function* startGame() {
          const answer = yield 'Do you love JavaScript?';
          if (answer !== 'Yes') {
            return "Oh wow... Guess we're done here";
          }
          return 'JavaScript loves you back ❤️';
        }

        const game = startGame();
        console.log(/* 1 */); // Do you love JavaScript?
        console.log(/* 2 */); // JavaScript loves you back ❤️`,
        option1: `game.next("Yes").value and game.next().value`,
        option2: `game.next.value("Yes") and game.next.value()`,
        option3: `game.next().value and game.next("Yes").value`,
        option4: `game.next.value() and game.next.value("Yes")`,
        answer: 3,
    },
    {
        questionNumber: 152,
        question: `
        What's the output?
        
        console.log(String.raw\`Hello\\nworld\`);`,
        option1: `Hello world!`,
        option2: `Hello
        world`,
        option3: `Hello\\nworld`,
        option4: `Hello\\n
        world`,
        answer: 3,
    },
    {
        questionNumber: 153,
        question: `
        What's the output?
        
        function addToList(item, list) {
          return list.push(item);
        }

        const result = addToList('apple', ['banana']);
        console.log(result);`,
        option1: `['apple', 'banana']`,
        option2: `2`,
        option3: `true`,
        option4: `undefined`,
        answer: 2,
        explanation: `
        Метод push возвращает новую длину массива после добавления элемента. В данном случае, массив ['banana'] становится ['banana', 'apple'], и новая длина массива равна 2. Значение 2 будет присвоено переменной result.

Следовательно, при выполнении кода, в консоль будет выведено значение 2.`
    },
    {
        questionNumber: 154,
        question: `
        What is the output?
        
        const add = () => {
          const cache = {};
          return num => {
            if (num in cache) {
              return \`From cache! \${cache[num]}\`;
            } else {
              const result = num + 10;
              cache[num] = result;
              return \`Calculated! \${result}\`;
            }
          };
        };

        const addFunction = add();
        console.log(addFunction(10));
        console.log(addFunction(10));
        console.log(addFunction(5 * 2));`,
        option1: `Calculated! 20 Calculated! 20 Calculated! 20`,
        option2: `Calculated! 20 From cache! 20 Calculated! 20`,
        option3: `Calculated! 20 From cache! 20 From cache! 20`,
        option4: `Calculated! 20 From cache! 20 Error`,
        answer: 3,
    },
    {
        questionNumber: 155,
        question: `
        What is the output?
        
        const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

        for (let item in myLifeSummedUp) {
          console.log(item);
        }

        for (let item of myLifeSummedUp) {
          console.log(item);
        }`,
        option1: `0 1 2 3 and "☕" "💻" "🍷" "🍫"`,
        option2: `"☕" "💻" "🍷" "🍫" and "☕" "💻" "🍷" "🍫"`,
        option3: `"☕" "💻" "🍷" "🍫" and 0 1 2 3`,
        option4: `0 1 2 3 and {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`,
        answer: 1,
    },
    {
        questionNumber: 156,
        question: `
        What is the output?
        
        function checkAge(age) {
          if (age < 18) {
            const message = "Sorry, you're too young.";
          } else {
            const message = "Yay! You're old enough!";
          }

          return message;
        }

        console.log(checkAge(21));`,
        option1: `"Sorry, you're too young."`,
        option2: `"Yay! You're old enough!"`,
        option3: `ReferenceError`,
        option4: `undefined`,
        answer: 3,
    },
    {
        questionNumber: 157,
        question: `
        What kind of information would get logged?
        
        fetch('https://www.website.com/api/user/1')
            .then(res => res.json())
            .then(res => console.log(res));`,
        option1: `The result of the fetch method.`,
        option2: `The result of the second invocation of the fetch method.`,
        option3: `The result of the callback in the previous .then().`,
        option4: `It would always be undefined.`,
        answer: 3,
    },
    {
        questionNumber: 158,
        question: `
        Which option is a way to set hasName equal to true, provided you cannot pass true as an argument?
        
        function getName(name) {
          const hasName = //
        }`,
        option1: `!!name`,
        option2: `name`,
        option3: `new Boolean(name)`,
        option4: `name.length`,
        answer: 1,
    },
    {
        questionNumber: 159,
        question: `
        What's the output?
        
        console.log('I want pizza'[0]);`,
        option1: `"I want pizza0"`,
        option2: `"I"`,
        option3: `SyntaxError`,
        option4: `undefined`,
        answer: 2,
    },
    {
        questionNumber: 160,
        question: `
        What's the output?
        
        // module.js
        export default () => 'Hello world';
        export const name = 'Lydia';

        // index.js
        import * as data from './module';

        console.log(data);`,
        option1: `{ default: function default(), name: "Lydia" }`,
        option2: `{ default: function default() }`,
        option3: `{ default: "Hello world", name: "Lydia" }`,
        option4: `Global object of module.js`,
        answer: 1,
    },
    {
        questionNumber: 161,
        question: `
        What's the output?
        
        class Person {
          constructor(name) {
            this.name = name;
          }
        }

        const member = new Person('John');
        console.log(typeof member);`,
        option1: `"class"`,
        option2: `"function"`,
        option3: `"object"`,
        option4: `"string"`,
        answer: 3,
    },
    {
        questionNumber: 162,
        question: `
        What's the output?
        
        let newList = [1, 2, 3].push(4);

        console.log(newList.push(5));`,
        option1: `[1, 2, 3, 4, 5]`,
        option2: `[1, 2, 3, 5]`,
        option3: `[1, 2, 3, 4]`,
        option4: `Error`,
        answer: 4,
    },
    {
        questionNumber: 163,
        question: `
        What's the output?
        
        function giveLydiaPizza() {
          return 'Here is pizza!';
        }

        const giveLydiaChocolate = () =>
          "Here's chocolate... now go hit the gym already.";

        console.log(giveLydiaPizza.prototype);
        console.log(giveLydiaChocolate.prototype);`,
        option1: `{ constructor: ...} { constructor: ...}`,
        option2: `{} { constructor: ...}`,
        option3: `{ constructor: ...} {}`,
        option4: `{ constructor: ...} undefined`,
        answer: 4,
    },
    {
        questionNumber: 164,
        question: `
        What's the output?
        
        const person = {
          name: 'Lydia',
          age: 21,
        };

        for (const [x, y] of Object.entries(person)) {
          console.log(x, y);
        }`,
        option1: `name Lydia and age 21`,
        option2: `["name", "Lydia"] and ["age", 21]`,
        option3: `["name", "age"] and undefined`,
        option4: `Error`,
        answer: 1,
    },
    {
        questionNumber: 165,
        question: `
        What's the output?
        
        function getItems(fruitList, ...args, favoriteFruit) {
          return [...fruitList, ...args, favoriteFruit]
        }

        getItems(["banana", "apple"], "pear", "orange")`,
        option1: `["banana", "apple", "pear", "orange"]`,
        option2: `[["banana", "apple"], "pear", "orange"]`,
        option3: `["banana", "apple", ["pear"], "orange"]`,
        option4: `SyntaxError`,
        answer: 4,
    },
    {
        questionNumber: 166,
        question: `
        What's the output?
        
        function nums(a, b) {
          if (a > b) console.log('a is bigger');
          else console.log('b is bigger');
          return
          a + b;
        }

        console.log(nums(4, 2));
        console.log(nums(1, 2));`,
        option1: `a is bigger, 6 and b is bigger, 3`,
        option2: `a is bigger, undefined and b is bigger, undefined`,
        option3: `undefined and undefined`,
        option4: `SyntaxError`,
        answer: 2,
        explanation: `
        Функция nums принимает два аргумента a и b. Внутри функции есть условное выражение, которое проверяет, если a больше b, то выводится сообщение 'a is bigger'. В противном случае, выводится сообщение 'b is bigger'. Однако, после этого следует оператор return без возвращаемого значения. Это означает, что функция завершается без явного возвращаемого значения, и по умолчанию возвращается undefined.

При вызове nums(4, 2), условие a > b выполняется, и выводится сообщение 'a is bigger'. Затем, функция завершается и возвращается undefined. Поэтому первый console.log(nums(4, 2)) выведет undefined.

Аналогично, при вызове nums(1, 2), условие a > b не выполняется, и выводится сообщение 'b is bigger'. Затем, функция завершается и возвращается undefined. Поэтому второй console.log(nums(1, 2)) также выведет undefined.`
    },
    {
        questionNumber: 167,
        question: `
        What's the output?
        
        const info = {
          [Symbol('a')]: 'b',
        };

        console.log(info);
        console.log(Object.keys(info));`,
        option1: `{Symbol('a'): 'b'} and ["{Symbol('a')"]`,
        option2: `{} and []`,
        option3: `{ a: "b" } and ["a"]`,
        option4: `{Symbol('a'): 'b'} and []`,
        answer: 4,
    },
    {
        questionNumber: 168,
        question: `
        What's the output?
        
        const getList = ([x, ...y]) => [x, y]
        const getUser = user => { name: user.name, age: user.age }

        const list = [1, 2, 3, 4]
        const user = { name: "Lydia", age: 21 }

        console.log(getList(list))
        console.log(getUser(user))`,
        option1: `[1, [2, 3, 4]] and SyntaxError`,
        option2: `[1, [2, 3, 4]] and { name: "Lydia", age: 21 }`,
        option3: `[1, 2, 3, 4] and { name: "Lydia", age: 21 }`,
        option4: `Error and { name: "Lydia", age: 21 }`,
        answer: 1,
    },
    {
        questionNumber: 169,
        question: `
        What's the output?
        
        const output = \`\${[] && 'Im'}possible!
        You should\${'' && \`n't\`} see a therapist after so much JavaScript lol\`;
        
        console.log(output);`,
        option1: `possible! 
        You should see a therapist after so much JavaScript lol`,
        option2: `Impossible! 
        You should see a therapist after so much JavaScript lol`,
        option3: `possible! 
        You shouldn't see a therapist after so much JavaScript lol`,
        option4: `Impossible! 
        You shouldn't see a therapist after so much JavaScript lol`,
        answer: 2,
    },
    {
        questionNumber: 170,
        question: `
        Which of these methods modifies the original array?
        
        const emojis = ['✨', '🥑', '😍'];

        emojis.map(x => x + '✨');
        emojis.filter(x => x !== '🥑');
        emojis.find(x => x !== '🥑');
        emojis.reduce((acc, cur) => acc + '✨');
        emojis.slice(1, 2, '✨');
        emojis.splice(1, 2, '✨');`,
        option1: `All of them`,
        option2: `map, reduce, slice, splice`,
        option3: `map, slice, splice`,
        option4: `splice`,
        answer: 4,
    },
    {
        questionNumber: 171,
        question: `
        What's the output?
        
        function* generatorOne() {
          yield ['a', 'b', 'c'];
        }

        function* generatorTwo() {
          yield* ['a', 'b', 'c'];
        }

        const one = generatorOne();
        const two = generatorTwo();

        console.log(one.next().value);
        console.log(two.next().value);`,
        option1: `a and a`,
        option2: `a and undefined`,
        option3: `['a', 'b', 'c'] and a`,
        option4: `a and ['a', 'b', 'c']`,
        answer: 3,
    },
    {
        questionNumber: 172,
        question: `
        What will happen?
        
        let config = {
          alert: setInterval(() => {
            console.log('Alert!');
          }, 1000),
        };

        config = null;`,
        option1: `The setInterval callback won't be invoked`,
        option2: `The setInterval callback gets invoked once`,
        option3: `The setInterval callback will still be called every second`,
        option4: `We never invoked config.alert(), config is null`,
        answer: 3,
    },
    {
        questionNumber: 173,
        question: `
        Which method(s) will return the value 'Hello world!'?
        
        const myMap = new Map();
        const myFunc = () => 'greeting';

        myMap.set(myFunc, 'Hello world!');

        //1
        console.log(myMap.get('greeting'));
        //2
        console.log(myMap.get(myFunc));
        //3
        console.log(myMap.get(() => 'greeting'));`,
        option1: `1`,
        option2: `2`,
        option3: `2 and 3`,
        option4: `All of them`,
        answer: 2,
    },
    {
        questionNumber: 174,
        question: `
        What's the output?
        
        const person = {
          name: 'Lydia',
          age: 21,
        };

        const changeAge = (x = { ...person }) => (x.age += 1);
        const changeAgeAndName = (x = { ...person }) => {
          x.age += 1;
          x.name = 'Sarah';
        };

        changeAge(person);
        changeAgeAndName();

        console.log(person);`,
        option1: `{name: "Sarah", age: 22}`,
        option2: `{name: "Sarah", age: 23}`,
        option3: `{name: "Lydia", age: 22}`,
        option4: `{name: "Lydia", age: 23}`,
        answer: 3,
    },
    {
        questionNumber: 175,
        question: `
        What's the output?
        
        const person = {
         firstName: 'Lydia',
          lastName: 'Hallie',
          pet: {
            name: 'Mara',
            breed: 'Dutch Tulip Hound',
          },
          getFullName() {
            return \`\${this.firstName} \${this.lastName}\`;
          },
        };
        
        console.log(person.pet?.name);
        console.log(person.pet?.family?.name);
        console.log(person.getFullName?.());
        console.log(member.getLastName?.());`,
        option1: `undefined undefined undefined undefined`,
        option2: `Mara undefined Lydia Hallie ReferenceError`,
        option3: `Mara null Lydia Hallie null`,
        option4: `null ReferenceError null ReferenceError`,
        answer: 2,
    },
    {
        questionNumber: 176,
        question: `
        What's the output?
        
        const add = x => y => z => {
          console.log(x, y, z);
          return x + y + z;
        };

        add(4)(5)(6);`,
        option1: `4 5 6
        15`,
        option2: `6 5 4`,
        option3: `4 function function`,
        option4: `undefined undefined 6`,
        answer: 1,
        explanation: `
        Код определяет функцию add, которая принимает один аргумент x и возвращает функцию, которая в свою очередь принимает аргумент y и возвращает еще одну функцию, принимающую аргумент z. Когда все три аргумента x, y и z передаются последовательно в цепочке вызовов функции add, они будут выведены на консоль, а затем будет возвращена их сумма (15)`
    },
    {
        questionNumber: 177,
        question: `
        What's the output?
        
        const name = 'Lydia Hallie';
        const age = 21;

        console.log(Number.isNaN(name));
        console.log(Number.isNaN(age));

        console.log(isNaN(name));
        console.log(isNaN(age));`,
        option1: `true false true false`,
        option2: `true false false false`,
        option3: `false false true false`,
        option4: `false true false true`,
        answer: 3,
        explanation: `
        The Number.isNaN() method is used to determine whether a value is NaN (Not-a-Number) of the Number type. It returns true if the provided value is NaN and of the Number type, otherwise it returns false.

In the code snippet, name is a string and age is a number. Here's what happens with each console.log() statement:

console.log(Number.isNaN(name)); - Since name is a string and not a number, Number.isNaN() returns true. This is because the string cannot be directly converted to a valid numeric value and is not of the Number type.

console.log(Number.isNaN(age)); - Since age is a number, Number.isNaN() returns false. This is because age is a valid numeric value of the Number type and is not NaN.

console.log(isNaN(name)); - The global isNaN() function is used here. It first tries to convert the argument to a number, and if successful, it then checks if the resulting value is NaN. Since name cannot be converted to a number, it returns true. This is because isNaN() performs implicit type coercion.

console.log(isNaN(age)); - The global isNaN() function is used again. Since age is a number, it can be converted to a number without any issues, and the resulting value is not NaN. Therefore, isNaN() returns false.

Note: It's important to use Number.isNaN() instead of the global isNaN() function when you want to specifically check if a value is NaN, as the isNaN() function can have unexpected behavior due to implicit type coercion`
    },
    {
        questionNumber: 178,
        question: `
        What's the output?
        
        const myPromise = Promise.resolve(Promise.resolve('Promise'));

        function funcOne() {
          setTimeout(() => console.log('Timeout 1!'), 0);
          myPromise.then(res => res).then(res => console.log(\`\${res} 1!\`));
          console.log('Last line 1!');
        }

        async function funcTwo() {
          const res = await myPromise;
          console.log(\`\${res} 2!\`)
          setTimeout(() => console.log('Timeout 2!'), 0);
          console.log('Last line 2!');
        }

        funcOne();
        funcTwo();`,
        option1: `Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!`,
        option2: `Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2! `,
        option3: `Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!`,
        option4: `Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!`,
        answer: 3,
    },
    {
        questionNumber: 179,
        question: `
        How can we invoke sum in sum.js from index.js?
        
        // sum.js
        export default function sum(x) {
          return x + x;
        }

        // index.js
        import * as sum from './sum';`,
        option1: `sum(4)`,
        option2: `sum.sum(4)`,
        option3: `sum.default(4)`,
        option4: `Default aren't imported with *, only named exports`,
        answer: 3,
    },
    {
        questionNumber: 180,
        question: `
        What's the output?
        
        const handler = {
          set: () => console.log('Added a new property!'),
          get: () => console.log('Accessed a property!'),
        };

        const person = new Proxy({}, handler);

        person.name = 'Lydia';
        person.name;`,
        option1: `Added a new property!`,
        option2: `Accessed a property!`,
        option3: `Added a new property! Accessed a property!`,
        option4: `Nothing gets logged`,
        answer: 3,
    },
    {
        questionNumber: 181,
        question: `
        Which of the following will modify the person object?
        
        const person = { name: 'Lydia Hallie' };

        Object.seal(person);`,
        option1: `person.name = "Evan Bacon"`,
        option2: `person.age = 21`,
        option3: `delete person.name`,
        option4: `Object.assign(person, { age: 21 })`,
        answer: 1,
    },
    {
        questionNumber: 182,
        question: `
        Which of the following will modify the person object?
        
        const person = {
          name: 'Lydia Hallie',
          address: {
            street: '100 Main St',
          },
        };

        Object.freeze(person);`,
        option1: `person.name = "Evan Bacon"`,
        option2: `delete person.address`,
        option3: `person.address.street = "101 Main St"`,
        option4: `person.pet = { name: "Mara" }`,
        answer: 3,
    },
    {
        questionNumber: 183,
        question: `
        What do we need to add to the person object to get 
        ["Lydia Hallie", 21] as the output of [...person]?
        
        const person = {
          name: "Lydia Hallie",
          age: 21
        }

        [...person] // ["Lydia Hallie", 21]`,
        option1: `Nothing, object are iterable by default`,
        option2: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`,
        option3: `*[Symbol.iterator]() { yield* Object.values(this) }`,
        option4: `*[Symbol.iterator]() { for (let x in this) yield this }`,
        answer: 3,
    },
    {
        questionNumber: 184,
        question: `
        What's the output?
        
        let count = 0;
        const nums = [0, 1, 2, 3];

        nums.forEach(num => {
        	if (num) count += 1
        })

        console.log(count)`,
        option1: `1`,
        option2: `2`,
        option3: `3`,
        option4: `4`,
        answer: 3,
    },
    {
        questionNumber: 185,
        question: `
        What's the output?
        
        var array = [1,2,3,4,5,4,4,5,4];

        for(var i = 0; i < array.length; i++) {
            if(array[i] % 4) {
                array.splice(i, 1);
            }
        }

        //output?
        console.log(array);`,
        option1: `2, 4, 4, 4`,
        option2: `1, 2, 3, 5, 5`,
        option3: `2, 4, 4, 4, 4`,
        option4: `4, 4, 4, 4`,
        answer: 3,
    },
    {
        questionNumber: 186,
        question: `
        We have a Dog function and it only takes one parameter named Pet.
        
        What is the correct way to execute this function every minute?`,
        option1: `setTimeout.(Dog, 60000, 'fox')`,
        option2: `setInterval(Dog, 60000, ['fox'])`,
        option3: `setInterval(Dog, 60000, 'fox')`,
        option4: `setTimeout.(Dog, 60000, ['fox'])`,
        answer: 3,
    },
    {
        questionNumber: 187,
        question: `
        What's the output?
        
        const fruit = ['🍌', '🍊', '🍎']

        fruit.slice(0, 1)
        fruit.splice(0, 1)
        fruit.unshift('🍇')

        console.log(fruit)`,
        option1: `['🍌', '🍊', '🍎']`,
        option2: `['🍊', '🍎']`,
        option3: `['🍇', '🍊', '🍎']`,
        option4: `['🍇', '🍌', '🍊', '🍎']`,
        answer: 3,
    },    
    {
        questionNumber: 188,
        question: `
        What's the output?
        
        const animals = {};
        let dog = { emoji: '🐶' }
        let cat = { emoji: '🐈' }

        animals[dog] = { ...dog, name: "Rocky" }
        animals[cat] = { ...cat, name: "Keren" }

        console.log(animals[dog])`,
        option1: `{ emoji: "🐶", name: "Rocky" }`,
        option2: `{ emoji: "🐈", name: "Keren" }`,
        option3: `undefined`,
        option4: `ReferenceError`,
        answer: 2,
    },  
    {
        questionNumber: 189,
        question: `
        What's the output?
        
        const promise1 = Promise.resolve('First')
        const promise2 = Promise.resolve('Second')
        const promise3 = Promise.reject('Third')
        const promise4 = Promise.resolve('Fourth')

        const runPromises = async () => {
        	const res1 = await Promise.all([promise1, promise2])
        	const res2  = await Promise.all([promise3, promise4])
        	return [res1, res2]
        }

        runPromises()
        	.then(res => console.log(res))
        	.catch(err => console.log(err))`,
        option1: `[['First', 'Second'], ['Fourth']]`,
        option2: `[['First', 'Second'], ['Third', 'Fourth']]`,
        option3: `[['First', 'Second']]`,
        option4: `'Third'`,
        answer: 4,
    },
    {
        questionNumber: 190,
        question: `
        What should the value of method be to log { name: "Lydia", age: 22 }?
        
        const keys = ["name", "age"]
        const values = ["Lydia", 22]

        const method = /* ?? */

        Object[method](keys.map((_, i) => {
        	return [keys[i], values[i]]
        })) // { name: "Lydia", age: 22 }`,
        option1: `"entries";`,
        option2: `"values";`,
        option3: `"fromEntries";`,
        option4: `"forEach";`,
        answer: 3,
    },    
    {
        questionNumber: 191,
        question: `
        What's the output?
        
        const createMember = ({ email, address = {}}) => {
        	const validEmail = /.+\@.+\..+/.test(email);

        	if (!validEmail) throw new Error("Valid email pls");
        	
            return {
        		email,
         		address: address ? address : null
    	    }
        }

        const member = createMember({ email: "my@email.com" });

        console.log(member);`,
        option1: `{ email: "my@email.com", address: null }`,
        option2: `{ email: "my@email.com" }`,
        option3: `{ email: "my@email.com", address: {} }`,
        option4: `{ email: "my@email.com", address: undefined }`,
        answer: 3,
    },
    {
        questionNumber: 192,
        question: `
        Which is the correct way to copy the reference to the original array?
        
        const orig = [1, 2, 3];`,
        option1: `const copy = orig.map(x => x);`,
        option2: `const copy = orig.slice(0, 3);`,
        option3: `const copy = orig.sort();`,
        option4: `const copy = orig.splice(0, 3);`,
        answer: 3,
    },
    {
        questionNumber: 193,
        question: `
        A developer writes the code below to return a message to a user attempting to register a new username. 
        
        If the username is available, variable named msg is declared and assigned a value on line 03.
        
        01 function getAvailabilityMessage(item) {
        02    if (getAvailability(item)) {
        03        var msg = 'Username available';
        04    }
        05    return msg;
        06 }
        
        What is the value of msg when getAvailabilityMessage('newUserName') is executed and getAvailability('newUserName') returns false?`,
        option1: `Username available`,
        option2: `newUserName`,
        option3: `msg is not defined`,
        option4: `undefined`,
        answer: 4,
    },
    {
        questionNumber: 194,
        question: `
        A developer is required to write a function that calculates the sum of elements in an array but is getting undefined every time the code is executed.
        
        The developer needs to find what is missing in the code below.
        
        01 const sumFunction = arr => {
        02    return arr.reduce((result, current) => {
        03        //
        04        result += current;
        05        //
        06    }, 10);
        07 };
        
        Which line replacement makes the code work as expected?`,
        option1: `05 return result`,
        option2: `02 return arr.forEach({result, current} =>)`,
        option3: `03 if(arr.length == 0) {return 0;}`,
        option4: `04 current = result + current;`,
        answer: 1,
    },    
    {
        questionNumber: 195,
        question: `
        What is the output of below code snippet?
        
        new Promise(() => {throw 'Cool error here'})
        .then(() => console.log('Error 1'))
        .then(() => console.log('Error 2'))
        .catch((error) => console.log(error))
        .then(() => console.log('Done'));`,
        option1: `Error 1
        Error 2
        Cool error here
        Done`,
        option2: `Cool error here`,
        option3: `Error 1
        Error 2
        Cool error here`,
        option4: `Cool error here
        Done`,
        answer: 4,
    },
    {
        questionNumber: 196,
        question: `
        const msg = 'My name is Bond, James Bond';
        
        Which of the following statements are valid for the msg variable?`,
        option1: `msg.includes('Bond', 1);`,
        option2: `msg.substring('Bond');`,
        option3: `msg.includes('My', 4);`,
        option4: `msg.contains('name', 0);`,
        option5: `A and C are correct`,
        option6: `A and D are correct`,
        answer: 1,
        explanation: `The code msg.includes('Bond', 1) will return true.

    The includes() method is used to check if a specific substring or value is present within a string. It returns a boolean value (true or false) depending on whether the substring or value is found or not.
    
    In this case, msg.includes('Bond', 1) checks if the substring 'Bond' is present in the string msg starting from index 1. Since the substring 'Bond' appears in the string starting from index 11, the includes() method returns true.`
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },    
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
    {
        questionNumber: 0,
        question: ``,
        option1: ``,
        option2: ``,
        option3: ``,
        option4: ``,
        answer: 1,
    },
];

export default {
    questions
}
