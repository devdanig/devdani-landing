const API = 'https://spotify23.p.rapidapi.com/playlist/?id=0TordmeJZQ6PkeI6J4YPBy?si=8bde1b8cc04d4112';
const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f6793b2bd4msh4446629093b599bp1c44a0jsn51ab513bca37',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
    try{
        const playlist = await fetchData(API)
        let view =  `
        ${playlist.tracks.items.map(cancion => `
            <div class="group relative">
                <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rouded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
            >
              <img src="${cancion.track.album.images[0].url}" alt="${cancion.track.name}" class="w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-500"> 
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${cancion.track.name}
              </h3>
            </div>
            <h2 class="text-sm text-black"> 
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${cancion.track.artists[0].name}
              </h2>
          </div>
            `).slice(0,4).join('')}
        `
        content.innerHTML = view
    } catch(error){
        console.log(error);
    }
})()