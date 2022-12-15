

const date = new Date(document.lastModified);
document.getElementById('timesvisited').innerHTML = "Date of modification on "+'<br/>'+date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+" at time : "+date.getHours()+" hours and "+date.getMinutes()+" minutes";
