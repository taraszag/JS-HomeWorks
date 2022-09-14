'use strict'

const list = document.querySelector("body")

function showDom(val,level = 1) {
  let val2 = Array.from(val)
  val2.forEach((el, index) => {
    console.log(level, index, el.nodeType, el.nodeName, el.className)
    if (val.length != 0) {
      showDom(val[index].children,level+1)
    }
  });
}
showDom(list.children)



// // if (list.childNodes.length!=0) {}

// let val = Array.from(list.children);
// val.forEach((el, index) => {
//   console.log(level, index, el.nodeType, el.nodeName, el.className)
// });

// val = Array.from(list.children[0].children)
// val.forEach((el, index) => {
//   console.log(level + 1, index, el.nodeType, el.nodeName, el.className)
// });

// val = Array.from(list.children[0].children[0].children)
// val.forEach((el, index) => {
//   console.log(level + 2, index, el.nodeType, el.nodeName, el.className)
// });

// val = Array.from(list.children[0].children[0].children[0].children)
// val.forEach((el, index) => {
//   console.log(level + 3, index, el.nodeType, el.nodeName, el.className)
// });

// val = Array.from(list.children[0].children[1].children)
// val.forEach((el, index) => {
//   console.log(level + 3, index, el.nodeType, el.nodeName, el.className)
// });

// val = Array.from(list.children[0].children[1].children[0])
// val.forEach((el, index) => {
//   console.log(level + 4, index, el.nodeType, el.nodeName, el.className)
// });

// val = Array.from(list.children[0].children[1].children[0])
// val.forEach((el, index) => {
//   console.log(level + 4, index, el.nodeType, el.nodeName, el.className)
// });



// // let items = document.querySelector("body")
// // let val1 = Array.from(items.children)

// // console.log(val1)


// for (var i = 0; i < document.body.childNodes.length; i++) {
//   console.log(document.body.childNodes.length > 0);
// }
