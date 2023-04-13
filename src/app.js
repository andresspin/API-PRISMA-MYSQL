import express from "express";
import gestorRoutes from "./routes/gestor.route.js"
import projectRoutes from "./routes/project.route.js"
import project_has_gestorRoutes from "./routes/gestorProject.route.js";


const app = express();
const PORT = process.env.PORT


app.get('/', (req,res)=>{
  res.json({message: "Hello API-PRISMA"})
})
//middleware
app.use(express.json());
app.use('/gestor',gestorRoutes)
app.use("/project", projectRoutes);
app.use("/gestorProject", project_has_gestorRoutes);






//lanzar el servidor...RECUERDA QUE AL DESPLEGAR NO PUEDE SER EL 4000
app.listen(PORT, () => {
  console.log("Server Initialized....");
});
