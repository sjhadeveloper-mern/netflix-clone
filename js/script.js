// console.log('hello');
const cardsDiv = document.querySelector('.movies-cards');

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c54dacb95631330e657284be2723541d&page=1')
.then((res)=> res.json())
.then((data)=> {
  let url = "https://media.themoviedb.org/t/p/w440_and_h660_face";
  const cards =   data.results.slice(0,10).map((user)=>{
  return `
  <div class="card">
 <img class="trending-img" src="${url + user.poster_path}">
  </div>
  
  
  
  `
  

    }).join('');

    cardsDiv.innerHTML = cards;
});

