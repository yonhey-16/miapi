let series = [];
let totalSeries = 1500; // Esto puede variar según el número total de series disponibles en la API

async function conexionLista() {
    const res = await fetch('https://api.tvmaze.com/shows?page=1&limit=1500') // Reemplazar con la URL correcta para obtener las series
    const data = await res.json();
    return data;
}

async function General() {
    const infoSeries = await conexionLista();
    mostrarLista(infoSeries);
}

function mostrarLista(infoSeries) {
    const app = document.getElementById("app");
    let listaSeries = '<section class="c-lista">';

    infoSeries.forEach(serie => {
        listaSeries += `
            <div class="c-lista-serie">
                <img src="${serie.image ? serie.image.medium : 'https://via.placeholder.com/210x295'}" alt="${serie.name}" width="150" height="225">
                <h3>${serie.name}</h3>
                <p>${serie.genres.join(', ')}</p>
            </div>
        `;
    });

    listaSeries += "</section>";
    app.innerHTML = listaSeries;
}
