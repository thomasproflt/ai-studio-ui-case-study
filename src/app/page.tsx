import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import ImgPlan1 from "@/public/shor-linkk.png";
import ImgPlan2 from "@/public/shor-linkk.png";
import ImgPlan3 from "@/public/shor-linkk.png";
import ImgPlan4 from "@/public/shor-linkk.png";
import ImgModels1 from "@/public/offset_spark_icon_outline.png";
import ImgModels2 from "@/public/offset_image_icon_outline.png";
import ImgModels3 from "@/public/offset_videocam_icon_outline.png";
import ImgModels4 from "@/public/offset_audio_magic_eraser_icon_outline.png";
import ImgModels5 from "@/public/offset_mic_detect_audio_icon_outline.png";
import ImgModels6 from "@/public/offset_spark_icon_outline.png";
import Footer from "./components/footer";

export default function Home() {
  const planIncludes = [
    {
      id: 1,
      title: "Try our models",
    },
    {
      id: 2,
      title: "Vibe code AI apps",
    },
    {
      id: 3,
      title: "Get an API key",
    },
  ];

  const contentHome = [
    {
      id: 1,
      img: ImgPlan1,
      title: "Build stronger digital connections",
      description:
        "Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform.",
    },
    {
      id: 2,
      img: ImgPlan2,
      title: "Build stronger digital connections",
      description:
        "Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform.",
    },
    {
      id: 3,
      img: ImgPlan3,
      title: "Build stronger digital connections",
      description:
        "Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform.",
    },
    {
      id: 4,
      img: ImgPlan4,
      title: "Build stronger digital connections",
      description:
        "Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform.",
    },
  ];

  const exploreModels = [
    {
      id: 1,
      img: ImgModels1,
      title: "Gemini",
      description:
        "Our state of the art models, excellent at coding, reasoning, creative writing, and multimodal capabilities.",
    },
    {
      id: 2,
      img: ImgModels2,
      title: "Imagen",
      description:
        "Our best image generation model yet, engineered for creativity. Bring your imagination to life faster than ever before.",
    },
    {
      id: 3,
      img: ImgModels3,
      title: "Veo",
      description:
        "Our latest video generation model, designed to empower filmmakers and storytellers.",
    },
    {
      id: 4,
      img: ImgModels4,
      title: "Gemini",
      description:
        "Our state of the art models, excellent at coding, reasoning, creative writing, and multimodal capabilities.",
    },
    {
      id: 5,
      img: ImgModels5,
      title: "Imagen",
      description:
        "Our best image generation model yet, engineered for creativity. Bring your imagination to life faster than ever before.",
    },
    {
      id: 6,
      img: ImgModels6,
      title: "Veo",
      description:
        "Our latest video generation model, designed to empower filmmakers and storytellers.",
    },
  ];

  return (
    <div className="min-h-screen items-center justify-start bg-zinc-50 font-sans dark:bg-[hsl(0,0%,10%)]">
      <Navbar />

      <main className="flex min-h-screen w-full max-w-full flex-col items-center justify-between py-32 px-30 bg-white dark:bg-[hsl(0,0%,10%)] sm:items-center">
        <div className="flex flex-col items-center gap-6 text-center">
        <Image
          className="dark:invert"
          src="/aistudio-text.svg"
          alt="AI"
          width={255}
          height={10}
          priority
        />
          <p className="max-w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The fastest path from prompt to production with Gemini
          </p>
          <div className="grid grid-cols-3 columns-1 gap-5">
            {planIncludes.map((item) => (
              <Link
                href={"/#"}
                key={item.id}
                className="flex items-center justify-center gap-2 border border-solid border-black/[0.08] px-5 py-2 rounded-2xl hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] transition-all duration-200"
              >
                <span className="text-[14px]">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <section className="flex min-h-screen w-full max-w-full flex-row items-center justify-between py-32 px-30 bg-white dark:bg-[hsl(0,0%,10%)] sm:items-start">
        <div className="flex flex-col space-y-100">
          {contentHome.map((item, index) => (
            <div key={item.id} className="">
              <div className="flex flex-row justify-between items-center gap-6 text-center sm:text-left min-w-6xl">
                <div className="flex flex-col">
                  <h1 className="max-w-xs text-[18px] font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    {item.title}
                  </h1>
                  <p className="max-w-md text-[16px] text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
                <div className="overflow-hidden rounded-md">
                  <Image
                    className="object-cover rounded-md select-none pointer-events-none"
                    src={item.img}
                    alt="Shor"
                    width={300}
                    height={200}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col min-h-screen w-full max-w-full items-center justify-between py-32 px-30 bg-white dark:bg-[hsl(0,0%,10%)] sm:items-start">
        <h1 className="max-w-xs text-3xl font-light leading-10 tracking-tight text-black dark:text-zinc-300 mb-10">
          Explore our Models
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {exploreModels.map((item) => (
            <div key={item.id} className="flex items-center justify-center">
              <div className="relative flex flex-col bg-white dark:bg-[hsl(0,0%,13%)] border border-[hsla(0,0%,17%,1)] dark:hover:bg-[hsl(0,0%,17%)] min-h-full cursor-pointer transition-all duration-200 pb-45">
                <h1 className="max-w-xs text-[18px] font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 px-5 py-5">
                  {item.title}
                </h1>

                <p className="max-w-md text-[16px] text-zinc-600 dark:text-zinc-400 px-5 py-5">
                  {item.description}
                </p>

                {/* IMAGEM FIXA NO CANTO */}
                <div className="absolute bottom-0 left-0">
                  <Image
                    className="object-cover select-none pointer-events-none"
                    src={item.img}
                    alt="Short"
                    width={150}
                    height={10}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col container mx-auto min-h-screen w-full max-w-6xl items-center justify-center py-32 px-30 bg-white dark:bg-[hsl(0,0%,10%)] border-t dark:border-[hsla(0,0%,100%,0.1)]">
        <h1 className="text-center max-w-xs text-3xl font-light leading-10 tracking-tight text-black dark:text-zinc-300 mb-10">
          FlyShor
        </h1>
        <p className="text-center max-w-full text-3xl font-light leading-10 tracking-tight text-black dark:text-zinc-300 mb-10">
          Start exploring and building with Google’s latest AI models
        </p>
        <Link
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[0.08] px-5 transition-colors hover:border-transparent hover:bg-black/[0.04] dark:border-white/[0.145] dark:hover:bg-[hsl(0,0%,13%)] md:w-[260px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign up and get started
        </Link>
      </section>
      <Footer />
    </div>
  );
}
