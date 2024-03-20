const staff = [

    {
        name: "Angel",

        lastname:"Ortegra",

        age:19
    }
]

const d = document

const CONTAINER_STAFF = d.getElementById("container-staff")


let templateHTML = ``

staff.forEach(function(item, index , staff){ 

    templateHTML +=`

     <div>
         <span>${item.name}</span>
         <span>${item.lastname}</span>
         <span>${item.age}</span>
     </div>
    
    `

})

CONTAINER_STAFF.innerHTML = templateHTML




