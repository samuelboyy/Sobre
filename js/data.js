class DJList {
    constructor(date, day, names) {
        this.date = date;
        this.day = day;
        this.names = names;
    }
}
//  ---------------- Products Info ----------------
class Product {
    constructor(nameCN, nameEN, price) {
        this.nameCN = nameCN;
        this.nameEN = nameEN;
        this.price = price;
    }
}
class Coffee extends Product {
    constructor(catagory, nameCN, nameEN, priceS, priceM, priceL) {
        super(nameCN, nameEN);
        this.catagory = catagory;
        this.priceS = priceS;
        this.priceM = priceM;
        this.priceL = priceL;
    }
}
class Bakery extends Product {
    constructor(nameCN, nameEN, price) {
        super(nameCN, nameEN, price);
    }
}
class Cocktail extends Product {
    constructor(number, nameEN, price, baseCN, baseEN, percentage) {
        super(nameEN, price);
        this.number = number;
        this.price = price;
        this.baseCN = baseCN;
        this.baseEN = baseEN;
        this.percentage = percentage;
    }
}
class Snack extends Product {
    constructor(nameCN, nameEN, price) {
        super(nameCN, nameEN, price);
    }
}

branch1DJ = [
    new DJList('8/23', 'Fri', `Kush / Lil'Jo / JYT`),
    new DJList('8/24', 'Sat', `ChaoYang / Lil'Jo / JYT`),
    new DJList('8/25', 'Sun', `ChaoYang / Lil'Jo`)
]
branch2DJ = [
    new DJList('8/23', 'Fri', `JYT / ChaoYag / Lil'Jo`),
    new DJList('8/24', 'Sat', `JYT / Pepsi / Lil'Jo`),
    new DJList('8/25', 'Sun', `Lil'Jo / Joshy`)
];

allCoffees = [
    new Coffee('classic', '美式咖啡', 'Americano', '', 60, 75),
    new Coffee('classic', '拿鐵', 'Latte', '', 80, 100),
    new Coffee('classic', '香草拿鐵', 'Vanilla Latte', '', 80, 110),
    new Coffee('classic', '黑糖拿鐵', 'Brown Sugar Latte', '', 80, 110),
    new Coffee('classic', '榛果拿鐵', 'Hazelnut Latte', '', 80, 110),
    new Coffee('classic', '摩卡拿鐵', 'Mocha Latte', '', 80, 110),
    new Coffee('classic', '燕麥奶拿鐵', 'Oat Milk Latte', '', 80, 120),
    new Coffee('classic', '儂索拿鐵', 'Espresso Latte', '', 80, 125),

    new Coffee('special', '維也納咖啡', 'Viennese Coffee', '', 80, 100),
    new Coffee('special', '焦糖瑪奇朵', 'Caramel Macchiato', '', 95, 115),
    new Coffee('special', '青檸氣泡美式', 'Americano Lemonade', '', 90, ''),
    new Coffee('special', '可可娜拿鐵', 'Coconut Latte', '', 80, 100),
    new Coffee('special', '貝禮詩拿鐵', 'Baileys Latte', '', 95, 115),

    new Coffee('tea', '鮮奶茶', 'Tea Latte', '', 70, 80),
    new Coffee('tea', '玫瑰蜜桃果茶', 'Rose & Peach', '', 55, ''),
    new Coffee('tea', '夏威夷果茶', 'Hawaii', '', 55, ''),

    new Coffee('twist', '雲朵咖啡', 'Sober Cloud', 80, '', ''),
    new Coffee('twist', '西西里', 'Espresso Romano', 80, '', ''),
    new Coffee('twist', '小白拿鐵', 'Flat White', 75, '', ''),
    new Coffee('twist', '卡布奇諾', 'Cappuccino', 75, '', ''),

    new Coffee('others', '抹茶歐雷', 'Matcha Olay', '', 80, 95),
    new Coffee('others', '巧克力', 'Cocoa', '', 80, ''),
    new Coffee('others', '牛奶', 'Milk', '', 80, 90)
];
allBakeries = [
    new Bakery('原味鹽麵包', 'Salt Bread', 38),
    new Bakery('伯爵茶鹽麵包', 'Earl Grey Salt Bread', 40),
    new Bakery('鮮奶油鹽麵包', 'Fresh Cream Salt Bread', 40),
    new Bakery('墨西哥辣椒蕃茄鹽麵包', 'Mexican Chili Tomato Salt Bread', 45),

    new Bakery('檸檬塔醬鹽麵包', 'Lemon Tart Stuffed Salt Bread', 45),
    new Bakery('紅豆奶油鹽麵包', 'Red Bean Cream Salt Bread', 45),
    new Bakery('德式香腸鹽麵包', 'German Sausage Salt Bread', 48),
    new Bakery('起司乳酪丁鹽麵包', 'Cheese Cubes Salt Bread', 48),

    new Bakery('青蔥奶油乳酪鹽麵包', 'Scallion Cream Cheese Salt Bread', 53),
    new Bakery('榛果巧克力鹽麵包', 'Hazelnut Chocolate Salt Bread', 53),
    new Bakery('開心果奶油乳酪鹽麵包', 'Pistachio Cream Cheese Salt Bread', 53),
    new Bakery('黑松露鹽麵包', 'Truffle Salt Bread', 55),
    
    new Bakery('蒜味奶油乳酪鹽麵包', 'Garlic Cream Cheese Salt Bread', 55),
    new Bakery('起司馬鈴薯培根鹽麵包', 'Cheese Potato Bacon Salt Bread', 55),
    new Bakery('培根蘆筍鹽麵包', 'Bacon Asparagus Salt Bread', 55),
]

