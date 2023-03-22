import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: any, res: any) {

    let { somedata } = JSON.parse(req.body)

    res(JSON.stringify(somedata))
}
