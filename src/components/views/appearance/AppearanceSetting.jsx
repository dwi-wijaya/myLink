import React, { useState } from 'react'
import ProfileForm from './profile/ProfileForm'
import Image from 'next/image';
import Preview from './Preview';

const AppearanceSetting = () => {
    const [image, setImage] = useState({
        avatar: '',
        cover: '',  
    });
    const [profile, setProfile] = useState({
        title: '',
        bio: ''
    });

    return (
        <div className='flex flex-col-reverse sm:flex-row justify-between gap-y-8'>
            <div className="appearance-setting w-full">
                <ProfileForm image={image} setImage={setImage} profile={profile} setProfile={setProfile} />
            </div>
            <div className="w-full">
                <Preview image={image} profile={profile} />
            </div>
        </div>
    )
}

export default AppearanceSetting
