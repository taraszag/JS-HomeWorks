// let obj = {
//     a: 1,
//     "b": true,
//     "with space": "Hi",
//   }
  
//   console.log(obj);
  
//   console.log(obj.a);
//   console.log(obj.b);
//   console.log(obj["with space"]);
//   console.log(obj["a"]);
//   const a = "with space";
//   console.log(obj[a]);
  
//   obj.c = [1, 2, 3];
//   console.log(obj);
  
//   obj['new field'] = "some value";
//   console.log(obj);
  
  const myPhoneBook = {};
  
  let name = "John";
  let phone = "234134151";
  
  myPhoneBook[name] = phone; // John -> 234134151
  myPhoneBook["Peter"] = "234134141";
  console.log(myPhoneBook);
  
  console.log(myPhoneBook["John"]);
  
  // iteration over object
  let searchName = "";
  for (const k in myPhoneBook) {
    if (myPhoneBook[k] == phone) {
      searchName = k;
      break;
    }
  }
  
  console.log(searchName);
  
//   // iteration over array
//   const fruits = ["apple", "banana", "orange", "lime"];
//   for (const f of fruits) {
//     console.log(f);
//   }
  
  
//   obj["1"] = "hi";
//   obj[1] = true;
//   console.log(obj)
  
  
  
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


  { console.log(clients.map(obj=> ({name:obj.name, prices:obj.goods.reduce((prev, cur) => prev + prices[cur], 0)}
  )).sort((a, b) => b.prices - a.prices ))}
  
  // console.log (clients[0].goods[prices].reduce((prev, cur) => prev + cur, 0));

//   {console.log(clients.sort((a, b) => b.goods.length - a.goods.length ).filter(g => g.goods.length>=2)) }

// {console.log(clients.sort((a, b) => b.goods.length - a.goods.length )
//   .filter(g => g.goods.length>=2)
//   .map(obj=> ({name:obj.name, goods:obj.goods, lenGoods:obj.goods.length})))}


  console.log (clients[0].goods.reduce((prev, cur) => prev + prices[cur], 0));