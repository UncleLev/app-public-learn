// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    status: string;
};

type BodyData = {
    userId: number;
    knowledgeLevel: number;
    elementOfLearningId: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        const prisma = new PrismaClient();
        const data = req.body as BodyData;

        await prisma.knowledgeOfElement.create({ data });

        res.status(200).json({ status: "Success" });
    } catch (err: any) {
        res.status(403).json(err);
    }
}
