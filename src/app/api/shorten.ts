// src/pages/api/shorten.ts
import type { NextApiRequest, NextApiResponse } from "next";

const database: Record<string, string> = {}; // Aqui, futuramente, você conecta MySQL

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { url } = req.body;
        const slug = Math.random().toString(36).substring(2, 8);
        database[slug] = url;
        res.status(200).json({ shortUrl: `${req.headers.host}/${slug}` });
    } else {
        res.status(405).json({ message: "Método não permitido" });
    }
}
