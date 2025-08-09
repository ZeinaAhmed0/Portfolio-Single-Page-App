import React from 'react'

export default function () {
    let imgs = ["src/assets/work1.jpg", "src/assets/work2.jpg", "src/assets/work3.jpg", "src/assets/work4.jpg", "src/assets/work5.jpg", "src/assets/work6.jpg"];
    return (
        <>
            <div className="lg:w-7xl md:w-3xl sm:w-xl w-xs grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5 m-auto my-10 p-5">
                {
                    imgs.map((img, index) => {
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
