const menu = {
    breakfast: [{
            name: "Biscuits and gravy",
            isVegetarian: false,
            isVegan: false,
            description: "Two biscuits and some gravy!",
            price: 4,
            photo: ""
        },
        {
            name: "Granola",
            isVegetarian: true,
            isVegan: true,
            description: "Fruit, granola, and yogurt.",
            price: 3,
            photo: ""
        },
        {
            name: "Breakfast Tacos",
            isVegetarian: false,
            isVegan: false,
            description: "Tacos. In your face!",
            price: 8,
            photo: ""
        },
        {
            name: "Pancakes",
            isVegetarian: true,
            isVegan: false,
            description: "A stack of yum",
            price: 7,
            photo: ""
        },
    ],
    lunch: [{
            name: "Burger",
            isVegetarian: false,
            isVegan: false,
            description: "The taste of freedom",
            price: 9,
            photo: ""
        },
        {
            name: "Salad",
            isVegetarian: true,
            isVegan: true,
            description: "The taste of vegetables",
            price: 7,
            photo: ""
        },
        {
            name: "BLT",
            isVegetarian: false,
            isVegan: false,
            description: "It's like a salad, but it's a sandwich. And there's bacon.",
            price: 7,
            photo: ""
        },
        {
            name: "Veggie Soup",
            isVegetarian: true,
            isVegan: true,
            description: "Because it's cold outside",
            price: 0,
            photo: ""
        },
    ],
    dinner: [{
            name: "Trout",
            isVegetarian: true,
            isVegan: false,
            description: "So healthy!",
            price: 11,
            photo: ""
        },
        {
            name: "Steak",
            isVegetarian: false,
            isVegan: false,
            description: "Because meat",
            price: 13,
            photo: ""
        },
        {
            name: "Veggie Kebabs",
            isVegetarian: true,
            isVegan: true,
            description: "Food on sticks",
            price: 9,
            photo: ""
        },
        {
            name: "Hummus Plate",
            isVegetarian: true,
            isVegan: true,
            description: "It's like an appetizer, but bigger.",
            price: 8,
            photo: ""
        },
    ],
    desserts: [{
            name: "Ice cream",
            isVegetarian: true,
            isVegan: false,
            description: "There's always room for ice cream",
            price: 4,
            photo: ""
        },
        {
            name: "Cheesecake",
            isVegetarian: true,
            isVegan: false,
            description: "There's always room for cheesecake",
            price: 5,
            photo: ""

        },
        {
            name: "Torte",
            isVegetarian: true,
            isVegan: false,
            description: "There's always room for fancy cake",
            price: 6,
            photo: ""

        }
    ]
};

var test = ['test', 'test2', 'yesJonathan'];

const linkHolder = document.querySelector(".js-main-content");
const lister = document.querySelector('.js-menu');
/*
function makeElement(type, text) {
    const el = document.createElement(type);
    const textNode = document.createTextNode(text);

    el.appendChild(textNode);
    return el;
}
*/
function appendToSelector(selectorForContainer, elementToAppend) {
    const container = document.querySelector(selectorForContainer);
    container.appendChild(elementToAppend);
}
.map(appendToSelector.bind(null, '.js-menu'))
//.bind lets you pre-assign arguments for your function. Use null for the first argument
.map((item) => {
    appendToSelector('.js-menu', item)
})
// Iterates through the array, passes one argument to the selector. Anonymous function gets a call, it passes the info to appendToSelector, to pass it

function append(parent, el) {
    return parent.appendChild(el); //Append the second parameter(element) to the first
}

function getCategories(obj) {
    return Object.keys(obj);
}

function createNode(element) {
    return document.createElement(element); // Create the type of element
}

function append(parent, el) {
    return parent.appendChild(el); //Append the second parameter(element) to the first
}

function nameToListItem(text) {
    let li = createNode('li');
    li.textContent = text;
    return li;
}

function categoriesToListItem(anArr) {
    let listArray = anArr.map(function (item) {
        return nameToListItem(item);

        // let listArray = anArr.map((item) => 
        //         nameToListItem(item)) 

    })
    return listArray;
};

function append(parent, el) {
    return parent.appendChild(el);
}

function final(aList) {
    let finalList = aList.map(function (item) {
        return append(lister, item)
    })
    return finalList;
}

/*
function buttonTest() {
    let btest = results.map(function(item) {
        document.createElement('BUTTON')
})
    return item;
};
*/



let categoryResults = getCategories(menu)
let listedResults = categoriesToListItem(categoryResults);
let results = final(listedResults)

function addClicker(arr) {
    arr.forEach((item => {
        item.addEventListener('click', (e) => {
            // Yerrr
        });
    }));
}
addClicker(results)

function nameChecker(name) {
    if (name === "breakfast") {
    return menu.breakfast;
} else if (name === "lunch") {
    return menu.lunch;
} else if (name === "dinner") {
    return menu.dinner;
} else if (name === "desserts") {
    return menu.desserts;
} else {
    console.log('Item not offered')
}
}
objTest =
{
    name: "Ice cream",
    isVegetarian: true,
    isVegan: false,
    description: "There's always room for ice cream",
    price: 4,
    photo: ""
}

function itemToCard(aObj) {

}

function makeElement(type, text) {
    const el = document.createElement(type);
    const textNode = document.createTextNode(text);
    
    el.appendChild(textNode);
    
    return el;
  }
  
  let h2 = (text) => makeElement(`h2`, objTest.name);
  let h3 = (text) => makeElement(`h3`, objTest.price)
  // and then

  document.body.appendChild(h2(`Hello, world.`));
  document.body.appendChild(h3(`Yer`));

  
  let tester = makeElement('Div', 'Testing123')
  document.body.appendChild(tester)
  document.querySelector('.Testing123').appendChild(h2(`Hello, world.`));

/*
function addClicker(arr) {
    let buttons = arr.map((item => {
        document.createElement()
        item.addEventListener('click', (e) => {
            e.preventDefault();
        });
    }));
    return buttons;
}
addClicker(results)
*/
// Write a function that transforms an array of category names to an array of <li> elements

/*
lister.innerHTML = //'<ul>' +
    Object.keys(menu).map(function (items) {
        return '<li>' + items + '</li>'
    }).join(''); //'</ul' >

*/