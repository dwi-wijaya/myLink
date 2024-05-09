import React, { useState } from 'react'
import ProfileForm from './profile/ProfileForm'
import Image from 'next/image';
import Preview from './Preview';
import LinkForm from './link/LinkForm';
import { Divider } from 'antd';
import Buttons from './buttons/Buttons';
import Legend from '@/components/elements/Legend';
import toast from 'react-hot-toast';

const AppearanceSetting = () => {
    const [image, setImage] = useState({
        avatar: '',
        cover: '',
    });
    const avatarTypes = ['rounded-full','rounded-xl'];

    const [profile, setProfile] = useState({
        avatarType: 'rounded-xl',
        title: '',
        bio: '',
    });

    const [links, setLinks] = useState([
        { id: 1, title: "Link 1", url: 'http://', order: 1 },
        { id: 2, title: "Link 2", url: 'http://', order: 2 },
        { id: 3, title: "Link 3", url: 'http://', order: 3 }
    ]);

    const buttonStyles = [
        'bg-slate-700', 'bg-slate-700 rounded-xl', 'bg-slate-700 rounded-full',
        'outline outline-1 ', 'rounded-xl outline outline-1 ', 'rounded-full outline outline-1 ',
        'outline outline-dashed outline-1 ', 'rounded-xl outline outline-dashed outline-1 ', 'rounded-full outline outline-dashed outline-1 ',
        'mb-1 border outline outline-offset-2 outline-1', 'mb-1 border rounded-xl outline outline-offset-2 outline-1', 'mb-1 border  rounded-full outline outline-offset-2 outline-1 ',
        'border border-l-8 border-black', 'rounded-xl border border-l-8 border-black', 'rounded-full border border-l-8 border-black',
        'shadow-[5px_5px_0px_0px] outline outline-1 mb-1', 'rounded-xl shadow-[5px_5px_0px_0px] outline outline-1 mb-1', 'rounded-full shadow-[5px_5px_0px_0px] outline outline-1 mb-1',
        'bg-slate-500 shadow-lg shadow-slate-500', 'bg-slate-500 rounded-xl shadow-lg shadow-slate-500', 'bg-slate-500 rounded-full shadow-lg shadow-slate-500',
    ]

    const [customBtn, setCustomBtn] = useState({
        style: '',
        color: '#cbd5e1',
        background: '#334155',
        shadow: '#334155',
    })
    const myLinkUrl = process.env.NEXT_PUBLIC_WEB_URL + profile.title;

    const handleCopy = () => {
        navigator.clipboard.writeText(myLinkUrl)
        toast.success("Copied to clipboard");
    }
    return (
        <div className='flex flex-col sm:flex-row justify-between gap-y-8'>
            <div className="appearance-setting w-full sm:overflow-x-hidden h-full  sm:!h-[100vh] px-4 sm:!px-[2.5%] scrollbar-hide border-r-0 sm:!border-r border-stroke min-w-[355px]">
                <Legend title="Your myLink" className="mt-20 sm:mt-12">
                    <div className="flex justify-between items-center gap-3">
                        <div className="flex-1 bg-container leading-4 p-3 border border-stroke rounded-md flex items-center gap-3 line-clamp-1">
                            <a target='_blank' href="https://"><p className='line-clamp-1 break-all'>{myLinkUrl}</p></a>
                        </div>
                        <button onClick={handleCopy} className="btn !w-fit"><i className="bx bx-link"></i> Copy</button>
                    </div>
                </Legend>
                <Legend title="Profile" >
                    <ProfileForm image={image} setImage={setImage} profile={profile} setProfile={setProfile} avatarTypes={avatarTypes} />
                </Legend>
                <Legend title="Links" >
                    <LinkForm links={links} setLinks={setLinks} />
                </Legend>
                <Legend title="Button" >
                    <Buttons styles={buttonStyles} customBtn={customBtn} setCustomBtn={setCustomBtn} />
                </Legend>
                <button disabled className='btn mt-6 mb-0 sm:mb-12'><i className="bx bx-check-circle"></i>Save</button>
            </div>
            <div className="w-full flex justify-center items-center px-[2.5%] mb-12 sm:mb-0">
                <Preview image={image} profile={profile} links={links} customBtn={customBtn} />
            </div>
        </div>
    )
}

export default AppearanceSetting
