import React from 'react'
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';

export default function SkillsCard() {
    const skills = [
        {
            id: 1,
            name: "HTML",
            level: 100,
            svg:<FaHtml5 />
        },
        {
            id: 2,
            name: "CSS",
            level: 95,
            svg: <FaCss3Alt />
        },
        {
            id: 3,
            name: "JavaScript",
            level: 85,
            svg: <FaJsSquare />
        },
        {
            id: 4,
            name: "React",
            level: 75,
            svg: <FaReact />
        },
        {
            id: 5,
            name: "Tailwind",
            level: 70,
            svg: <RiTailwindCssFill />
        },
        {
            id: 6,
            name: "Bootstrap",
            level: 90,
            svg: <FaBootstrap />
        }
    ];
    return (
        <>
            <div className="skills-content grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 m-auto my-10">
                {skills.map((skill) => (
                    <div className="skill lg:w-[10rem] md:w-[12rem] w-full flex items-center justify-center flex-col gap-3 p-3 shadow-md shadow-blue-600/70 rounded" key={skill.id}>
                        <div className="title flex items-center justify-center gap-2">
                            <div className="svg text-2xl text-blue-600">
                                {skill.svg}
                            </div>
                            <h2 className='lg:text-2xl text-lg font-bold'>{skill.name}</h2>
                        </div>
                        <div className="level flex items-center justify-start gap-2 w-full">
                            <div className='bg-gray-300 w-full h-4 rounded-full' >
                                <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                            <p>{skill.level}%</p>
                        </div>
                    </div>))}
            </div>
        </>
    )
}
