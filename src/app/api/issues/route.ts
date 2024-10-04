import z from 'zod'
import { PrismaClient } from '@prisma/client'
import prisma from '../../../../prisma/client';


const createIssueSchema=z.object({
    title:z.string().min(5).max(255),
    description:z.string().min(1)
})

export async function POST(request:Request){
   const body= await request.json();
   const validation=createIssueSchema.safeParse(body)
   if(!validation.success){
    return Response.json({
        success:false,
        message:validation.error
    },{
        status:400
    })}
    
   try {
     const newIssue=await prisma.issue.create({
         data:{title:body.title, description:body.description}
     })
     return Response.json({
         success:true,
         message:newIssue
         },{
             status:201
             })
   } catch (error) {
    return Response.json({
        success:false,
        message:error
        },{
            status:500
            })
    
   }
        

    
}