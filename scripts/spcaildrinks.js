let drinknum = Number(localStorage.getItem("drinks-ls"));
document.querySelector("#specialdrinks").innerHTML = `<p>Number of Drinks made: ${drinknum}</p>`