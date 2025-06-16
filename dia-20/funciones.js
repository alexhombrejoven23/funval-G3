function renderizar(cliente, elemento) {
  elemento.innerHTML += `<li>${cliente.nombre}</li>`;
}
export {  renderizar };

function clientesConCompras(clientes) {
  return clientes.filter(cliente => cliente.compras.length > 0);
}

export { cliente, clientesConCompras}
