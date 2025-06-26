import { register,login } from "../controllers/User.controller.js";


function userRoutes(app){
    app.post('/api/login',login);
    app.post('/api/register',register);
}

export default userRoutes;