function mostrarDatos(idSerie) {
    const app = document.getElementById('app');
    fetch(`https://api.tvmaze.com/shows/${idSerie}`)
        .then(response => response.json())
        .then(data => {
            app.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.image ? data.image.original : 'https://via.placeholder.com/210x295'}" alt="${data.name}" width="200" height="300">
                <p><strong>Géneros:</strong> ${data.genres.join(', ')}</p>
                <p><strong>Resumen:</strong> ${data.summary}</p>
                <p><strong>Duración:</strong> ${data.runtime} minutos</p>
                <p><strong>Año de estreno:</strong> ${data.premiered}</p>
            `;
        })
        .catch(error => {
            app.innerHTML = "<p>No se pudo obtener la información de la serie.</p>";
            console.log(error);
        });
}
