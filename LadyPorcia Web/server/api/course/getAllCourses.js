import path from "path";
import fs from 'fs/promises'

export default defineEventHandler(async (event) => {
    try {
     
        const r  = await fs.readFile(path.join(process.cwd(), 'data/courses','AllCourses.json'),'utf-8');

        const jsonData = JSON.parse(r);
      
        return jsonData
    
      } catch (error) {
        console.error('Upload failed:', error);
      }
    
})