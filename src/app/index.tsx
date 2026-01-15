// src/pages/index.tsx
import { useState } from "react";

export default function Index() {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleShorten = async () => {
        // Aqui você chamaria sua API para gerar a URL curta
        const slug = Math.random().toString(36).substring(2, 8);
        setShortUrl(`${window.location.origin}/${slug}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white dark:text- dark:bg-black text-black dark:text-zinc-50">
            <h1 className="text-3xl mb-6">Encurtador de URLs</h1>
            <input
                type="text"
                placeholder="Cole sua URL aqui"
                className="p-2 rounded text-black w-80 mb-4"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
                onClick={handleShorten}
            >
                Encurtar
            </button>
            {shortUrl && <p className="mt-4">URL curta: {shortUrl}</p>}
        </div>
    );
}
