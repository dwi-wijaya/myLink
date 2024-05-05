import { ColorPicker } from 'antd';
import { FileInput } from 'flowbite-react';
import { useState } from 'react';

const ProfileForm = ({ image, setImage, profile, setProfile }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

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
        console.log(image);
    };

    const handleReset = (type) => {
        setImage(prevState => ({
            ...prevState,
            [type]: ''
        }));
        console.log(image);
    };

    return (
        <>
            <div className="flex justify-between gap-3 items-center space-x-4">
                {/* Circle Image */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden border border-stroke">
                    {image.avatar ? (
                        <img
                            src={image.avatar}
                            alt="Avatar Preview"
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-container ">
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
                <div className="w-3/4">
                    <div className="flex flex-col">
                        <label
                            htmlFor="avatar"
                            className="relative px-4 py-2 mb-2 bg-slate-500 text-white rounded-lg cursor-pointer text-center"
                        >
                            Pick your own avatar
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                id="avatar"
                                name='avatar'
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                        </label>
                        <button
                            onClick={() => handleReset('avatar')}
                            className={`px-4 py-2 bg-container rounded-lg border border-stroke ${image.avatar ? 'text-text' : 'text-subtext'}`}
                            disabled={!image}
                        >
                            Remove
                        </button>
                    </div>
                </div>

            </div>
            <hr className="hr" />
            <div className="flex flex-col">
                <div className="flex w-full gap-2 justify-between mb-3">
                    <label
                        htmlFor="avatar"
                        className="w-full relative px-4 py-2 bg-slate-500 text-white rounded-lg cursor-pointer text-center flex gap-2 items-center justify-center"
                    >
                        <i class='bx bxs-image'></i> Pick your own cover
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
                        className={`w-1/4 px-4 py-2 bg-container rounded-lg border border-stroke ${image.cover ? 'text-text' : 'text-subtext'}`}
                        disabled={!image}
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


