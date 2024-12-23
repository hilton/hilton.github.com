const renderProjects = async () => {
	const tbody = document.querySelector('tbody')

	const tr = document.createElement('tr')
	tr.innerHTML = `<td>1</td><td>A New Hope</td><td>George Lucas</td><td>Gary Kurtz, Rick McCallum</td><td>1977-05-25</td>`
	tbody.appendChild(tr)

	const films = fetchFilms()
	console.log(films)
	// const rows = films.map((film) => {
	// 	const tr = document.createElement('tr')
	// 	tr.innerHTML = `<td>${film.id}</td><td>${film.name}</td><td>${film.director}</td><td>${film.producer}</td><td>${film.released}</td>`
	// 	return tr
	// })
	// rows.forEach(tr => tbody.appendChild(tr))
}

const fetchFilms = () => {
	fetch('films.json')
		.then(response => {
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}
			response.json().then(json => { return json })
		})
		.catch(error => console.error(error))
}