// src/pages/index.tsx
//import { useState } from "react";

export default function Index() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white dark:text- dark:bg-black text-black dark:text-zinc-50">
            <h1 className="text-3xl mb-6">Encurtador de URLs</h1>
            <input
                type="text"
                placeholder="Cole sua URL aqui"
                className="p-2 rounded w-80 mb-4"
            />
            <button
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
            >
                Encurtar
            </button>
        </div>
    );
}
