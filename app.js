const express = require('express')
const app = express()
const PORT = 3000
const fetch = require('node-fetch')
require('dotenv').config();
app.use(express.static('public'))

const API_KEY = process.env.API_KEY;

app.listen(PORT, () =>{
    console.log(`APP listening at http://localhost:${PORT}`)
})

app.get('/dinoname', async (req,res) => {
    
    const body = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?format=json&words=1&paragraphs=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": API_KEY,
		"x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
	}
    })

    const data = await body.json()
    res.json(data)

})

app.get('/dinoimg/:name', async (req,res) => {
    const body = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q="+req.params.name+"&count=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": API_KEY,
		"x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
	}
})
    const data = await body.json()

    res.json(data)
})