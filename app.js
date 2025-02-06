// Cargar biomas iniciales
function loadBiomes() {
    const container = document.getElementById('biomesList');
    container.innerHTML = biomesData.map(biome => `
        <div class="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer" 
             onclick="showBiomeDetails(${biome.id})">
            <span class="text-xl">${biome.name}</span>
        </div>
    `).join('');
}

// Buscador en tiempo real
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = biomesData.filter(biome => 
        biome.name.toLowerCase().includes(searchTerm)
    );
    
    document.getElementById('biomesList').innerHTML = filtered.map(biome => `
        <div class="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer" 
             onclick="showBiomeDetails(${biome.id})">
            <span class="text-xl">${biome.name}</span>
        </div>
    `).join('');
});

// Mostrar detalles del bioma
function showBiomeDetails(biomeId) {
    const biome = biomesData.find(b => b.id === biomeId);
    document.getElementById('biomeTitle').textContent = biome.name;
    
    // Llenar tabla de Pokémon
    const tableBody = document.getElementById('pokemonTable');
    tableBody.innerHTML = biome.pokemons.map(pokemon => `
        <tr class="border-b border-gray-700">
            <td class="px-6 py-4 flex items-center">
                <img src="${pokemon.sprite}" class="w-12 h-12 mr-3" alt="${pokemon.name}">
                ${pokemon.name}
            </td>
            <td class="px-6 py-4">${pokemon.time}</td>
            <td class="px-6 py-4">${pokemon.condition}</td>
        </tr>
    `).join('');

    // Mostrar sección de detalles
    document.getElementById('biomesList').classList.add('hidden');
    document.getElementById('biomeDetails').classList.remove('hidden');
}

// Volver a la lista
function hideDetails() {
    document.getElementById('biomesList').classList.remove('hidden');
    document.getElementById('biomeDetails').classList.add('hidden');
}

// Inicializar
window.onload = loadBiomes;