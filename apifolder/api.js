document.getElementById("buscarpersonaje").addEventListener("click", buscarpersonaje);

function buscarpersonaje() {
    const nombre = document.getElementById("personaje-id").value.toLowerCase();
    const url = `https://rickandmortyapi.com/api/character/?name=${nombre}`;

    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error("Personaje no encontrado");
            }
            return res.json();
        })
        .then(data => {
            if (!data.results || data.results.length === 0) {
                throw new Error("Personaje no encontrado");
            }

            // Seleccionamos los primeros dos personajes (si hay más de uno)
            const personajes = data.results.slice(0, 3);

            // Limpiamos el contenedor antes de agregar los nuevos resultados
            const contenedor = document.getElementById("personajes-container");
            contenedor.innerHTML = "";

            personajes.forEach(personaje => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <h2>${personaje.name.toUpperCase()}</h2>
                    <img src="${personaje.image}" alt="${personaje.name}">
                    <p>ID: ${personaje.id} | STATUS: ${personaje.status} | SPECIES: ${personaje.species} | 
                    GENDER: ${personaje.gender} | ORIGIN: ${personaje.origin.name} | LOCATION: ${personaje.location.name}</p>
                `;
                contenedor.appendChild(div);
            });
        })
        .catch(err => {
            document.getElementById("personajes-container").innerHTML = "<p>Personaje no encontrado</p>";
        });
}
