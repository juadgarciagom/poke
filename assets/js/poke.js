//Variables globales que acceden a elementos del DOM

let contenido = document.getElementById('contenido')
let nombre_pokemon = document.getElementById('nombre_pokemon')
let pika = document.getElementById('letrero')

//Carga de la pagina

const pikachu = async () => {
    const url = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    const imagen = await url.json()
    pika.innerHTML = `
        <img src="assets/img/Letrero.png" width="300px" alt="">
        <img src="${imagen.sprites.front_default}" width="120px" alt="">
        <p>Puedes consultar un pokemón con su nombre o generar diferentes pokemón aleatoriamente de las categorias</p>`
}

//Funciones onclick de los botones

const consulta_pokemon = async () => {
    try {
        url_nombrePokemon = 'https://pokeapi.co/api/v2/pokemon/' + nombre_pokemon.value
        const url_api = await fetch(url_nombrePokemon)
        const datos = await url_api.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
    <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipo:</strong> ${datos.types[0].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (error) {
        alert('El pokemon solicitado no existe ' + error)

    }
}

const random_pokemon = async () => {
    try {
        i = Math.floor(Math.random() * 807)
        url_nombrePokemon = 'https://pokeapi.co/api/v2/pokemon/' + i
        const url_api = await fetch(url_nombrePokemon)
        const datos = await url_api.json()
        skill = datos.abilities
        stats = datos.stats
        type2 = ""
        skill2 = ""
        if (datos.types[1]) {
            type2 = datos.types[1].type.name

        }
        if (skill[1]) {
            skill2 = skill[1].ability.name
        }

        contenido.innerHTML = `
        <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipos:</strong> ${datos.types[0].type.name}  ${type2}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} ${skill2}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body" id="estadisticas">
                            <h4>Puntos de base</h4>
                            <p>
                                Salud: ${stats[0].base_stat}
                                <br>
                                Ataque: ${stats[1].base_stat}
                                <br>
                                Defensa: ${stats[2].base_stat}
                                <br>
                                Ataque especial: ${stats[3].base_stat}
                                <br>
                                Defensa especial: ${stats[4].base_stat}
                                <br>
                                Velocidad: ${stats[5].base_stat}
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    catch (err) {
        console.log(err);
    }
}

const first_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 151)
        url_nombrePokemon = dato.results[i].url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats
        type2 = ""
        skill2 = ""
        if (datos.types[1]) {
            type2 = datos.types[1].type.name

        }
        if (skill[1]) {
            skill2 = skill[1].ability.name
        }

        contenido.innerHTML = `
    <div class="card">
    <div class="card-body text-center">
        <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
        <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
        <div id="descripcion">
            <h3>${datos.name}</h3>
            <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
            <h5><strong>Tipos:</strong> ${datos.types[0].type.name}  ${type2}</h5>
            <h5><strong>Habilidades:</strong> ${skill[0].ability.name} ${skill2}</h5>
            <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                +
            </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
    }
}

const second_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 100)
        url_nombrePokemon = dato.results[i].url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats
        type2 = ""
        skill2 = ""
        if (datos.types[1]) {
            type2 = datos.types[1].type.name

        }
        if (skill[1]) {
            skill2 = skill[1].ability.name
        }

        contenido.innerHTML = `
    <div class="card">
    <div class="card-body text-center">
        <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
        <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
        <div id="descripcion">
            <h3>${datos.name}</h3>
            <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
            <h5><strong>Tipos:</strong> ${datos.types[0].type.name}  ${type2}</h5>
            <h5><strong>Habilidades:</strong> ${skill[0].ability.name} ${skill2}</h5>
            <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                +
            </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
    }
}

const third_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 135)
        url_nombrePokemon = dato.results[i].url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats
        type2 = ""
        skill2 = ""
        if (datos.types[1]) {
            type2 = datos.types[1].type.name

        }
        if (skill[1]) {
            skill2 = skill[1].ability.name
        }

        contenido.innerHTML = `
    <div class="card">
    <div class="card-body text-center">
        <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
        <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
        <div id="descripcion">
            <h3>${datos.name}</h3>
            <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
            <h5><strong>Tipos:</strong> ${datos.types[0].type.name}  ${type2}</h5>
            <h5><strong>Habilidades:</strong> ${skill[0].ability.name} ${skill2}</h5>
            <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                +
            </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
    }
}

