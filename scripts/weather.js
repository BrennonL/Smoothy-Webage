const weatherIcon = document.querySelector('#weatherIcon');

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=c2cd5f54ad9d5f653c364a053f62212c'



function DisplayWeatherResults(data)
{
    console.log(data);

    weathertable = `
    <p>Temperature: ${data.list[0].main.temp} F</p>
    <p>Humidity: ${data.list[0].main.humidity}</p>
    <p>Description: ${data.list[0].weather[0].description}</p>
    <table>
    <tr>
        <th>${data.list[8].dt_txt}</th>
        <th>${data.list[16].dt_txt}</th>
        <th>${data.list[24].dt_txt}</th>
    </tr>
    <tr>
        <td>${data.list[8].main.temp} F</td>
        <td>${data.list[16].main.temp} F</td>
        <td>${data.list[24].main.temp} F</td>
    </tr>
    <tr>
        <td>${data.list[8].weather[0].description}</td>
        <td>${data.list[16].weather[0].description}</td>
        <td>${data.list[24].weather[0].description}</td>
    </tr>
    </table>`

    document.querySelector("#Weathericon").innerHTML = weathertable;
}

async function apiFetch(url)
{
    try
    {
        const response = await fetch(url)

        if(response.ok)
        {
            const data = await response.json();


            DisplayWeatherResults(data);
        }

        else
        {
            console,log(`Response not Ok ${await response.text()}`);
        }
    }
    catch
    {
        console.log(`Error!`)
    }
}


apiFetch(url)