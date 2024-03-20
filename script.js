let btn=document.getElementById('btn');
let tit=document.getElementById('con');
let im=document.getElementById("ima");
btn.addEventListener('click',()=>{
    let mo=document.getElementById('search').value;
    if(mo=='')
    {
        alert('Enter the Movie Name');
    }
    
    let api=`http://www.omdbapi.com/?t=${mo}&apikey=17f4fdf0`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
                console.log(data);
                let x=data.Title;
                let y=data.Released;
                let z=data.Actors;
                let a=data.Director;
                let b=data.imdbRating;
                let l=data.Poster;
                if(!x)
                {
                  tit.innerHTML="<h1>No Movies Found</h1>";  
                  ima.innerHTML="";
                }
                else{
                ima.innerHTML=`<img src="${l}">`
                tit.innerHTML=`<div><h1> <span>Name:</span>${x}</h1><h1><span>Release:</span>${y}</h1><h1><span> Actors:</span>${z}</h1><h1><span> Director:</span>${a}</h1><h1> <span>IMDB Rating:</span>${b}</h1></div>`;
                
                }
        });
}
);

