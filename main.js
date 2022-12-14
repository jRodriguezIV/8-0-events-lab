// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const pal = document.querySelectorAll("#palette")
const currColor = document.querySelector("#current-color")


pal.forEach(el => {
  el.addEventListener("click", e =>{
    console.log(e.path[0].style.background)
    currColor.setAttribute("style", `background: ${e.path[0].style.background}`)
  })
})

const cells = document.querySelectorAll(".cell")
console.log(cells)

cells.forEach(el => {
  el.addEventListener("click", e => {
    e.path[0].setAttribute("style", `background: ${currColor.style.background}`)
    // console.log(e.path[0])
    // console.log(currColor.style.background)
  })
})