import { Button, Modal } from 'flowbite-react'
import React from 'react'

const PopupModal = ({ msg, openModal, setOpenModal, handleConfirm, isLoading }) => {
    return (
        <Modal show={openModal} onClose={() => setOpenModal(false)} size="sm">
            <Modal.Body>
                <div className="text-center">
                    <div className="mx-auto mb-4 h-10 w-10 text-slate-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-600 rounded-md p-1 flex items-center justify-center text-xl">
                        <i className="icon-exclamation"></i>
                    </div>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        {msg}
                    </h3>
                    <div className="flex justify-center gap-4">
                        <button className="btn" onClick={handleConfirm}>
                            {isLoading ? (
                                <> <i className="bx bx-loader bx-spin" /> Loading...</>
                            ) : (`Yes, I'm sure`)
                            }
                        </button>
                        <button className="btn !bg-slate-50 !text-subtext dark:!bg-slate-600 !border-stroke" onClick={() => setOpenModal(false)}>
                            No, cancel
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default PopupModal