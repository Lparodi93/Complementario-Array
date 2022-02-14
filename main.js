let selector = 0;
let poke;

const kanto = [{ id: "001", name: "Bulbasaur", type: "Planta/Veneno" },
{ id: "002", name: "Ivysaur", type: "Planta/Veneno" },
{ id: "003", name: "Venasaur", type: "Planta/Veneno" },
{ id: "004", name: "Charmander", type: "Fuego" },
{ id: "005", name: "Charmeleon", type: "Fuego" },
{ id: "006", name: "Charizard", type: "Fuego/Volador" },
{ id: "007", name: "Squirtle", type: "Agua" },
{ id: "008", name: "Wartortle", type: "Agua" },
{ id: "009", name: "Blastoise", type: "Agua" },
{ id: "0010", name: "Caterpie", type: "Bicho" },
{ id: "011", name: "Metapod", type: "Bicho" },
{ id: "012", name: "Butterfly", type: "Bicho" }
];


init();

function init() {

    selector = parseInt(prompt("ingrese 1 para ver todos o 2 para elegir un 'Número'"));

    if (selector === 1) {

        for (const pokemon of kanto) {
            console.log(pokemon.id, pokemon.name, pokemon.type);
        }

    } else if (selector === 2) {

        do {
            poke = parseInt(prompt("Ingrese número de Pokémon"))
        } while (isNaN(poke));

        if (poke > 12) {
            poke = 1;
        }
        
        console.log(kanto[poke - 1])

    } else {

        alert("El dato no es válido")
        init();
    }
}
