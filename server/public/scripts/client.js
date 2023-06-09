console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click' , addJoke);
    $('#deleteJokeButton').on('click' , clearJoke);

    getJokes();

}

// let whoseJoke = $('#whoseJokeIn').val();
// let jokeQuestion = $('#questionIn').val();
// let punchLine = $('#punchlineIn').val();

function addJoke() {

    let whoseJoke = $('#whoseJokeIn').val();
    let jokeQuestion = $('#questionIn').val();
    let punchLine = $('#punchlineIn').val();

    console.log("Joke button working!!");
    
    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: {
            whoseJoke,
            jokeQuestion,
            punchLine
        }

    }).then(function(response){
        console.log('Success! ' , response);
        getJokes();
    }).catch(function(error){
        console.log('POST /jokes error' , error);
    });
};

function getJokes() {

    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(function(response){
        console.log('Success' , response)
        renderToDom(response);
    }).catch(function(error){
        console.log('History error ' , error)
    });
};

function renderToDom(jokes){

    $('#outputDiv').empty();

    for (joke of jokes){
        $('#outputDiv').append(`
    
    <li>${joke.whoseJoke} ${joke.jokeQuestion} ${joke.punchLine}</li>
    

    `);
    }

    
};

function clearJoke(){

    // clearing input fields button.

    $('#whoseJokeIn').val('');
    $('#questionIn').val('');
    $('#punchlineIn').val('');

};