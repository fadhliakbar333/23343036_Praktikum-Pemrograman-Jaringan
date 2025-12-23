const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=9a2f009d835aa9d2dd235f641ef59ac6&query=-0.89649,100.35013'

request({ url: url, json: true }, (error, response) => {
    console.log(response)
    // const data = JSON.parse(response.body)
    // console.log(data)
    // console.log(data.current)
    // console.log(data.current.temperature)
})