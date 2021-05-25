let locacion_pg1 = fetch("https://rickandmortyapi.com/api/location?page=1")
let locacion_pg2 = fetch("https://rickandmortyapi.com/api/location?page=2")
let locacion_pg3 = fetch("https://rickandmortyapi.com/api/location?page=3")

let listado = document.getElementById("contenido")
 //  <img src="${foca.type}" class="card-img-top w-100" alt="...">
locacion_pg1.then(tomas => tomas.json())
    .then(liliana => {
        for (const foca of liliana.results) {
            listado.innerHTML += `
            
               <div class="col-4">
                    <div class="card">
                    <h5 class="card-title">${foca.name}</h5>
                        
                        <div class="card-body">
                            
                            <p class="card-text">${foca.dimension}</p>
                        </div>
                    <div class="card-footer">
                        <small class="text-muted">${foca.type}</small>
                    </div>
                    <br>
                </div><br>
        `
        }
    }).catch(error => console.log(error))

    locacion_pg2.then(tomas => tomas.json())
    .then(liliana => {
        for (const foca of liliana.results) {
            listado.innerHTML += `
            <div class="col-4">
                    <div class="card">
                    <h5 class="card-title">${foca.name}</h5>
                        
                        <div class="card-body">
                            
                            <p class="card-text">${foca.dimension}</p>
                        </div>
                    <div class="card-footer">
                        <small class="text-muted">${foca.type}</small>
                    </div>
                    <br>
                </div><br>
`
        }
    }).catch(error => console.log(error))

    locacion_pg3.then(tomas => tomas.json())
    .then(liliana => {
        for (const foca of liliana.results) {
            listado.innerHTML += `
            
            <div class="col-4">
                    <div class="card">
                    <h5 class="card-title">${foca.name}</h5>
                        
                        <div class="card-body">
                            
                            <p class="card-text">${foca.dimension}</p>
                        </div>
                    <div class="card-footer">
                        <small class="text-muted">${foca.type}</small>
                    </div>
                    <br>
                </div><br>
`
        }
    }).catch(error => console.log(error))
