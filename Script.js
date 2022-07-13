//Reading JSON file in JavaScript
fetch("./movies.json").then(response=>response.json()).then(data=>{
/*
    //declare variable
    for (var i = 0; i < 5; i++){
        var outputHTML = "<div class='card'>";
        outputHTML += "<img src='" + data[i].poster_path + "' alt='Movie Pict'>";
        outputHTML += "<p class='title'>" + data[i].title + "</p>";
        outputHTML += "</div";
        console.log(outputHTML);
        document.getElementById("container1").innerHTML = outputHTML;
    };
*/

//Data extraction to be input to the system using loop
    for (let i=1; i<=10; i++){
        var imagevar = "image" + i.toString();
        var movievar = "movie" + i.toString();
        var yearvar = "year" + i.toString();

        //Writing specified data to the system based on ID
        document.getElementById(imagevar).src = data[i-1].poster_path;
        document.getElementById(movievar).innerHTML = data[i-1].title;
        document.getElementById(yearvar).innerHTML = (data[i-1].release_date).substring(0,4);
    }

/*    
//Data extraction to be input to the system using loop
    for (let i=1; i<=20; i++){
        //Writing specified data to the system based on ID
        imagelist[i-1] = data[i-1].poster_path;
        titlelist[i-1] = data[i-1].title;
    }
*/
})

// console.log(imagelist);
// console.log(titlelist);
// console.log(typeof (imagelist) );
/*
for (let i=1; i<=20; i++){
    //Writing specified data to the system based on ID
    var imagevar = "image" + i.toString();
    var movievar = "movie" + i.toString();
    console.log(imagevar);
    document.getElementById(imagevar).src = imagelist[i-1];
    document.getElementById(movievar).innerHTML = titlelist[i-1];
}
*/