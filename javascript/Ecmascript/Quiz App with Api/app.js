let getDiv = document.getElementById('getDiv')

fetch('https://opentdb.com/api.php?amount=50&category=21&difficulty=medium&type=multiple')
.then(data => data.json())

.then(data => {
    function nextQuestion() {
    for (var i = 0; i < data.results.length; i++) {

        getDiv = `${data.results[i].question}`

        getOptions[i].checked = false
    }
    btn.disabled = true
        
}
})

.catch(err => console.log(err))

nextQuestion()