'use client'
import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

function Home() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const [hookedYPostion, setHookedYPosition] = useState(0);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setHookedYPosition(latest);
    })
    const [clip, setClip] = useState(false)
    const clipstatus = {
        open: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        },
        close: {
            clipPath: "polygon(50% 10%, 80% 50%, 50% 90%, 20% 50%)"
        }
    }
    useEffect(() => {
        console.log(hookedYPostion);
    }, [hookedYPostion])
    return (
        <div className=''>
            <motion.div initial={{ clipPath: "polygon(50% 10%, 60% 50%, 50% 90%, 40% 50%)" }} animate={clip ? 'close' : 'open'} transition={{ duration: 1, ease: 'easeInOut' }} variants={clipstatus} className='flexanime z-0 flex overflow-hidden top-0 left-0 z-0  h-screen w-screen'>
                <motion.img transition={{ duration: 1, ease: 'easeInOut' }} src="/background.jpg" className='relative maskbg h-screen w-screen' alt="" />
            </motion.div>
            <div className="relative z-[5] pt-[4rem] h-screen w-screen flex justify-between items-center px-10">
                <div className="flex flex-col">
                    <h3 className='font-migra-bold text-white text-4xl'>Gowdaman</h3>
                    <h1 className="font-outdown text-[240px] text-white tracking-wide ">Designer <span className='text-[90px]'>&</span></h1>
                    <h1 className="font-outdown text-[240px] text-white tracking-wide ">Developer</h1>
                </div>
                <div className="md:w-1/2 w-[400px] flex flex-col gap-6 justity-start">
                    <h1 onMouseEnter={() => setClip(true)} onMouseLeave={() => setClip(false)} className='homehovertoggle cursor-pointer font-migra-bold text-6xl text-white'>|26 JUL</h1>
                    <p style={{ lineHeight: 1.2 }} className="line-space text-white font-poppins text-[2rem] text-justify indent-[100px] ">
                        I am a developer and UX/UI
                        designer based in India. I have many
                        years of experience in consulting in
                        all areas of digital. I love minimal
                        and brutalist design. I love nature,
                        video games and art.
                    </p>
                    <a href="#" className="my-2 font-['justus'] text-white text-2xl tracking-widest border w-fit p-2">Download cv</a>
                </div>
            </div>
            <motion.div ref={ref} style={{ background: `linear-gradient(to bottom , transparent, rgba(0, 0, 0 , ${hookedYPostion-.3}) , rgba(0, 0, 0 , ${hookedYPostion}) ,rgba(0, 0, 0 , ${hookedYPostion}) , rgba(0, 0, 0 , ${hookedYPostion}))` }} className="relative z-[5] flex px-10 justify-between items-center w-screen h-screen">
                <div className="flex flex-col gap-6">
                    <h1 className='font-outdown text-8xl tracking-wide text-white'>Hello. I am GOWDAMAN</h1>
                </div>
            </motion.div>
        </div>
    )
}

export default Home