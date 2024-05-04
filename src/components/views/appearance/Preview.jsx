import React from 'react'

const Preview = ({ image, profile }) => {
    return (
        <div className="flex align-middle justify-center">
            <div className="phone w-[300px] bg-container rounded-[1.5rem] p-5 text-center ring-[0.75rem] ring-slate-800 dark:ring-slate-700">
                <div className="flex flex-col justify-between h-full">
                    <div className="content mt-10">
                        <div className="flex justify-center">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-stroke border-dashed">
                                {image ? (
                                    <img
                                        src={image}
                                        alt="Avatar Preview"
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full bg-container text-5xl">
                                        {profile.title.charAt(0).toUpperCase()}
                                    </div>
                                )}

                            </div>
                        </div>
                        <p className='mt-5 text-xl font-semibold'>{profile.title}</p>
                        <p>{profile.bio}</p>
                    </div>
                </div>
                <p className='font-bold text-lg flex items-center justify-center'>my<i className='bx bx-link rotate-[130deg]' ></i> Link </p>

            </div>
        </div>
    )
}

export default Preview