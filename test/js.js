

//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню


// let books = [
//     {name: 'Some B;kvnook', pages: 200, autors: ['somename', 'name', 'name', 'name'], ganre:[ 'aifusdgf']},
//     {name: 'Some Bookd', pages: 300, autors: ['somename', 'name', 'name', 'name', 'name'], ganre: ['aifusdgf']},
//     {name: 'Some Boo;dsk', pages: 400, autors: ['somename'], ganre: 'aifusdgf'},
//     {name: 'Some Book ;ldg d;', pages: 500, autors: ['somename', 'name', 'name'], ganre: ['aifusdgf','lkl','jkkkjj','hkkhh']},
//     {name: 'Some B', pages: 100, autors: ['somename', 'name',], ganre: ['aifusdgf','jhjhhkk','ghgjgjgjg']},
//     {name: 'Some Boolsdfk', pages: 250, autors: ['somename', 'name', 'name'], ganre: ['aifusdgf']}
// ]


// -знайти наібльшу книжку.

// console.log(books.reduce((previousValue, currentValue) => (previousValue.pages>currentValue.pages)?previousValue:currentValue))

// - знайти книжку/ки з найдовшою назвою

// console.log(books.reduce((previousValue, currentValue) => (previousValue.name.length>currentValue.name.length)?previousValue:currentValue))

// - вісортувати книжки по кількості сторінок по зростанню

// console.log(books.sort((a, b) => a.pages - b.pages));

// - знайти книжку/ки які писали 2 автори

// console.log(books.find(value => value.autors.length === 2));

// - знайти книжку/ки з найбільшою кількістю жанрів

// console.log(books.reduce((previousValue, currentValue) => previousValue.ganre.length > currentValue.ganre.length ? currentValue : previousValue));



//--------------------------------------------------------------------

// coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// console.log(coursesArray.sort((a, b) => {
//     if (a.modules.length < b.modules.length) {
//         return 1;
//     }
//     if (a.modules.length > b.modules.length) {
//         return -1
//     }
//     if (a.modules.length === b.modules.length) {
//         return 0
//     }
// }));

//--------------------------------------------

//     - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let str = "HTML JavaScript PHP"
//
// function insert_dash(str1){
//   let s1= str1.replaceAll(' ','-')
//     return s1.toUpperCase()
//
//
// }
//
// console.log(insert_dash(str));

//---------------------------------------------

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// let sortA = function (n){
//     let empty =[]
//     for (let i = 0; i < n; i++) {
//         empty.push(Math.round(Math.random()*100))
//         empty.sort()
//
//     }
//      return console.log(empty)
// }
//
// sortA(25)

//-------------------------------------------

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// let sortA = function (n){
//     let empty =[]
//     for (let i = 0; i < n; i++) {
//         empty.push(Math.round(Math.random()*100))
//         empty.sort()
//
//     }
//     return empty.filter(value =>{
//         if (value%2===0){
//            console.log(value)
//         }
//     })
// }
//
// sortA(25)

//------------------------------------------

//     - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
//
// function normalize(a1,a2,a3){
//     console.log(a1.replaceAll('..', ' '));
//     console.log(a2.replaceAll('---', ' '));
//     console.log(a3.replaceAll('__', ' '));
// }
//
// normalize(n1,n2,n3)

//--------------------------------------------

// Створити функцію-валідатор для адрес електронної пошти.

// let str = 'someemail@gmail.com'
// let val= str.indexOf('@')
// console.log( str.indexOf('@')!==-1 && !!str.indexOf('.',val+2)&& val!==0 && str.endsWith('.com'))

//-----------------------------------------------

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать'
// let n = 7
// console.log(str.slice(0,n))


coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];



let newA = coursesArray[1].modules.toString()
console.log(newA)


// let s1 = coursesArray.reduce((previousValue, currentValue) =>{
//     if (currentValue.modules.toString().includes('QA/QC')){
//         previousValue.P250.push(currentValue.title,currentValue.monthDuration)
//     }
//     if (currentValue.pages===500){
//         previousValue.P500.push(currentValue)
//     }
//     if (currentValue.pages===300){
//         previousValue.P300.push(currentValue)
//     }
//     return previousValue
//
// } ,{P250:[],P500:[],P300:[]})
//
// console.log(s1);



