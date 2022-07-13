//Reading JSON file in JavaScript
fetch("./movies.json").then(response=>response.json()).then(data=>{

    for (let i=11; i<=20; i++){
        var imagevar = "image" + i.toString();
        var movievar = "movie" + i.toString();
        var yearvar = "year" + i.toString();

        //Writing specified data to the system based on ID
        document.getElementById(imagevar).src = data[i-1].poster_path;
        document.getElementById(movievar).innerHTML = data[i-1].title;
        document.getElementById(yearvar).innerHTML = (data[i-1].release_date).substring(0,4);
    }
})