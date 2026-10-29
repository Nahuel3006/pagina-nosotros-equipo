async function obtenerEquipo() {
  try {
    const response = await fetch("data/miembros.json");

    if (!response.ok) throw new Error(`Error HTTP ${response.status}`);

    const miembros = await response.json();

    console.log(miembros); // Verifica que los datos se hayan cargado correctamente

    const contenedorEquipo = document.getElementById("miembros");

    if (!contenedorEquipo) {
      console.error('No se encontró el contenedor con id "miembros"');
      return;
    }

    miembros.forEach((miembro) => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4";

      const card = document.createElement("div");
      card.className = "card h-100 shadow-sm";

      const img = document.createElement("img");
      img.className = "card-img-top";
      img.src = miembro.imagen;
      img.alt = `Foto de ${miembro.nombre}`;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body d-flex flex-column";

      const nombre = document.createElement("h5");
      nombre.className = "card-title";
      nombre.textContent = miembro.nombre;

      const rol = document.createElement("h6");
      rol.className = "card-subtitle mb-2 text-muted";
      rol.textContent = miembro.rol;

      const descripcion = document.createElement("p");
      descripcion.className = "card-text";
      descripcion.textContent = miembro.descripcion;

      cardBody.appendChild(nombre);
      cardBody.appendChild(rol);
      cardBody.appendChild(descripcion);
      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      contenedorEquipo.appendChild(col);
    });
  } catch (error) {
    console.error("Error al cargar los datos del equipo:", error);
  }
}

obtenerEquipo();
