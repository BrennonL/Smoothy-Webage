const weatherIcon = document.querySelector('#weatherIcon');


const url = 0;

function DisplayWeatherResults(data)
{
    console.log("");
}

async function apiFetch(url)
{
    try
    {
        const response = await fetch(url)

        if(response.ok)
        {
            const data = await response.json();

            console.log(data)

            DisplayWeatherResults(data);
        }

        else
        {
            console,log(`Response not Ok ${await response.text()}`);
        }
    }
    catch
    {
        console.log(`Error ${error.message}`)
    }
}


apiFetch(url)