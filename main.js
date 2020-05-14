$(document) .ready (() => {
	$('#searchForm') .on('submite' (e) => {
		let searchText = $('#searchText') .val();
		getNovies(searchText);
		e.preventDefault();
		});    
	});

function getMovie(searchText){
	axios.get('https://www.omdbapi.com?s='+searchText)
	.then((response) =>{
		console.log(response);
   
        let movie = response.data.search;
        let output '';
		$.each(movie, (index, movie) =>{
			output += `
             
             <div class="col-md-3">
             <div class="well text-center">
             <img src="${movie.poster}">
             <h5>${movie.Tittle}</h5>
             <a onclick="movieselected($'{movie.imdbID'})" class="btn btn-primary" href="#">movie details</>
             </div>
             </div>

         `;
        
		});

		$('#movies').html(output);
	})
	   .catch((err) =>{
	   	console.log(err);

	   });
	}
