const Peliculas = [{
    id:1,
    title: 'Solo en casa',
    year: 1990,
    actorPrincipal: 'Macaulay Culkin'
},{
    id:2,
    title: 'Abuelo made in Spain',
    year: 1969,
    actorPrincipal: 'Paco Martínez Soria'
},{
    id:3,
    title: 'Pretty Woman 2',
    year: 2013,
    actorPrincipal: 'Yudith Becker'
}];

// const Peliculas = []

const getDatos = () =>{
    return new Promise((resolve, reject) => {
        if(Peliculas.length===0){
            reject(new Error('Error: No hay datos'))
        }
        setTimeout(()=>{
            resolve(Peliculas);
        },1200);
    });
}

getDatos().then((pelis)=>console.log(pelis)).catch(error => console.log(error.message));