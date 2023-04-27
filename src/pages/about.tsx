import Head from "next/head";
import Link from "./_links"
export default function Home() {
    const d = new Date();
    let year = d.getFullYear();
    const myAge = year - 2003
    return (
        <main className='h-screen min-h-screen overflow-hidden'>

            <Head>
                <title>About Me</title>
            </Head>
            <div className="flex w-full h-full">
                <div className="w-11/12 py-10">
                    <h1 className="text-4xl text-center">
                        ABOUT <span className="text-yellow-500"> ME</span>
                    </h1>
                    <div className="flex pt-10 ">
                        <div className="p-10 w-1/2">
                            <h4 className="text-xl">PERSONAL INFOS</h4>
                            <div className="w-full pt-3">
                                <div className="inline-flex text-lg pt-4 w-1/2">
                                    First Name: <b className="ml-1">Eslam</b>
                                </div>
                                <div className="inline-flex text-lg pt-4 w-1/2">
                                    Last Name:  <b className="ml-1">Elnemery</b>
                                </div>
                                <div className="inline-flex text-lg pt-4  w-1/2">
                                    Age:  <b className="ml-1">{myAge} Years</b>
                                </div>
                                <div className="inline-flex text-lg pt-4  w-1/2">
                                    Nationality:  <b className="ml-1">Egyptian</b>
                                </div>
                                <div className="inline-flex text-lg pt-4  w-1/2">
                                    Freelance: <b className="text-green-600 ml-1">Available</b>
                                </div>
                                <div className="inline-flex text-lg pt-4  w-1/2">
                                    Address: <b className="ml-1">Egypt</b>
                                </div>
                                <div className="inline-flex text-lg pt-4  w-1/2">
                                    Phone: <b className="ml-1">+201091686338</b>
                                </div>
                                <div className="inline-flex text-lg pt-4  w-1/2">
                                    Email:<a className="ml-1" href="mailto:eslamelnemery477@gmail.com">eslamelnemery477@gmail.com</a>
                                </div>
                                <div className="inline-flex text-lg pt-4  w-1/2">
                                    linkedin: <a className="ml-1" target="_blank" href="https://www.linkedin.com/in/samex-e477/">samex-e477</a>
                                </div>
                                <div className="inline-flex text-lg pt-4  w-1/2">
                                    Languages: <b className="ml-1">Arabic , English</b>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 w-1/2 flex flex-col">
                            <div className="border p-5 text-center">
                                <h4 className="text-9xl text-yellow-500">5+</h4>
                                <p>YEARS OF EXPERIENCE</p>
                            </div>
                            <div className="border p-5 text-center mt-10">
                                <h4 className="text-9xl text-yellow-500">2</h4>
                                <p>EXPERIENCE IN TWO COMPANIES IN THE LABOR MARKET</p>
                            </div>
                        </div>
                    </div>
                </div>


                <Link></Link>
            </div>
        </main >
    )
}


