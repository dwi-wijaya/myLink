import { ColorPicker } from 'antd';
import { FileInput } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';

const ProfileForm = ({ image, setImage, profile, setProfile, avatarTypes }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleAvatarType = (value) => {
        setProfile({
            ...profile,
            avatarType: value,
        });
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const type = e.target.name
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(prevState => ({
                    ...prevState,
                    [type]: reader.result
                }));
                // setImage({ avatar: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReset = (type) => {
        setImage(prevState => ({
            ...prevState,
            [type]: ''
        }));
    };


    return (
        <>
            <div className="flex justify-between gap-2 sm:gap-3 items-center space-x-4 ">
                {/* Circle Image */}
                <div className={`relative min-w-24 min-h-24 max-w-24 max-h-24 overflow-hidden border border-stroke ${profile.avatarType}`}>
                    {image.avatar ? (
                        <Image
                            width={96}
                            height={96}
                            src={image.avatar}
                            alt="Avatar Preview"
                            className="object-cover min-w-24 min-h-24 max-w-24 max-h-24"
                        />
                    ) : (
                        <div className="flex items-center justify-center min-w-24 min-h-24 bg-container ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        name='avatar'
                        onChange={handleImageChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                </div>

                {/* Buttons */}
                <div className="w-full !ml-0">
                    <div className="flex flex-col w-full gap-2 sm:gap-3">
                        <label
                            htmlFor="avatar"
                            className="relative px-4 py-2 btn  rounded-lg cursor-pointer text-center"
                        >
                            <i className='bx bxs-user-circle'></i> Pick your own avatar
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                id="avatar"
                                name='avatar'
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                        </label>
                        <div className="flex gap-2">
                            {avatarTypes.map((type, i) => (
                                <div onClick={() => handleAvatarType(type)} className={`h-12 w-12 bg-container border border-stroke flex items-center justify-center ${type}`} key={i}>
                                    {type == profile.avatarType && <i className='text-2xl bx bx-check'></i>}
                                </div>
                            ))}
                            <button
                                onClick={() => handleReset('avatar')}
                                className={`flex-1 px-4 py-2 bg-container rounded-lg border border-stroke ${image.avatar ? 'text-text' : 'text-subtext cursor-not-allowed'}`}
                                disabled={!image.avatar}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="hr" />
            <div className="flex flex-col gap-3">
                <div className="flex w-full gap-2 justify-between">
                    <label
                        htmlFor="cover"
                        className="flex-1 whitespace-nowrap  w-full relative px-4 py-2 btn rounded-lg cursor-pointer text-center flex gap-2 items-center justify-center"
                    >
                        <i className='bx bxs-image'></i> Pick your own cover
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            id="cover"
                            name='cover'
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                    </label>

                    <button
                        onClick={() => handleReset('cover')}
                        className={`flex-1  px-4 py-2 bg-container rounded-lg border border-stroke ${image.cover ? 'text-text' : 'text-subtext cursor-not-allowed'}`}
                        disabled={!image.cover}
                    >
                        Remove
                    </button>
                </div>
                <div className="flex gap-3 relative">
                    <input name="title" value={profile.title} onChange={handleChange} type="text" className="form-input mb-3" placeholder='Profile Title' />
                </div>
            </div>
            <textarea name="bio" value={profile.bio} onChange={handleChange} id="" cols="30" rows="3" className='form-input' placeholder='Bio'></textarea>
        </>
    );
};

export default ProfileForm;


