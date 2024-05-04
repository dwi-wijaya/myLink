import { ColorPicker } from 'antd';
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
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReset = () => {
        setImage(null);
    };

    return (
        <>
            <div className="flex justify-between gap-3 items-center space-x-4">
                {/* Circle Image */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden border border-stroke">
                    {image ? (
                        <img
                            src={image}
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
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                        </label>
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 bg-container text-text rounded-lg border border-stroke"
                            disabled={!image}
                        >
                            Remove
                        </button>
                    </div>
                </div>

            </div>
            <hr className="hr" />
            <div className="flex gap-3 relative">
            <input name="title" value={profile.title} onChange={handleChange} type="text" className="form-input mb-3" placeholder='Profile Title' />
            </div>
            <textarea name="bio" value={profile.bio} onChange={handleChange} id="" cols="30" rows="3" className='form-input' placeholder='Bio'></textarea>
        </>
    );
};

export default ProfileForm;


