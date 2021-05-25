let personajes_pg1 = fetch("https://rickandmortyapi.com/api/character?page=1")
let personajes_pg2 = fetch("https://rickandmortyapi.com/api/character?page=2")
let personajes_pg3 = fetch("https://rickandmortyapi.com/api/character?page=3")
let listado = document.getElementById("contenido")

personajes_pg1.then(tomas => tomas.json())
    .then(liliana => {
        for (const foca of liliana.results) {
            listado.innerHTML += `
            
               <div class="col-4">
                    <div class="card">
                         <img src="${foca.image}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${foca.name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div><br>
        `
        }
    }).catch(error => console.log(error))

    personajes_pg2.then(tomas => tomas.json())
    .then(liliana => {
        for (const foca of liliana.results) {
            listado.innerHTML += `
            <div class="col-4">
                    <div class="card">
                         <img src="${foca.image}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${foca.name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
`
        }
    }).catch(error => console.log(error))

    personajes_pg3.then(tomas => tomas.json())
    .then(liliana => {
        for (const foca of liliana.results) {
            listado.innerHTML += `
            
                <div class="col-4">
                    <div class="card">
                         <img src="${foca.image}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${foca.name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
`
        }
    }).catch(error => console.log(error))
