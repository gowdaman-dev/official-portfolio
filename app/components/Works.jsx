import React from 'react'

function Works() {
    return (
        <div>
            <div className="relative z-[5] pt-[4rem] h-screen w-screen flex justify-between items-center px-10">
                <div className="flex flex-col">
                    <h3 className='font-migra-bold text-white text-4xl'>Gowdaman</h3>
                    <h1 className="font-outdown text-[240px] text-white tracking-wide ">Designer <span className='text-[90px]'>&</span></h1>
                    <h1 className="font-outdown text-[240px] text-white tracking-wide ">Developer</h1>
                </div>
                <div className="md:w-1/2 w-[400px] flex flex-col gap-6 justity-start">
                    <h1 className='homehovertoggle cursor-pointer font-migra-bold text-6xl text-white'>|26 JUL</h1>
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
        </div>
    )
}

export default Works