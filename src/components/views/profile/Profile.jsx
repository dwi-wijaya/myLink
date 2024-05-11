import Image from 'next/image'
import React from 'react'

const Profile = ({ data }) => {
    return (
        <div className="h-[100vh] sm:flex sm:justify-center sm:items-center sm:px-[2.5%] sm:mb-0">
            <div className="h-full flex items-center justify-center rounded-[1.5rem] relative ">
                <div className="h-[72px] w-1 bg-slate-800 dark:bg-slate-700 absolute -right-1 top-[200px] rounded-e-lg"></div>
                <div className="h-[48px] w-1 bg-slate-800 dark:bg-slate-700 absolute -left-1 top-[180px] rounded-s-lg"></div>
                <div className="h-[48px] w-1 bg-slate-800 dark:bg-slate-700 absolute -left-1 top-[240px] rounded-s-lg"></div>
                <div className="h-full sm:h-auto w-full sm:w-[300px]  overflow-y-auto scrollbar-hide relative">
                    <div className="h-full sm:h-auto phone sm:bg-container sm:rounded-[1.5rem] sm:text-center sm:border-[0.75rem] sm:border-slate-800 dark:border-slate-700">

                        <div className="relative h-full">
                            <div className={`absolute top-0 w-full h-40 bg-slate-200 dark:bg-slate-500 rounded-t-xl `}>
                                {data.profile.cover &&
                                    <Image
                                        width={96}
                                        height={96}
                                        src={data.profile.cover}
                                        alt="Avatar Preview"
                                        className="object-cover w-full h-full"
                                    />}
                            </div>
                            <div className="sm:top-[8%] content pt-24 px-6 pb-6 h-full w-full flex justify-between flex-col">
                                <div className="content">
                                    <div className="flex justify-center">
                                        <div className={`relative bg-container w-32 h-32 sm:w-24 sm:h-24 ${data.profile.avatarType} overflow-hidden outline outline-[.25rem] outline-container ${data.profile.avatar ? '' : 'border border-stroke'}  `}>
                                            {data.profile.avatar ? (
                                                <Image
                                                    width={96}
                                                    height={96}
                                                    src={data.profile.avatar}
                                                    alt="Avatar Preview"
                                                    className="object-cover w-full h-full"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center w-full h-full bg-container text-5xl ">
                                                    {data.profile.title ? data.profile.title.charAt(0).toUpperCase() : '?'}
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <p className='text-xl font-semibold text-center'>{data.profile.title}</p>
                                        <p className='text-sm'>{data.profile.bio}</p>
                                    </div>
                                    <hr className='hr' />
                                    <div className="mb-8">
                                        {data.links.map((link) => (
                                            <div className="mb-3" key={link.id}>
                                                <a href={link.url} className={`btn-base !h-auto !min-h-8 !inline-block break-words ${data.customBtn.style} `} target='_blank' style={{ color: data.customBtn.color, backgroundColor: data.customBtn.background, '--tw-shadow-color': data.customBtn.shadow }}>{link.title}</a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pb-6 flex justify-center" >
                                    <a href={process.env.NEXT_PUBLIC_WEB_URL} className='btn !rounded-xl !gap-1 !w-fit !px-4'><i className='bx bx-link rotate-[130deg]' ></i>Create your myLink </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile