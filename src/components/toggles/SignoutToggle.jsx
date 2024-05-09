// SignoutToggle.js

import { useUser } from "@/context/user";
import { SignOut } from "@/services/firebase/config";
import { Button, Modal } from "flowbite-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SignoutToggle = () => {
    const [openModal, setOpenModal] = useState(false);
    const user = useUser();
    const { uuid } = user;

    const handleSignout = () => {
        SignOut();
        setOpenModal(false);
    }
    
    return uuid && (
        <>
            <button className='toggle right-[4.5rem]' onClick={() => setOpenModal(true)}>
                <i className="icon-logout rotate-180" />
            </button>
            <Modal show={openModal} onClose={() => setOpenModal(false)} size='sm'>
                <Modal.Body>
                    <div className="text-center">
                        <div className="mx-auto mb-4 h-10 w-10 text-slate-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-600 rounded-md p-1" >
                        <svg class="_vZPglRSyqi4oTXg5L1_ _pwSRUXRHN5bHphyTRKz K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to sign out?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <button className="btn flex-1" onClick={handleSignout}>
                                {"Yes, I'm sure"}
                            </button>
                            <button className="btn !bg-transparent !text-slate-700 dark:!text-slate-200 flex-1 border border-stroke" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SignoutToggle;
