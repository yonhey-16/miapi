var misSeries = JSON.parse(localStorage.getItem("misSeries")) || [];

function mostrarAleatorio() {
    const app = document.getElementById("app");

    let seriesAleatorias = '<section class="c-aleatorio c-lista">';

    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 1500) + 1; // El rango puede cambiar según las series disponibles en la API

        if (!misSeries.includes(num)) {
            misSeries.push(num);
            localStorage.setItem("misSeries", JSON.stringify(misSeries));
        }

        fetch(`https://api.tvmaze.com/shows/${num}`)
            .then(response => response.json())
            .then(data => {
                seriesAleatorias += `
                    <div class="c-lista-serie c-un_aleatorio">
                        <p>#${data.id}</p>
                        <img src="${data.image ? data.image.medium : 'https://via.placeholder.com/210x295'}" width="60" height="60">
                        <h3>${data.name}</h3>
                    </div>`;
            })
            .catch(error => console.log('Error al obtener los datos:', error));
    }

    seriesAleatorias += "</section>";
    app.innerHTML = seriesAleatorias;
}
