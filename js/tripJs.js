
window.onload = cargarEventos;

function cargarEventos(){
    document.getElementById("btnSubmit").addEventListener("click", obtenerForm,false);
    document.getElementById("btnMostrar").addEventListener("click", printPeticionesFiltradas,false);
}

let peticiones = [];
/* peticiones = 
[ {
        "name":"Juan",
        "lastName":"martinez",
        "email":"mj@yahoo.es",
        "country":"Spain",
        "city":"Toledo",
        "destino":"canarias"
    },
    {
        "name":"Lucia",
        "lastName":"sanchez",
        "email":"lu@yahoo.es",
        "country":"Spain",
        "city":"Toledo",
        "destino":"andalucia"
    },
    {
        "name":"HAns",
        "lastName":"Blau",
        "email":"lger@yahoo.es",
        "country":"Germany",
        "city":"Bonn",
        "destino":"mallorca"
    }
] */

function obtenerForm(event){
    event.preventDefault();

    let nombre = document.getElementById("name").value;
    // alert(nombre);
    let apellido = document.getElementById("lastName").value;
    // alert(apellido);
    let email = document.getElementById("email").value;
    // alert(email);
    let pais = document.getElementById("country").value;
    // alert(pais);
    let ciudad = document.getElementById("city").value;
    // alert(ciudad);

    let posLista = document.getElementById("destino").options.selectedIndex;
    let destino = document.getElementById("destino").options[posLista].text;
    // alert(destino);
    let petic =  { "name":nombre,
                    "lastName":apellido,
                    "email":email,
                    "country":pais,
                    "city":ciudad,
                    "destino":destino
                }

    // console.log(JSON.stringify(petic, null, '\t'));
    alert(JSON.stringify(petic, null, '\t'));
    peticiones.push(petic);
}


function printPeticionesFiltradas()
{
    let canarias =[];
    let mallorca =[];
    let galicia = [];

    for(let i=0; i<peticiones.length; i++)
    {
        if((peticiones[i].destino).toLowerCase() == "canarias") canarias.push(peticiones[i]);
            
        if((peticiones[i].destino).toLowerCase() == "mallorca") mallorca.push(peticiones[i]);
            
        if((peticiones[i].destino).toLowerCase() == "galicia") galicia.push(peticiones[i]);
    }

    let misResultados = "<table class='filtrado'><thead>" +
        "<tr> <th>Name</th> <th>Name</th> <th>Email</th> <th>Country</th>" +
            " <th>City</th> <th>Destination</th> </tr> </thead>" +
        "<tbody>"; 
        
    let cierre = "</tbody></table>";

    canarias.forEach( function(valor,i)
                        {
                            misResultados += "<tr>";
                            for(let atr in canarias[i])
                            {
                                misResultados +=
                                "<td>" + canarias[i][atr] + "</td>"; 
                                // alert(canarias[i][atr]);
                            }
                            misResultados += "</tr>";
                        });
    
    galicia.forEach( function(valor,i)
    {
        misResultados += "<tr>";
        for(let atr in galicia[i])
        {
            misResultados +=
            "<td>" + galicia[i][atr] + "</td>";
            // alert(galicia[i][atr]) 
        }
        misResultados += "</tr>";
    });

    mallorca.forEach( function(valor,i)
    {
        misResultados += "<tr>";
        for(let atr in mallorca[i])
        {
            misResultados +=
            "<td>" + mallorca[i][atr] + "</td>";
            // alert(mallorca[i][atr]) 
        }
        misResultados += "</tr>";
    });

    misResultados += cierre;

    let divResultados = document.getElementById("resultados");
    divResultados.innerHTML=misResultados;
}
