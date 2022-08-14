import express from 'express'
import cors from 'cors'
import routerLider from "./routes/lider.router.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routerLider)

app.listen(8080, () =>{
    console.log('http://localhost:8080 server is running');
})