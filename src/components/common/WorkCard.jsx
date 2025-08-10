import React from 'react'
import work1 from '/src/assets/work1.jpg';
import work2 from '/src/assets/work2.jpg';
import work3 from '/src/assets/work3.jpg';
import work4 from '/src/assets/work4.jpg';
import work5 from '/src/assets/work5.jpg';
import work6 from '/src/assets/work6.jpg';

export default function () {
    const images = [work1, work2, work3, work4, work5, work6];
    return (
        <>
            <div className="lg:w-7xl md:w-3xl sm:w-xl w-xs grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5 m-auto my-10 p-5">
                {
                    images.map((img, index) => {
                        return (
                            <div className="img-box overflow-hidden relative rounded-2xl" key={index}>
                                <img className='fill object-cover hover:scale-110 transition duration-500' src={img} alt="work img" />
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
