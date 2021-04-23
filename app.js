//link for the api for the pokemon
//document.ready function
//onclick function to search for the info
//be able to input users search into the api
//populate the data
//set a variable for the user input\\
//fetch the data
//change the data to json data
//prevent default info from populating

$(() => {
    $('form').on('submit', (event) => {
        event.preventDefault()
        const userInput = $('input[type="text"]').val()
        
         console.log(userInput)

        async function getPokeData(input) {
            //async await to grab data
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            //change the data to json data
            const data = await response.json(input)
            $('#pokeName').html(data.forms[0].name)
            $('#pokeType').html(data.types[0].type.name)
            $('#pokeNum').html(data.id)

             console.log(data)
        }
        getPokeData()
    })
})

