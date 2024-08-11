let file = "fetch_info.txt";

fetch(file)
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y)
.catch(error => console.log('Error:', error));

