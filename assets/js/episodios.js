// let personajes_pg1 = fetch("https://rickandmortyapi.com/api/location?page=1")
// let personajes_pg2 = fetch("https://rickandmortyapi.com/api/location?page=2")
// let personajes_pg3 = fetch("https://rickandmortyapi.com/api/location?page=3")

let episodios_pg1 = fetch("https://rickandmortyapi.com/api/episode?page=1")
let episodios_pg2 = fetch("https://rickandmortyapi.com/api/episode?page=2")
let episodios_pg3 = fetch("https://rickandmortyapi.com/api/episode?page=3")



let listado = document.getElementById("contenido")
 //  <img src="${foca.type}" class="card-img-top w-100" alt="...">
episodios_pg1.then(tomas => tomas.json())
    .then(liliana => {
        for (const foca of liliana.results) {
            listado.innerHTML += `
            
               <div class="col-4">
                    <div class="card">
                    <h5 class="card-title">${foca.name}</h5>
                        
                        <div class="card-body">
                            <h5 class="card-title">${foca.episode}</h5>
                            
                        </div>
                    <div class="card-footer">
                        <small class="text-muted">${foca.air_date}</small>
                    </div>
                    <br>
                </div><br>
        `
        }
    }).catch(error => console.log(error))

    episodios_pg2.then(tomas => tomas.json())
    .then(liliana => {
        for (const foca of liliana.results) {
            listado.innerHTML += `
            <div class="col-4">
                    <div class="card">
                    <h5 class="card-title">${foca.name}</h5>
                        
                        <div class="card-body">
                            <h5 class="card-title">${foca.episode}</h5>
                            
                        </div>
                    <div class="card-footer">
                        <small class="text-muted">${foca.air_date}</small>
                    </div>
                    <br>
                </div><br>
`
        }
    }).catch(error => console.log(error))

    episodios_pg3.then(tomas => tomas.json())
    .then(liliana => {
        for (const foca of liliana.results) {
            listado.innerHTML += `
            
            <div class="col-4">
                    <div class="card">
                    <h5 class="card-title">${foca.name}</h5>
                        
                        <div class="card-body">
                            <h5 class="card-title">${foca.episode}</h5>
                            
                        </div>
                    <div class="card-footer">
                        <small class="text-muted">${foca.air_date}</small>
                    </div>
                    <br>
                </div><br>
`
        }
    }).catch(error => console.log(error))
