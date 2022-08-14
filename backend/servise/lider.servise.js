import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
    export async function  getAll(){
        return prisma.lider.findMany()
    }

    export function create(name, job, age){
        return prisma.lider.create({
            data :{
                name,
                job,
                age
            }
        })

    }

    export function deleteLider(id){
        return prisma.lider.delete({
            where: {
                id
            }
        })

    }
