import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProjectGestor = async (req, res) => {
  //este callback es llamado el controlador de la ruta y se hara un insert

  try {
    const newProjectGestor = await prisma.project_has_gestor.create({
      data: req.body,
    });
    res.status(201).json(newProjectGestor);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getAllGestorProject = async (req, res) => {
  //este callback es llamado el controlador de la ruta y se hara un insert

  try {
    const gestorProject = await prisma.project_has_gestor.findMany({
      include: {
        gestor:{
          select:{
            name:true,
            apellido:true
          }
        },
        project:{
          select:{
            name: true,
            description: true
          }
        }
      }
  });
 
const computedData = gestorProject.map(({idgestor,idproject,gestor,project})=>{
  return {
    idgestor,
    idproject,
    project: project.name,
    projectDescription: project.description,
    gestor: `${gestor.name} ${gestor.apellido}`
  }
}) 


    res.status(200).json(computedData);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
