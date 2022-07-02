document.body.style.margin = "20px";
document.body.style.padding = "20px";
document.body.style.backgroundColor = '#eee';

let tempStyle;
const styleTitle = document.getElementById("title")
styleTitle.style.backgroundColor = "#A84D9B"
styleTitle.style.textAlign = 'center'
const pictures = document.getElementById("pict")
pictures.style.padding = "0px"
pictures.style.margin = "0px"
pictures.style.textAlign = "center"

tempStyle =  document.querySelector(".motto")
tempStyle.style.backgroundColor = '#FFB90E'


tempStyle = document.querySelector("h3")
tempStyle.style.backgroundColor = "#0DA897"

tempStyle = document.querySelector(".for-a-hobby")
tempStyle.style.backgroundColor = "#265CA7"

tempStyle = document.querySelector(".hobby-question")
tempStyle.style.backgroundColor = "#A84D9B"

let comptStyle = document.getElementsByClassName("hobby-question")
comptStyle[1].style.backgroundColor = "red"

let tempStyle2 = document.getElementsByTagName("h3")
console.log(tempStyle2)
tempStyle2[2].style.backgroundColor = "blue"
tempStyle2[3].style.backgroundColor = "yellow"
tempStyle2[4].style.backgroundColor = "blue"
tempStyle2[5].style.backgroundColor = "yellow"
tempStyle2[6].style.backgroundColor = "blue"

let tempStyle3 = document.getElementsByTagName("ol")
console.log(tempStyle3)