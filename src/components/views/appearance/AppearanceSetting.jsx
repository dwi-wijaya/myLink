import React, { useState } from 'react'
import ProfileForm from './profile/ProfileForm'
import Image from 'next/image';
import Preview from './Preview';
import LinkForm from './link/LinkForm';

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

    return (
        <div className='flex flex-col-reverse sm:flex-row justify-between gap-y-8'>
            <div className="appearance-setting w-full">
                <ProfileForm image={image} setImage={setImage} profile={profile} setProfile={setProfile} />
                <hr className="hr" />
                <LinkForm links={links} setLinks={setLinks} />
            </div>
            <div className="w-full">
                <Preview image={image} profile={profile} links={links} />
            </div>
        </div>
    )
}

export default AppearanceSetting
