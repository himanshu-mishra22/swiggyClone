import { createRestraunt, getRestraunts, updateRestraunt, deleteRestraunt } from "../controllers/Restraunt.controller.js";


function restrauntRoutes(app){
    app.get('/api/restraunts',getRestraunts);
    app.post('/api/restraunts',createRestraunt);
    app.patch('/api/restraunts/:id',updateRestraunt)
    app.delete('/api/restraunts/:id',deleteRestraunt)
}

export default restrauntRoutes;