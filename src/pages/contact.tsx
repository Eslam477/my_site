import Head from "next/head"
import Link from "./_links"
import { AiFillMail, AiOutlineTwitter } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFillMapFill, BsGithub } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
function contact() {





    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        let rawResponse = null
        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data })
        }).then(async (x) => {
            if (x.ok) {
                alert('Your contact has been successfully submitted')
                rawResponse = await x.json()
            } else {
                alert('There are an error')
                rawResponse = await x.json()
            }
        });
    }
    return (
        <main className='h-screen min-h-screen overflow-hidden'>
            <Head>
                <title>Contact</title>
            </Head>
            <div className="flex w-full h-full">
                <div className="w-11/12 py-10">
                    <h1 className="text-4xl text-center">
                        GET IN  <span className="text-yellow-500"> TOUCH</span>
                    </h1>
                    <div className="flex pt-10">
                        <div className="p-10 w-2/5">
                            <div className="w-full pt-3">
                                <h4 className="text-xl">DON'T BE SHY !</h4>
                                <p className="mt-5">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                                <div className="flex py-3 items-center">
                                    <div className="text-4xl text-yellow-500">
                                        <BsFillMapFill></BsFillMapFill>
                                    </div>
                                    <div className="pl-3">
                                        <h6>ADDRESS POINT</h6>
                                        <p>Egypt / Damitta / Adlia 34743</p>
                                    </div>
                                </div>
                                <div className="flex py-3 items-center">
                                    <div className="text-4xl text-yellow-500">
                                        <AiFillMail></AiFillMail>
                                    </div>
                                    <div className="pl-3">
                                        <h6>MAIL ME</h6>
                                        <p>Eslamelnemery477@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex py-3 items-center">
                                    <div className="text-4xl text-yellow-500">
                                        <IoLogoWhatsapp></IoLogoWhatsapp>
                                    </div>
                                    <div className="pl-3">
                                        <h6>WHATSAPP</h6>
                                        <p>+201091686338</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a target="_blank" href="https://www.facebook.com/EslamE477" className={`bg-neutral-700 p-3 my-1 rounded-full hover:bg-yellow-500 transition `}><FaFacebookF></FaFacebookF></a>
                                    <a target="_blank" href="https://www.linkedin.com/in/samex-e477/" className={`bg-neutral-700 p-3 my-1 rounded-full hover:bg-yellow-500 transition `}><FaLinkedinIn></FaLinkedinIn></a>
                                    <a target="_blank" href="https://twitter.com/EElnemery" className={`bg-neutral-700 p-3 my-1 rounded-full hover:bg-yellow-500 transition `}><AiOutlineTwitter></AiOutlineTwitter></a>
                                    <a target="_blank" href="https://github.com/Eslam477" className={`bg-neutral-700 p-3 my-1 rounded-full hover:bg-yellow-500 transition `}><BsGithub></BsGithub></a>
                                    <a target="_blank" href="https://www.instagram.com/eslam_477_e/" className={`bg-neutral-700 p-3 my-1 rounded-full hover:bg-yellow-500 transition `}><FaInstagram></FaInstagram></a>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 w-3/5 flex flex-col">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <input type="text" {...register("name", { required: true })} placeholder="YOUR NAME" className="bg-zinc-800 p-5 inline w-full rounded-full focus:border-yellow-500 focus:border outline-none" />
                                    <input type="email" {...register("email", { required: true })} placeholder="YOUR EMAIL" className="bg-zinc-800 p-5 inline w-full rounded-full focus:border-yellow-500 focus:border outline-none" />
                                </div>
                                <input type="text" {...register("subject", { required: false })} placeholder="YOUR SUBJECT" className="bg-zinc-800 p-5 inline w-full rounded-full focus:border-yellow-500 focus:border outline-none" />
                                <textarea placeholder="YOUR MESSAGE" {...register("msg", { required: true })} className="bg-zinc-800 h-72 p-5 inline w-full rounded-3xl focus:border-yellow-500 focus:border outline-none"></textarea>
                                {errors.name?.type == 'required' ? <p>Name is required</p> : ''}
                                {errors.email?.type == 'required' ? <p>Email is required</p> : ''}
                                {errors.msg?.type == 'required' ? <p>Please write a message</p> : ''}
                                <button type='submit' className="p-4 mt-4 text-center inline border border-yellow-500 rounded-full transition hover:bg-yellow-500 hover:text-neutral-900 w-72">SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>


                <Link></Link>
            </div>
        </main >
    )
}



export default contact
