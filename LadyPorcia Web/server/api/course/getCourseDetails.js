import path from "path";
import fs from 'fs/promises'

export default defineEventHandler(async (event) => {
    try {
      const { id } = getQuery(event)
      const r  = await fs.readFile(path.join(process.cwd(), 'data/courses','CoursesDetails.json'),'utf-8');

      const jsonData = JSON.parse(r);

      // Buscar el objeto con el id correspondiente 
      const result = jsonData.find(course => course.id === Number(id));

      // Retornar el objeto encontrado
      return result ? result : { error: 'ID not found' };

    } catch (error) {
      console.error('Upload failed:', error);
    }
})