import React, { useState } from 'react'
import ProfileForm from './profile/ProfileForm'
import Image from 'next/image';
import Preview from './Preview';
import LinkForm from './link/LinkForm';
import { Divider } from 'antd';
import Buttons from './buttons/Buttons';

const AppearanceSetting = () => {
    const [image, setImage] = useState({
        avatar: '',
        cover: '',
    });
    const [profile, setProfile] = useState({
        title: '',
        bio: ''
    });

    const [links, setLinks] = useState([
        { id: 1, title: "Link 1", url: 'http://', order: 1 },
        { id: 2, title: "Link 2", url: 'http://', order: 2 },
        { id: 3, title: "Link 3", url: 'http://', order: 3 }
    ]);

    const buttonStyles = ['', 'rounded-md','rounded-xl', 'border border-slate-300', 'border ring-1 ring-offset-2 rounded-xl ring-slate-300', 'shadow-md shadow-slate-200' ]
    const [selectedButtonStyle, setSelectedButtonStyle] = useState('')
    const [btnColor, setBtnColor] = useState('#000')
    const [btnBg, setBtnBg] = useState('#f8fafc')

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-y-8'>
            <div className="appearance-setting w-full sm:overflow-x-hidden h-full  sm:!h-[100vh] px-4 sm:!px-[2.5%] scrollbar-hide border-r-0 sm:!border-r border-stroke min-w-[355px]">
                <ProfileForm image={image} setImage={setImage} profile={profile} setProfile={setProfile} />
                <hr className="hr" />
                <LinkForm links={links} setLinks={setLinks} />
                <hr className="hr" />
                <Buttons styles={buttonStyles} buttonStyle={selectedButtonStyle} setButtonStyle={setSelectedButtonStyle} btnColor={btnColor} setBtnColor={setBtnColor} btnBg={btnBg} setBtnBg={setBtnBg} />
                <button className='btn mt-6 mb-0 sm:mb-24'><i className="bx bx-check-circle"></i>Save</button>
            </div>
            <div className="w-full flex justify-center items-center px-[2.5%] mb-12 sm:mb-0">
                <Preview image={image} profile={profile} links={links} buttonStyle={selectedButtonStyle} btnColor={btnColor} btnBg={btnBg} />
            </div>
        </div>
    )
}

export default AppearanceSetting
