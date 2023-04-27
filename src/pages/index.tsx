import Head from "next/head"
import Links from "./_links"
import magicCard from '@/styles/magicCard.module.css'
export default function Home() {
    return (
        <main className='w-screen h-screen overflow-hidden'>
            <Head>
                <title>Home | Welcome</title>
            </Head>
            <div className='flex h-full'>
                <div className='w-5/12 h-full'>
                    <div >
                    </div>
                    <div className={`relative top-1/2 w-96 h-4/6 bg-slate-50 -translate-y-1/2 ml-11 bg-cover bg-center rounded-3xl ${magicCard.glow}`} style={{ backgroundImage: `url(/img/Me.jpg)` }}>

                    </div>
                </div>
                <div className="flex flex-col justify-center text-left w-7/12 h-screen qf19c9e833b4">
                    <h1 className="text-5xl text-yellow-500">I'M ESLAM ELNEMERY.</h1>
                    <h2 className="text-4xl my-3">FULL STACK DEVELOPER</h2>
                    <p className="text-left w-10/12">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                    <a href="./Eslam Elnemery.pdf" className="p-4 mt-4 text-center inline border border-yellow-500 rounded-full transition hover:bg-yellow-500 hover:text-neutral-900 w-72" download>Download CV</a>
                </div>
                <Links></Links>
            </div>
        </main >
    )
}


