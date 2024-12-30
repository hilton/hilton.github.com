// Populates the table body with films data.
const renderProjects = () => {
	const tbody = document.querySelector('tbody')
	fetchJson('films.json').then(films => {
		films.forEach(film => {
			const tr = document.createElement('tr')
		 	tr.innerHTML = `
				<td>${film.id}</td>
				<td><a href="project.html#${film.id}">${film.title}</a></td>
				<td>${film.director}</td>
				<td>${film.producer}</td>
				<td>${film.released}</td>`
			tbody.appendChild(tr)
		})
	})
	.catch(renderError)
}

// Populates the title h1, opening crawl paragraph, and roles list
const renderProject = () => {
	const filmId = window.location.hash.replace('#', '')
	fetchJson(`film/${filmId}.json`).then(film => {
		document.title = `${film.title} – Project`
		document.querySelector('#name').textContent = `Phase ${film.episode}: ${film.title}`
		document.querySelector('#context').textContent = film.opening_crawl
		const roles = document.querySelector('#roles')
		film.characters.forEach(person => {
			const li = document.createElement('li')
			li.innerHTML = `<a href="role.html#${person.id}">${person.name}</a>`
			roles.appendChild(li)
		})
	})
	.catch(renderError)
}

// Populates the title h1, opening crawl paragraph, and roles list
const renderRole = () => {

	// Adds a properties table row.
	const renderProperty = (table, label, value) => {
		const tr = document.createElement('tr')
		tr.innerHTML = `<tr><th>${label}</th><td>${value}</td></tr>`
		table.append(tr)
	}

	const personId = window.location.hash.replace('#', '')
	fetchJson(`person/${personId}.json`).then(person => {
		document.title = `${person.name} – Project role`
		document.querySelector('#name').textContent = person.name
		const table = document.querySelector('table')
		renderProperty(table, 'Born', person.born)
		renderProperty(table, 'Gender', person.gender)
		renderProperty(table, 'Height', `${person.height} cm`)
		renderProperty(table, 'Mass', `${person.mass} kg`)
		renderProperty(table, 'Skin', person.skin)
		renderProperty(table, 'Hair', person.hair)
		renderProperty(table, 'Eyes', person.eyes)
	})
	.catch(renderError)
}

// Returns a JSON promise for data fetched from the given URL by HTTP.
const fetchJson = (url) => {
	return fetch(url)
		.then(response => {
			if (response.ok) {
				console.log(`GET ${url}\n${response.status} ${response.statusText}`)
			}
			else {
				throw new Error(` GET ${url}\nResponse: ${response.status} ${response.statusText}`);
			}
			return response.json()
		})
}

// Logs an error and renders the error page
const renderError = error => {
	console.error(error)
	const body = document.querySelector('body')
	body.innerHTML = ''
	body.className = 'error'
}