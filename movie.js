const KEY_V3 = '9be6685bac4631f374a820dd4f494cd6';
const KEY_V4 =
'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmU2Njg1YmFjNDYzMWYzNzRhODIwZGQ0ZjQ5NGNkNiIsInN1YiI6IjVjZmZjNzY5YzNhMzY4MGU5MjIxODBjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oyjNUln4LhO105RDtvlCjC9xFYi4Kaxy6AQlAHQ8hq8';
const URL_V3 = 'https://api.themoviedb.org/3/';
const URL_V4 = 'https://api.themoviedb.org/4/';
const URL_FOTO = "https://image.tmdb.org/t/p/w500/"

//   JSON.parse ( "string" ) -> structured date
//   JSON.stringify ( stuctured date ) -> "string"

///////////////   FILMELE POPULARE //////////////////
function get_popular_movies(){
    var xhr = new XMLHttpRequest();
        xhr.open( "GET", URL_V3 + 'movie/popular?api_key=' + KEY_V3);
        xhr.send();
        xhr.onload = function(){
    var data = JSON.parse(xhr.responseText);
            for( var i = 0 ; i<5 ; i++){
                console.log(data.results[i]);
    var div = document.createElement('div');
        div.className = 'card';
    var img = document.createElement('img');
        img.src = URL_FOTO + data.results[i].poster_path;
        img.className = 'card-img-top';
        div.appendChild(img);
    var div2 = document.createElement('div');
        div2.className = 'card-body'
        div.appendChild(div2);
    var h5 = document.createElement('h5');
        h5.className = "card-title";
        h5.innerText = data.results[i].title;
        div2.appendChild(h5);
    var p = document.createElement('p');
        p.className = 'card-text';
        div2.appendChild(p);
    var a = document.createElement('a');
        a.className = 'btn btn-primary';
        a.innerText = "Download";
        a.href = "#";
        div2.appendChild(a);
    var x = document.getElementsByClassName('popular-movies')[0];
        x.appendChild(div)

            }
            


            $('.popular-movies').slick({
                dots: true
            });


        }
}

get_popular_movies();









// pornim carouselul - filme populare

$(document).ready(function () {

});