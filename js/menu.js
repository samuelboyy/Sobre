let count = 0;
let info = '';

let coffeeList = document.getElementById('coffee-list');
let catagory = 'classic';
info = '';
for(let c of allCoffees){
    let currentCoffeeItem = document.getElementById('coffee-' + c.catagory);
    let price1;
    let price2;

    if(c.catagory === 'twist'){
        price1 = '';
        c.priceS == '' ? price2 = '' : price2 = c.priceS + '.';
    }else{
        c.priceM == '' ? price1 = '' : price1 = c.priceM + '.';
        c.priceL == '' ? price2 = '' : price2 = c.priceL + '.';
    }

    currentCoffeeItem.innerHTML += `
    <div id="coffee${toCamelCase(c.nameEN)}"class="coffee-content">
        <div class="coffee-content--main">
            <h4>${c.nameEN}</h4>
            <h5>${c.nameCN}</h5>
        </div>
        <div class="coffee-content--price">
            <p>${price1}</p>
            <p>${price2}</p>
        </div>
    </div>`
}


let bakeryList = document.getElementById('bakery-list');
count = 0;
info = '';

for(let b of allBakeries){
    count++;
    
    info += `
    <div id="bakery${toCamelCase(b.nameEN)}" class="bakery-content">
        <div class="bakery-content--main">
        <h3>${b.nameEN}</h3>
        <h4>${b.nameCN}</h4>
        </div>
        <h5>${b.price}.</h5>
    </div>`;
    
    if(count % 4 === 0 | count === allBakeries.length){
        bakeryList.innerHTML += `
        <li class="bakery-item">
            <img src="./images/bread${count}.png" alt="">
            <div class="bakery-content--wrapper">
            ${info}
            </div>
        </li>`;
        
        info = '';
    }
};

let cocktailList = document.getElementById('cocktail-list');
let cocktailTable = document.getElementById('cocktail-overall-table');

for(let c of allCocktails){
    cocktailList.innerHTML += `
    <li id="cocktail${c.number}" class="cocktail-item noShow">
        <img src="./images/menu-cocktail${c.number}.png" alt="">
        <div class="cocktail-content">
            <div class="cocktail-content--main">
                <h3>${c.number}. ${c.nameCN}</h3>
                <p>${c.baseCN}<br>
                ${c.baseEN}</p>
            </div>
            <div class="cocktail-content--stats">
                <h4>$${c.price}</h4>
                <p class="perc">${c.percentage}</p>
            </div>
        </div>
    </li>`
    
    cocktailTable.innerHTML += `
    <tr>
        <td width="15%">${c.number}</td>
        <td width="55%">
            <h4>${c.nameCN}</h4>
            <p>${c.baseCN}</p>
        </td>
        <td width="15%">${c.percentage}</td>
        <td width="15%">${c.price}.</td>
    </tr>`
};


let snacksList = document.getElementById('snacks-list');
let snacksTable = document.getElementById('snacks-overall-table');

count = 0;
for(let s of allSnacks){
    count++;
    if(s.nameEN.includes('Pizza')){
        snacksList.innerHTML += `
        <li id="snacks${toCamelCase(s.nameEN)}" class="snacks-item pizza">
            <div class="snacks-content">
                <h3>${s.nameEN}</h3>
                <h4>${s.nameCN}</h4>
            </div>
            <h5>${s.price}.</h5>
        </li>`
    }else{
        snacksList.innerHTML += `
        <li id="snacks${toCamelCase(s.nameEN)}" class="snacks-item fries">
            <div class="snacks-content">
                <h3>${s.nameEN}</h3>
                <h4>${s.nameCN}</h4>
            </div>
            <h5>${s.price}.</h5>
        </li>`
    }
    
    snacksTable.innerHTML += `
    <tr>
    <td width="15%">${count}</td>
    <td width="70%">
    <h4>${s.nameEN}</h4>
    <p>${s.nameCN}</p>
    </td>
    <td width="15%">${s.price}.</td>
    </tr>`
}

let cocktails = document.querySelectorAll('.cocktail-item');
window.addEventListener('scroll', () =>{
    cocktails.forEach(item =>{
        if(isInViewPort(item)){
            item.classList.remove('noShow');
        }
    })
})