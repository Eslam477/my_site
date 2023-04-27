import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
function _links() {
    const [counter, setCounter] = useState<number>(0)
    const [{ data, loading, error }, refetch] = useAxios(
        '/api/status'
    )
    useEffect(() => {
        if (!loading) {
            if (error) {
                throw new Error(error.message)
            } else {
                setCounter(data.value)
            }
        }
    }, [loading])

    const router = useRouter();
    return (
        <div className='w-1/12 h-full'>
            <div className='flex flex-col w-full h-full justify-center items-center py-2'>
                <span className='bg-yellow-500 rounded-full p-2 text-l text-black absolute top-5'>{counter}</span>
                <Link href="/" className={`bg-neutral-700 p-3 my-1 rounded-full hover:bg-yellow-500 transition ${router.pathname == "/" ? "bg-yellow-500" : ""}`}><AiFillHome /></Link>
                <Link href="/about" className={`bg-neutral-700 p-3 my-1 rounded-full hover:bg-yellow-500 transition ${router.pathname == "/about" ? "bg-yellow-500" : ""}`}><BsFillPersonFill /></Link>
                <Link href="/contact" className={`bg-neutral-700 p-3 my-1 rounded-full hover:bg-yellow-500 transition ${router.pathname == "/contact" ? "bg-yellow-500" : ""}`}><HiMail /></Link>
            </div>
        </div>
    )
}

export default _links
