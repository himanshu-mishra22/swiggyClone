import { createRestraunt, getRestraunts } from "../controllers/Restraunt.controller.js";


function restrauntRoutes(app){
    app.get('/api/restraunts',getRestraunts);
    app.post('/api/res',createRestraunt)
}

export default restrauntRoutes;