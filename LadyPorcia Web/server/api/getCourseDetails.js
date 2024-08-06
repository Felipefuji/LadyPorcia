import path from "path";
import fs from 'fs/promises'

export default defineEventHandler(async (event) => {
    try {
     
        const r  = await fs.readFile(path.join(process.cwd(), 'data','CoursesDetails.json'),'utf-8');
        console.log(r);

        const jsonData = JSON.parse(r);
        console.log(jsonData);
      
        return jsonData
    
      } catch (error) {
        console.error('Upload failed:', error);
      }
    
})