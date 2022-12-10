const visitsDisplay = document.querySelector("#timesvisited");

let numVisits = Number(localStorage.getItem('visits-ls'));

if (numVisits != 0)
{
    visitsDisplay.textContent = `Number of Visits: ${numVisits}`;
}

else
{
    visitsDisplay.textContent = `This is your first visit`;
}

numVisits ++;

localStorage.setItem('visits-ls', numVisits)