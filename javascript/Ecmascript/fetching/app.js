let getDiv = document.getElementById('getDiv')
let getSearch = document.getElementById('news')
let getNews = () => {
    fetch(`https://newsapi.org/v2/everything?q=${getSearch.value}&from=2023-09-17&sortBy=publishedAt&apiKey=6cb14ade40a7471d9155f33e13cc063c`)
        .then(data => data.json())

        .then((abc) => {
            // console.log(abc.articles)
            for (let i = 0; i < abc.articles.length; i++) {
                // console.log(abc.articles[i])
                getDiv.innerHTML += `<div class="card m-3 aaa" style="width: 18rem;">
            <img src="${abc.articles[i].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${abc.articles[i].title}</h5>
              <p class="card-text">${abc.articles[i].description}</p>
              <a href="${abc.articles[i].url}" class="btn btn-primary">See More</a>
            </div>
          </div>`
            }

        })
        .catch((err) => {
            console.log(err)
        })

}
