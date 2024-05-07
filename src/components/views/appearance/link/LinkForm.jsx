import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React, { useState } from 'react'
import LinkComponent from './LinkComponent';
import { motion, AnimatePresence } from "framer-motion";

const LinkForm = ({ links, setLinks }) => {

    const [showForm, setShowform] = useState(false);

    const getLinkPos = id => links.findIndex(link =>
        link.id == id)

    const handleDragEnd = event => {
        const { active, over } = event

        if (active.id == over.id) return;

        setLinks((links) => {
            const originalPos = getLinkPos(active.id)
            const newPos = getLinkPos(over.id)

            return arrayMove(links, originalPos, newPos)

        })
    }

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    )

    const addLink = (event) => {
        event.preventDefault(); // Untuk mencegah pengiriman form

        const title = event.target.elements.title.value; // Ambil nilai dari input title
        const url = event.target.elements.url.value; // Ambil nilai dari input url

        if (title && url) { // Pastikan title dan url tidak kosong
            setLinks(links => [...links, { id: links.length + 1, title, url }]);
            setShowform(false); // Sembunyikan form setelah link ditambahkan
        }
    }

    const handleDelete = (id) => {
        setLinks(links => links.filter(link => link.id !== id));
    }

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <AnimatePresence>
                <motion.div
                    initial={false}
                    animate={showForm ? "open" : "closed"}
                    className={`link-form ${showForm ? 'link-form-visible' : 'link-form-hidden'}`}
                >

                    {!showForm && <motion.button
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileTap={{ scale: 0.90, transition: { duration: 0.1 } }}
                        onClick={() => setShowform(!showForm)} className='btn !bg-container !text-slate-500 border-stroke border mb-4 !w-full'
                    >
                        <i className="bx bx-link"></i> Add link
                    </motion.button>}

                    <motion.div
                        variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 6px)",
                                display: "block",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.2,
                                    delayChildren: 0,
                                    staggerChildren: 0.05
                                }
                            },
                            closed: {
                                clipPath: "inset(10% 50% 90% 50% round 6px)",
                                transitionEnd: {
                                    display: "none"
                                },
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.2
                                },
                            }
                        }}
                        style={{ pointerEvents: showForm ? "auto" : "none" }}
                        className="card mb-4">
                        <div className="w-full mb-4 flex justify-between items-center">
                            <h5 className='font-semibold ml-1'>Add your link</h5>
                            <div onClick={() => setShowform(!showForm)} className="text-xl bg-slate-50 hover:bg-slate-600 hover:text-slate-300 rounded-full py-1 px-2 transition-3s float-right bx bx-x cursor-pointer "></div>
                        </div>
                        <div className="flex gap-2">
                            <form onSubmit={addLink}>
                                <input type="text" required name="title" className="form-input mb-2" placeholder="Title" />
                                <input type="url" required name="url" className="form-input mb-2" placeholder="URL" />
                                <button type='submit' className='btn float-right mt-2'><i className="bx bx-link"></i> Add link</button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className='flex flex-col gap-y-2'>
                    {links.length != 0 ? <SortableContext items={links} strategy={verticalListSortingStrategy}>
                        {links.map((link, index) => (
                            <LinkComponent id={link.id} title={link.title} url={link.url} handleDelete={handleDelete} links={links} setLinks={setLinks} key={link.id} />
                        ))}
                    </SortableContext> : <h3 className='font-semibold text-center'>Oops! Looks like there are no links here</h3>}
                </motion.div>
            </AnimatePresence>
        </DndContext>
    );

}

export default LinkForm