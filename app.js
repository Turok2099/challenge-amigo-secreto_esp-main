const amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = "";

  renderizarLista();
}

function renderizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `✔️ ${amigo}`;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) return;

  const indice = Math.floor(Math.random() * amigos.length);
  const seleccionado = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li class="resultado-item">✅ El amigo secreto es: <strong>${seleccionado}</strong></li>`;

  // 🧹 Limpiar la lista de amigos
  amigos.length = 0;

  // 🧼 Refrescar visualmente
  renderizarLista();
}
