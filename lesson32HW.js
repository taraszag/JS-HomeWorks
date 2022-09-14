// H.A. # 2

const prices = {
    milk: 1.2,
    eggs: 1.5,
    "white bread": 1.3,
    "sour cream": 2.5,
    "beer": 1.15,
    cheese: 2.5,
}

const clients = [
    {
        name: "alex",
        goods: ["milk", "milk", "sour cream"],
    }, {
        name: "bob",
        goods: ["white bread", "eggs", "sour cream", "beer", "cheese"],
    }, {
        name: "clara",
        goods: ["white bread", "sour cream"]
    }, {
        name: "diana",
        goods: ["milk"]
    }, {
        name: "eve",
        goods: ["beer", "beer", "cheese", "beer", "eggs", "sour cream"],
    }, {
        name: "frank",
        goods: ["eggs", "cheese", "white bread", "milk"],
    },
]
// Используя датасет с H.A. 31
// 1. Сортированный список клиентов с информацией об общей стоимости корзины для каждого, сортировка по стоимости корзины, в убывающем порядке
// 2. Сортированный список только тех клиентов, стоимость корины у которых превосходит 3 евро, с информацией об общей стоимости корзины для каждого, сортировка по стоимости корзины, в убывающем порядке
// 3. Сортированный список только тех клиентов, стоимость корины у которых превосходит 3 евро, с информацией об общей стоимости корзины для каждого, сортировка по самой дорогой покупке, в убывающем порядке

//#1
{
    console.log(clients.map(obj => ({ name: obj.name, totalPrice: obj.goods.reduce((prev, cur) => prev + prices[cur], 0) }
    )).sort((a, b) => b.totalPrice - a.totalPrice))
}

//#2
{
    console.log(clients
        .map(obj => ({ name: obj.name, totalPrice: obj.goods.reduce((prev, cur) => prev + prices[cur], 0) }))
        .filter(p => p.totalPrice >= 3)
        .sort((a, b) => b.totalPrice - a.totalPrice)
    )
}
//#3
{
    console.log(clients
        .map(obj => ({
            name: obj.name, 
            MaxPrice: obj.goods.reduce((prev, cur) => {
                if (prev < prices[cur])
                   { return prices[cur]}
                   else {return prev}
            },Number.NEGATIVE_INFINITY), 
            totalPrice: obj.goods.reduce((prev, cur) => prev + prices[cur], 0)
        }))

        .filter(p => p.totalPrice >= 3)
        .sort((a,b) => b.MaxPrice - a.MaxPrice)
    )
}
