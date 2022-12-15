function Display(data)
{
    for (let i = 1; i > data.length; i += 1)
    {

    }
    form1 = document.querySelector("#fruits1");
    form2 = document.querySelector("#fruits2");
    form3 = document.querySelector("#fruits3");

    display_content(form1);
    display_content(form2);
    display_content(form3);

    function display_content(checkbox){
        const checkBoxes = data.map((fruit) =>
        {
            // console.log(fruit.name);
            let option = document.createElement('option');
            option.setAttribute("value", fruit.name)
            option.innerText = fruit.name
            checkbox.appendChild(option)
            return `<option value="${fruit.name}">${fruit.name}</option>`;

        })

        // checkBoxes.forEach(fruit => {
        //     console.log(fruit);
        //     //const checkbox = document.querySelector("#checkbox");
        //     checkbox.innerHTML = fruit;
        // });
    }
}

// Use the fetch function to grab data from the ___ JSON file
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    .then((response) => response.json())
    .then((data) => Display(data));






async function DisplayNutritionValue()
{
    try{
        const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
        if(response.ok){

            const data = await response.json();

            let fname = document.getElementById("fname");
            let lname = document.getElementById("lname");
            let email = document.getElementById("email");
            let date = document.getElementById("date");
            let phone = document.getElementById("phone");
            let fruit1 = document.getElementById("fruits1");
            let fruit2 = document.getElementById("fruits2");
            let fruit3 = document.getElementById("fruits3");
            let specialcontent= document.getElementById("specialcontent")

            let thankyouform = document.getElementById("output");

            console.log(fname.value)
            text = `
            <h2>Thank you!</h2>
            <p>Information saved:</p>
            <p>Name: ${fname.value} ${lname.value}</p>
            <p>Phone: ${phone.value}</p>
            <p>Email: ${email.value}</p>
            <p>Date: ${date.value}</p>
            <p>Fruits used: ${fruit1.value}, ${fruit2.value}, and ${fruit3.value}</p>
            <p>Special instructions: ${specialcontent.value}</p>`

            thankyouform.innerHTML = text;
        }

        else
        {
            console.log(`Response not Ok ${await response.text()}`)
        }
    }

    catch(error)
    {
        console.log(`Error ${error.message}`);
    }

    
}
