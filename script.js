var over = document.querySelector(".pop-overlay");
var pop = document.querySelector(".popupmenu");
var add_pop_btn = document.getElementById("pop-btn");
// + Button
add_pop_btn.addEventListener("click", function () {
  over.style.display = "block";
  pop.style.display = "block";
  gamenam.focus();
});
// Cancel Button
var cancel_pop_btn = document.getElementById("cancel-pop");
cancel_pop_btn.addEventListener("click", function (event) {
  event.preventDefault();
  over.style.display = "none";
  pop.style.display = "none";
  form.reset();
});
// Add Button
var container = document.getElementById("container");
var gamenam = document.getElementById("name");
var gamechar = document.getElementById("character");
var gamedes = document.getElementById("description");

form = document.getElementById("gamelib");

// Load saved games from localStorage (or empty array if none)
let games = JSON.parse(localStorage.getItem("games")) || [];

// If first time, add default RDR2 game
if (games.length === 0) {
  games.push({
    id: Date.now(),
    name: "Red Dead Redemption II",
    character: "Arthur Morgan",
    description:
      "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games."
  });
  localStorage.setItem("games", JSON.stringify(games));
}

// Open popup
add_pop_btn.addEventListener("click", function () {
  over.style.display = "block";
  pop.style.display = "block";
  gamenam.focus();
});

// Cancel popup
var cancel_pop_btn = document.getElementById("cancel-pop");
cancel_pop_btn.addEventListener("click", function (event) {
  event.preventDefault();
  over.style.display = "none";
  pop.style.display = "none";
  form.reset(); // clear fields
});

// Add game
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let game = {
    id: Date.now(), // unique id
    name: gamenam.value,
    character: gamechar.value,
    description: gamedes.value,
  };

  // Save to localStorage
  games.push(game);
  localStorage.setItem("games", JSON.stringify(games));

  // Render on screen
  renderGame(game);

  // Close popup and reset
  over.style.display = "none";
  pop.style.display = "none";
  form.reset();
});

// Render single game
function renderGame(game) {
  var div = document.createElement("div");
  div.setAttribute("class", "game-container");
  div.setAttribute("data-id", game.id);
  div.innerHTML = `<h1>${game.name}</h1>
    <h3>${game.character}</h3>
    <p>${game.description}</p>
    <button onclick="del(event, ${game.id})">Delete</button>`;
  container.append(div);
}

// Delete game
function del(event, id) {
  event.target.parentElement.remove();

  // Remove from localStorage
  games = games.filter((game) => game.id !== id);
  localStorage.setItem("games", JSON.stringify(games));
}

// On page load → render all saved games
window.onload = function () {
  games.forEach((game) => renderGame(game));
};