const fourth_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 107)
        url_nombrePokemon = dato.results[i].url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats
        type2 = ""
        skill2 = ""
        if (datos.types[1]) {
            type2 = datos.types[1].type.name

        }
        if (skill[1]) {
            skill2 = skill[1].ability.name
        }

        contenido.innerHTML = `
    <div class="card">
    <div class="card-body text-center">
        <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
        <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
        <div id="descripcion">
            <h3>${datos.name}</h3>
            <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
            <h5><strong>Tipos:</strong> ${datos.types[0].type.name}  ${type2}</h5>
            <h5><strong>Habilidades:</strong> ${skill[0].ability.name} ${skill2}</h5>
            <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                +
            </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
    }
}

const fire_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/fire'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 76)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats
        type2 = ""
        skill2 = ""
        if (datos.types[1]) {
            type2 = datos.types[1].type.name

        }
        if (skill[1]) {
            skill2 = skill[1].ability.name
        }

        contenido.innerHTML = `
    <div class="card">
    <div class="card-body text-center">
        <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
        <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
        <div id="descripcion">
            <h3>${datos.name}</h3>
            <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
            <h5><strong>Tipos:</strong> ${datos.types[0].type.name}  ${type2}</h5>
            <h5><strong>Habilidades:</strong> ${skill[0].ability.name} ${skill2}</h5>
            <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                +
            </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
    }
}

