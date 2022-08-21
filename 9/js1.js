
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];


// let member = document.getElementsByClassName('member')[0];
//
//
// for (const members of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('members');
//
//     let productTitle = document.createElement('div');
//     productTitle.innerText = members.name
//     div.appendChild(productTitle);
//
//     let productTitle1 = document.createElement('div');
//     productTitle1.innerText = members.surname
//     div.appendChild(productTitle1);
//
//     let productTitle2 = document.createElement('div');
//     productTitle2.innerText =  members.age
//     div.appendChild(productTitle2);
//
//     let productTitle3 = document.createElement('div');
//     productTitle3.innerText = members.info
//     div.appendChild(productTitle3);
//
//     let img = document.createElement('img');
//     img.src = simpsons.image;
//     div.appendChild(img);
//
//
//     member.appendChild(div);
// }

// ---------------------------

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
//
// let coursesArray = [
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
//
// let member = document.getElementsByClassName('member')[0];
//
// for (const coursesAArray of coursesArray) {
//         let div = document.createElement('div');
//         div.classList.add('members');
//
//
//         let div1 = document.createElement('h3')
//         div1.classList.add('one')
//         let coursesAArray1 = document.createElement('h3');
//         coursesAArray1.innerText = coursesAArray.title
//         div1.appendChild(coursesAArray1)
//         member.append(div1);
//
//
//         let productTitle = document.createElement('div');
//         productTitle.innerText = `monthDuration - ${coursesAArray.monthDuration}`
//         div.appendChild( productTitle)
//         member.appendChild(div);
//
//          let productTitle122 = document.createElement('div');
//          productTitle122.innerText = `hourDuration - ${coursesAArray.hourDuration}H`
//         div.appendChild( productTitle122)
//          member.appendChild(div);
//
//
//     const ul = document.createElement('ul')
//     ul.classList.add('liii')
//     for (const productTitleElement of coursesAArray.modules) {
//         let li =document.createElement('li')
//         li.innerText = productTitleElement
//         ul.appendChild(li)
//
//     }
//     member.appendChild(ul);
// }





//-------------------------------------


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
//
// let coursesAndDurationArray = [
//     {title1: 'JavaScript Complex', monthDuration: 5},
//     {title1: 'Java Complex', monthDuration: 6},
//     {title1: 'Python Complex', monthDuration: 6},
//     {title1: 'QA Complex', monthDuration: 4},
//     {title1: 'FullStack', monthDuration: 7},
//     {title1: 'Frontend', monthDuration: 4}
// ];
//
// let member = document.getElementsByClassName('member')[0];
//
//
// for (const coursesAArrayS of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('courses')
//
//
//     let coursesAArray1 = document.createElement('div');
//     coursesAArray1.innerText = coursesAArrayS.title1
//     div.appendChild(coursesAArray1);
//
//     let coursesAArray2 = document.createElement('div');
//     coursesAArray2.innerText = coursesAArrayS.monthDuration
//     div.appendChild(coursesAArray2);
//
//     member.appendChild(div);
//
// }
//------------------------------------




// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let member = document.getElementsByClassName('member')[0];
//
//
// for (const coursesAArrayS of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item')
//
//
//     let coursesAArray1 = document.createElement('h1');
//     coursesAArray1.innerText = coursesAArrayS.title
//     coursesAArray1.classList.add('heading')
//     div.appendChild(coursesAArray1);
//
//     let coursesAArray2 = document.createElement('p');
//     coursesAArray2.innerText = coursesAArrayS.monthDuration
//     coursesAArray2.classList.add('description)
//     div.appendChild(coursesAArray2);
//
//     member.appendChild(div)
//
// }

//-------------------------------------


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let form1 = document.forms.f1;
//
// form1.onsubmit = function (e) {
//     e.preventDefault();
//     let a = this.a.value;
//     if(a<18){
//         console.log('Your age is less than 18')
//     }
//     else {
//         console.log('Your age is ok')
//     }
// }
//--------------------------------------------------------------------------
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//


// let users = []
// let form1 = document.forms.f2;
//
// form1.onsubmit = function (e) {
//     e.preventDefault();
//     let name = this.name.value;
//     let age = this.age.value;
//     let user = {name,age}
//     users.push(user);
//     console.log(users);
//
// };


//----------------------------------------------

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

//
// <!doctype html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport"
// content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Title</title>
// </head>
// <body>
// <ul class="menu"></ul>
//
//
// <script src="js1.js"></script>
//
// </body>
// </html>
//
//
// let  arr = ['Main','Products','About us','Contacts']
//
// let member = document.getElementsByClassName('menu')[0];
//
//
// for (const memberElement of arr) {
//     let div = document.createElement('div');
//     div.classList.add('courses')
//
//     let member1 = document.createElement('li');
//     member1.innerText = memberElement
//     member.appendChild(member1)
// }
//
//

//-----------------------------------------------------------

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// -

//
//
//
// let div = document.createElement('div');
// div.className = "wrap" ;
// div.innerHTML = "<strong>Octen</strong> .";
//
// document.body.append(div);
//
//
// div.append(div.cloneNode(true))
//
