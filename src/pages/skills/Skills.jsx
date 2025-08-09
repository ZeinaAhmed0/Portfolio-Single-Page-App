import React from 'react'
import SkillsCard from '../../components/common/SkillsCard'
import workImg from '/src/assets/work3.jpg'

export default function Skills() {
    return (
        <>
            <div className="skills">
                <h1 className='text-center my-5 lg:text-3xl text-2xl font-bold text-blue-600 p-4'>skills</h1>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-10 items-center justify-center lg:w-7xl md:w-8xl sm:w-9xl w-full m-auto px-5">
                    <div className="txt flex flex-col gap-3">
                        <h2 className='lg:text-3xl text-2xl font-bold'>Professional Skills</h2>
                        <p>Lorem ipsum dolor sit, consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                        <div>
                        <SkillsCard />
                        </div>
                    </div>
                    <div className="img-box overflow-hidden rounded border-lg mb-5">
                        <img className='w-full object-cover' src={workImg} alt="laptop" />
                    </div>
                </div>

            </div>
        </>
    )
}
