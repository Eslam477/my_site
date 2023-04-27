import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client"



export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()

    let result = await prisma.main.findUnique({
        where: {
            propName: 'counter',
        },
    })

    if (result == null) {
        result = await prisma.main.create(
            {
                data: {
                    propName: 'counter',
                    value: 1,
                }
            }
        )
    }

    const new_count: number = (result?.value || 0) + 1
    const data = await prisma.main.update({
        where: {
            propName: 'counter',
        },
        data: {
            value: new_count,
        },
    })



    res.json(data)
}