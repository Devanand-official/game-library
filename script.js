// var over=document.querySelector(".pop-overlay")
// var pop=document.querySelector(".popupmenu")

// function popup()
// {
//     over.style.display="block"
//     pop.style.display="block"
// }

// function cancel()
// {
//     over.style.display="none"
//     pop.style.display="none"
// }

var over=document.querySelector(".pop-overlay")
var pop=document.querySelector(".popupmenu")
var add_pop_btn=document.getElementById("pop-btn")
// + Button
add_pop_btn.addEventListener("click",function(){
    over.style.display="block"
    pop.style.display="block"
    gamenam.focus()
})
// Cancel Button
var cancel_pop_btn=document.getElementById("cancel-pop")
cancel_pop_btn.addEventListener("click",function(event){
    event.preventDefault()
    over.style.display="none"
    pop.style.display="none"
})
// Add Button
var container=document.getElementById("container")
var gamenam=document.getElementById("name")
var gamechar=document.getElementById("character")
var gamedes=document.getElementById("description")

// var add_game=document.getElementById("add-game")
// add_game.addEventListener("click",function(event){
    form = document.getElementById("gamelib")
    form.addEventListener("submit",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","game-container")
    div.innerHTML=`<h1>${gamenam.value}</h1>
    <h3>${gamechar.value}</h3>
    <p>${gamedes.value}</p>
    <button onclick="del(event)">Delete</button>`

    container.append(div)
    over.style.display="none"
    pop.style.display="none"

})

function del(event)
{
    event.target.parentElement.remove()
}
