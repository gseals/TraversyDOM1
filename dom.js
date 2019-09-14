// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);

// console.log(document.domain)
// console.log(document.URL);
// console.log(document.title)
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[11]);
// //document.all[11].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID

// console.log(document.getElementById('header-title'))
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'Goodbye'
// console.log(headerTitle.innerText)
//textContent reads the html regardless of how the HTML displays (if style: none, still shows in console)
//innerText reflects the styling choice made. in this doc, display: none is in the HTML
// headerTitle.innerHTML = '<h3>Hello</h3>'
// header.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME //

// let items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow'

// // gives error
// // items.style.backgroundColor = '#f4f4f4';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //

// let li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow'

// // gives error
// // items.style.backgroundColor = '#f4f4f4';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }


// QUERYSELECTOR // queryselector can grab anything so long as you specify correctly with CSS selectors

// let header = document.querySelector('#main-header')
// header.style.display = 'solid 4px #ccc';

// let input = document.querySelector('input')
// input.value = 'Hello World' //this grabbed the first input by default

// let submit = document.querySelector('input[type="submit"]')
// submit.value='SEND';

// let item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// let lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL // similar to getelementsbytagname/classname because it grabs more than one thing
//can run array functions on node lists
let titles = document.querySelectorAll('.title');
console.log(titles)
titles[0].textContent = 'Hello';

let odd = document.querySelectorAll('li:nth-child(odd)')
let even = document.querySelectorAll('li:nth-child(even)')

for (let i = 0; i < odd.length; i ++) {
    odd[i].style.backgroundColor = '#f4f4f4'
    even[i].style.backgroundColor = '#ccc'
}




