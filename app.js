
function loadBiomes() {
    const container = document.getElementById('biomesList');
    container.innerHTML = biomesData.map(biome => `
        <a href="#${biome.name.toLowerCase().replace(/\s+/g, '-')}" 
           class="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer">
            <span class="text-xl">${biome.name}</span>
        </a>
    `).join('');
}


document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = biomesData.filter(biome => 
        biome.name.toLowerCase().includes(searchTerm)
    );
    
    document.getElementById('biomesList').innerHTML = filtered.map(biome => `
        <a href="#${biome.name.toLowerCase().replace(/\s+/g, '-')}" 
           class="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition cursor-pointer">
            <span class="text-xl">${biome.name}</span>
        </a>
    `).join('');
});


function showBiomeDetails(biomeId) {
    const biome = biomesData.find(b => b.id === biomeId);
    if (!biome) return;

    document.getElementById('biomeTitle').textContent = biome.name;
    
    
    const tableBody = document.getElementById('pokemonTable');
    tableBody.innerHTML = biome.pokemons.map(pokemon => `
        <tr class="border-b border-gray-700">
            <td class="px-6 py-4 flex items-center">
                <img src="${pokemon.sprite}" class="w-12 h-12 mr-3" alt="${pokemon.name}">
                ${pokemon.name}
            </td>
            <td class="px-6 py-4">${pokemon.time}</td>
            <td class="px-6 py-4" innerHTML="${pokemon.condition}"></td>
        </tr>
    `).join('');

 
    document.getElementById('biomesList').classList.add('hidden');
    document.getElementById('biomeDetails').classList.remove('hidden');
}


function hideDetails() {
    document.getElementById('biomesList').classList.remove('hidden');
    document.getElementById('biomeDetails').classList.add('hidden');
    window.location.hash = ''; 
}


function loadBiomeFromHash() {
    const hash = window.location.hash.substring(1); 
    if (!hash) return;

 
    const biomeName = hash.replace(/-/g, ' ');
    const biome = biomesData.find(b => b.name.toLowerCase() === biomeName);
    if (biome) {
        showBiomeDetails(biome.id);
    }
}


window.onload = () => {
    loadBiomes();
    loadBiomeFromHash(); 
};


window.addEventListener('hashchange', loadBiomeFromHash);
