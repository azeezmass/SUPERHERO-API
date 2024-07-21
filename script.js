const Base_url1 = `https://superheroapi.com/api.php/1fe33b0679d9fdf4aff20d382fef6973/`
const imgDiv = document.getElementById('img')
const btn = document.getElementById('new') 
let text = document.getElementById('text')
const searchBtn =document.getElementById('search')
let stat = document.getElementById('stat')


const gethero =  (id) => {

    fetch(`${Base_url1}/${id}`)
    .then(Response => Response.json())
    .then(json =>{ 
       const stats = getstat(json)
        let name = `<h1>${json.name}</h1>`   
        imgDiv.innerHTML = `${name}<img src="${json.image.url}" height =300 width=300/>  `
        stat.innerHTML = `${stats}`
       console.log(json)
    })
}

const getstat= (char) =>{
const stats = Object.keys(char.powerstats).map(stat =>{
   return `<p>${stat.toUpperCase()}: ${char.powerstats[stat]}</p>`
})

console.log(stats.join(''))
return stats.join('')
}

const random = () =>{
    let ran = Math.floor(Math.random() * 731) + 1
    return ran
}

btn.onclick = () => gethero(random())

//const Base_url2 = `https://superheroapi.com/api.php/1fe33b0679d9fdf4aff20d382fef6973/search`

const search =()=>{

          fetch(`${Base_url1}/search/${text.value}`)
        .then(Response => Response.json())
        .then(json =>{ 
            let final = json.results[0]
             let stats = getstat(final)
            console.log(json)
            let name = `<h1>${final.name}</h1>`   
        
            imgDiv.innerHTML = `${name}<img src="${final.image.url}" height =300 width=300 />`
            stat.innerHTML = `${stats}`
            
          })
        
    }
/*
     const getstats2 = (char) =>{
        let stat2 = Object.keys(char.powerstats).map(sat =>{
           return `<p>${sat.toUpperCase()} :${char.powerstats[sat]}</P>`
        })
     
       console.log(stat2.join(' '))
       return stat2.join('')
    }
  */
    searchBtn.onclick = () =>search()