allCocktails = [
    new Cocktail(1, 'Sangria Sherry', 250,
        '柳橙 / 檸檬 / 紅酒 / 雪莉酒',
        'Orange / Lemon / Red Wine / Sherry', '12%'),

    new Cocktail(2, 'Rose Sour', 250, 
        '玫瑰 / 覆盆子 / 榛果 / 伏特加',
        'Rose / Raspberry / Hazelnut / Vodka', '19%'),

    new Cocktail(3, 'Jasmine Spritz', 250, 
        '茉莉花 / 蜂蜜 / 金萱茶 / 琴酒',
        'Jasmine / Honey / Jin Xuan Tea / Gin', '17%'),

    new Cocktail(4, 'Pineapple Punch', 250, 
        '百香果 / 鳳梨 / 龍舌蘭',
        'Passion Fruit / Pineapple / Tequila', '13%'),

    new Cocktail(5, 'Basil Breeze', 300, 
        '羅勒 / 葡萄柚 / 金萱茶 / 琴酒',
        'Basil / Grapefruit / Jin Xuan Tea / Gin', '18%'),

    new Cocktail(6, 'Rabbit Fruit', 250, 
        '梨子 / 莓果 / 香草 / 伏特加',
        'Pear / Berry / Vanilla / Vodka', '15%'),

    new Cocktail(7, 'Orange Day', 300, 
        '橘子 / 蜂蜜 / 小荳蔻 / 琴酒', 
        'Orange / Honey / Cardamom / Gin', '15%'),

    new Cocktail(8, 'Sober Ice Tea', 300, 
        '伏特加 / 琴酒 / 蘭姆酒 / 櫻桃', 
        'Vodka / Gin / Rum / Cherry', '23%'),

    new Cocktail(9, 'Daily Mocktail', 150, 
        '無酒精飲料', 
        'Non-Alcoholic Beverage', '0%'),

]

allSnacks = [
    new Snack('經典起司披薩', 'Classic Cheese Pizza', 120),
    new Snack('煙燻培根披薩', 'Smoked Bacon Pizza', 160),
    new Snack('酪梨披薩', 'Avocado Pizza', 150),
    new Snack('蒜香菠菜披薩', 'Garlic Spinach Pizza', 150),
    new Snack('義式臘腸披薩', 'Pepperoni Pizza', 160),
    new Snack('雙椒辣牛披薩', 'Double Chili Pizza', 160),
    new Snack('明太子烤雞披薩', 'Mentaiko Grilled Chicken Pizza', 160),
    new Snack('蘆筍鮮蝦披薩', 'Asparagus Shrimp Pizza', 160),
    new Snack('松露醬薯條', 'Truffle French Fries', 200),
]