const water_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/water'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 145)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
    <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipos:</strong> ${datos.types[0].type.name} y ${datos.types[1].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/water'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 145)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
        <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipo:</strong> ${datos.types[0].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body" id="estadisticas">
                            <h4>Puntos de base</h4>
                            <p>
                                Salud: ${stats[0].base_stat}
                                <br>
                                Ataque: ${stats[1].base_stat}
                                <br>
                                Defensa: ${stats[2].base_stat}
                                <br>
                                Ataque especial: ${stats[3].base_stat}
                                <br>
                                Defensa especial: ${stats[4].base_stat}
                                <br>
                                Velocidad: ${stats[5].base_stat}
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}

const grass_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/grass'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 110)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
    <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipos:</strong> ${datos.types[0].type.name} y ${datos.types[1].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/grass'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 110)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
        <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipo:</strong> ${datos.types[0].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body" id="estadisticas">
                            <h4>Puntos de base</h4>
                            <p>
                                Salud: ${stats[0].base_stat}
                                <br>
                                Ataque: ${stats[1].base_stat}
                                <br>
                                Defensa: ${stats[2].base_stat}
                                <br>
                                Ataque especial: ${stats[3].base_stat}
                                <br>
                                Defensa especial: ${stats[4].base_stat}
                                <br>
                                Velocidad: ${stats[5].base_stat}
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}

const normal_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/normal'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 118)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
    <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipos:</strong> ${datos.types[0].type.name} y ${datos.types[1].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/normal'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 118)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
        <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipo:</strong> ${datos.types[0].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body" id="estadisticas">
                            <h4>Puntos de base</h4>
                            <p>
                                Salud: ${stats[0].base_stat}
                                <br>
                                Ataque: ${stats[1].base_stat}
                                <br>
                                Defensa: ${stats[2].base_stat}
                                <br>
                                Ataque especial: ${stats[3].base_stat}
                                <br>
                                Defensa especial: ${stats[4].base_stat}
                                <br>
                                Velocidad: ${stats[5].base_stat}
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}

const fight_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/fighting'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 64)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
    <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipos:</strong> ${datos.types[0].type.name} y ${datos.types[1].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/fighting'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 64)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
        <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipo:</strong> ${datos.types[0].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body" id="estadisticas">
                            <h4>Puntos de base</h4>
                            <p>
                                Salud: ${stats[0].base_stat}
                                <br>
                                Ataque: ${stats[1].base_stat}
                                <br>
                                Defensa: ${stats[2].base_stat}
                                <br>
                                Ataque especial: ${stats[3].base_stat}
                                <br>
                                Defensa especial: ${stats[4].base_stat}
                                <br>
                                Velocidad: ${stats[5].base_stat}
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}

const spark_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/electric'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 76)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
    <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipos:</strong> ${datos.types[0].type.name} y ${datos.types[1].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/electric'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 76)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
        <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipo:</strong> ${datos.types[0].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body" id="estadisticas">
                            <h4>Puntos de base</h4>
                            <p>
                                Salud: ${stats[0].base_stat}
                                <br>
                                Ataque: ${stats[1].base_stat}
                                <br>
                                Defensa: ${stats[2].base_stat}
                                <br>
                                Ataque especial: ${stats[3].base_stat}
                                <br>
                                Defensa especial: ${stats[4].base_stat}
                                <br>
                                Velocidad: ${stats[5].base_stat}
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}

const ghost_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/ghost'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 61)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
    <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipos:</strong> ${datos.types[0].type.name} y ${datos.types[1].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/ghost'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 61)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        stats = datos.stats

        contenido.innerHTML = `
        <div class="card">
        <div class="card-body text-center">
            <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
            <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
            <div id="descripcion">
                <h3>${datos.name}</h3>
                <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
                <h5><strong>Tipo:</strong> ${datos.types[0].type.name}</h5>
                <h5><strong>Habilidades:</strong> ${skill[0].ability.name} y ${skill[1].ability.name}</h5>
                <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    +
                </button>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body" id="estadisticas">
                            <h4>Puntos de base</h4>
                            <p>
                                Salud: ${stats[0].base_stat}
                                <br>
                                Ataque: ${stats[1].base_stat}
                                <br>
                                Defensa: ${stats[2].base_stat}
                                <br>
                                Ataque especial: ${stats[3].base_stat}
                                <br>
                                Defensa especial: ${stats[4].base_stat}
                                <br>
                                Velocidad: ${stats[5].base_stat}
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
}

const mind_pokemon = async () => {
    try {
        url_tipoPokemon = 'https://pokeapi.co/api/v2/type/psychic'
        const url_api = await fetch(url_tipoPokemon)
        const dato = await url_api.json()
        i = Math.floor(Math.random() * 102)
        url_nombrePokemon = dato.pokemon[i].pokemon.url
        const url_pokemon = await fetch(url_nombrePokemon)
        const datos = await url_pokemon.json()
        skill = datos.abilities
        type2 = ""
        skill2 = ""
        if (datos.types[1]) {
            type2 = datos.types[1].type.name

        }
        if (skill[1]) {
            skill2 = skill[1].ability.name
        }

        contenido.innerHTML = `
    <div class="card">
    <div class="card-body text-center">
        <img src="${datos.sprites.front_default}" class="rounded circle" id="image" alt="">
        <img src="${datos.sprites.back_default}" class="rounded circle" id="image" alt="">
        <div id="descripcion">
            <h3>${datos.name}</h3>
            <h5><strong>Número en la Pokedex:</strong> ${datos.id}</h5>
            <h5><strong>Tipos:</strong> ${datos.types[0].type.name}  ${type2}</h5>
            <h5><strong>Habilidades:</strong> ${skill[0].ability.name} ${skill2}</h5>
            <button id="btn_expand" class="btn btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                +
            </button>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body" id="estadisticas">
                        <h4>Puntos de base</h4>
                        <p>
                            Salud: ${stats[0].base_stat}
                            <br>
                            Ataque: ${stats[1].base_stat}
                            <br>
                            Defensa: ${stats[2].base_stat}
                            <br>
                            Ataque especial: ${stats[3].base_stat}
                            <br>
                            Defensa especial: ${stats[4].base_stat}
                            <br>
                            Velocidad: ${stats[5].base_stat}
                            <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    catch (err) {
        console.log(err)
    }
}
