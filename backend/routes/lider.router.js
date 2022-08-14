import { Router } from 'express'
import { getAll, create, deleteLider } from '../servise/lider.servise.js'
const router = Router()

router.get('/lider', async (req, res) => {
    try{
       const data =  await getAll()
       res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({
            error: err
        })
    }
})

router.post('/lider', async (req, res) => {
    try{
        const { name, job , age } = req.body
        let data = await create(name, job , age)
        res.json({
            message: 'Post created',
            data
    })
    }
    catch(err){
        res.status(500).json({
            error: err
        })
    }

})

router.delete('/lider/:id', async (req, res) => {
    try{
        const { id } = req.params
        let data = await deleteLider(+id)
        res.json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
})

export default router