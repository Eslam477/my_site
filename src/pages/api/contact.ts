import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client"



export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'POST') {
        res.json([])
    } else {


        const prisma = new PrismaClient()
        const result = await prisma.msg.create(
            {
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    subject: req.body.subject || '',
                    massage: req.body.msg,
                    date: new Date(),
                }
            }
        )
        res.json(result)
    }

}