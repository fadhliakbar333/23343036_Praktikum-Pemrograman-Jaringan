const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=9a2f009d835aa9d2dd235f641ef59ac6&query=-0.89649,100.35013&units=m'

request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Saat ini suhu diluar mencapai ' + response.body.current.temperature + ' derajat celcius. Kemungkinan terjadinya hujan adalah ' + response.body.current.precip + ' %')
    console.log('Deskripsi cuaca: ' + response.body.current.weather_descriptions[0])
})