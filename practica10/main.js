async function fetchUsers() {
  const container = document.querySelector('#users-container');
  
  try {
    container.innerHTML = '<div class="col-span-full text-center">Cargando usuarios...</div>';
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const users = await response.json();
    renderUsers(users);
    
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    container.innerHTML = `
      <div class="col-span-full text-center p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        <p class="font-bold">Error al cargar los usuarios</p>
        <p>${error.message}</p>
        <button onclick="fetchUsers()" class="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Reintentar
        </button>
      </div>
    `;
  }
}

function renderUsers(users) {
  const container = document.querySelector('#users-container');
  
  container.innerHTML = users.map(user => `
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">${user.name}</h3>
        <p class="text-gray-600 mb-1"><span class="font-medium">Usuario:</span> @${user.username}</p>
        <p class="text-blue-500 truncate mb-1"><span class="font-medium text-gray-600">Email:</span> ${user.email}</p>
        <p class="text-gray-700"><span class="font-medium">Empresa:</span> ${user.company.name}</p>
      </div>
    </div>
  `).join('');
}
document.addEventListener('DOMContentLoaded', fetchUsers);