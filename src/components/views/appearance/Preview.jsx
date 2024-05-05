import Image from 'next/image'
import React from 'react'

const Preview = ({ image, profile }) => {
    return (
        <div className="flex align-middle justify-center">
            <div className="phone w-[300px] bg-container rounded-[1.5rem] text-center border-[0.75rem] border-slate-800 dark:border-slate-700">
                <div className="relative flex flex-col justify-between h-full">
                    <div className={`relative w-full h-40 bg-[#e6e6e6] dark:bg-background rounded-t-2xl `}>
                        {image.cover && <img
                            src={image.cover}
                            alt="Avatar Preview"
                            className="object-cover w-full h-full rounded-t-2xl"
                        />}
                    </div>
                    <div className="absolute top-[8%] content mt-10 p-5 w-full">
                        <div className="flex justify-center">
                            <div className={`relative bg-container w-24 h-24 rounded-full overflow-hidden outline outline-[.5rem] outline-container ${image.avatar ? '' : 'border border-stroke'}  `}>
                                {image.avatar ? (
                                    <img
                                        src={image.avatar}
                                        alt="Avatar Preview"
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full bg-container text-5xl">
                                        {profile.title ? profile.title.charAt(0).toUpperCase() : '?'}
                                    </div>
                                )}

                            </div>
                        </div>
                        <p className='mt-5 text-xl font-semibold'>{profile.title}</p>
                        <p>{profile.bio}</p>
                    </div>
                </div>
                <p className='font-bold text-lg flex items-center justify-center mb-3'>my<i className='bx bx-link rotate-[130deg]' ></i> Link </p>

            </div>
        </div>
    )
}

export default Preview