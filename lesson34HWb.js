'use strict'

const list = document.querySelector("body")

function showDom(val,level = 1) {
  let val2 = Array.from(val)
  for (var i ; i < val2.length; i--) {
    if(val2[i].firstChild){
        console.log(val2[i].children[0])
    }
  }
//   val2.forEach((el, index) => {
//     console.log(level, index, el.nodeType, el.nodeName, el.className)
//     if (val.length != 0) {
//       showDom(val[index].children,level+1)
//     }
//   });
}
showDom(list.children)
