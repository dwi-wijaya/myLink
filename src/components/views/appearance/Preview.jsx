import Image from 'next/image'
import React from 'react'

const Preview = ({ image, profile, links, customBtn }) => {
    return (
        <div className="flex align-middle justify-center rounded-[1.5rem] relative ">
            <div className="h-[64px] w-1 bg-slate-800 dark:bg-slate-700 absolute -right-1 top-[142px] rounded-e-lg"></div>
            <div className="h-[42px] w-1 bg-slate-800 dark:bg-slate-700 absolute -left-1 top-[124px] rounded-s-lg"></div>
            <div className="h-[42px] w-1 bg-slate-800 dark:bg-slate-700 absolute -left-1 top-[172px] rounded-s-lg"></div>
            <div className="phone w-[300px] bg-container rounded-[1.5rem] text-center border-[0.75rem] border-slate-800 dark:border-slate-700 overflow-y-auto scrollbar-hide relative">
                <div className="relative h-full">
                    <div className={`relative w-full h-40 bg-slate-200 dark:bg-background  `}>
                        {profile.cover &&
                            <Image
                                width={96}
                                height={96}
                                src={profile.cover}
                                alt="Avatar Preview"
                                className="object-cover w-full h-full"
                            />}
                    </div>
                    <div className="absolute top-[8%] content mt-10 p-5 w-full">
                        <div className="flex justify-center">
                            <div className={`relative bg-container w-24 h-24 ${profile.avatarType} overflow-hidden outline outline-[.25rem] outline-container ${profile.avatar ? '' : 'border border-stroke'}  `}>
                                {profile.avatar ? (
                                    <Image
                                        width={96}
                                        height={96}
                                        src={profile.avatar}
                                        alt="Avatar Preview"
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center w-full h-full bg-container text-5xl ">
                                        {profile.title ? profile.title.charAt(0).toUpperCase() : '?'}
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="my-5">
                            <p className='text-xl font-semibold'>{profile.title}</p>
                            <p className='text-sm'>{profile.bio}</p>
                        </div>
                        <hr className='hr' />
                        <div className="mb-8">
                            {links.map((link) => (
                                <div className="mb-3" key={link.id}>
                                    <a href={link.url} className={`btn-base !h-auto !min-h-8 !inline-block break-words ${customBtn.style} `} target='_blank' style={{ color: customBtn.color, backgroundColor: customBtn.background, '--tw-shadow-color': customBtn.shadow }}>{link.title}</a>
                                </div>
                            ))}
                        </div>
                        <p className='font-bold text-lg flex items-center justify-center'>my<i className='bx bx-link rotate-[130deg]' ></i> Link </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Preview