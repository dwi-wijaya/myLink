import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React, { useState } from 'react'
import LinkComponent from './LinkComponent';

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
            <div className={`link-form ${showForm ? 'link-form-visible' : 'link-form-hidden'}`}>
                {!showForm && <button onClick={() => setShowform(!showForm)} className='btn mb-4'>Add link <i className="bx bx-link"></i></button>}
                {showForm && <div className="card mb-4">
                    <div className="w-full mb-4">
                        <div onClick={() => setShowform(false)} className="float-right bx bx-x cursor-pointer"></div>
                    </div>
                    <h4 className='mb-2 font-semibold'>Add your link</h4>
                    <div className="flex gap-2">
                        <form onSubmit={addLink}>
                            <input type="text" required name="title" className="form-input mb-2" placeholder="Title" />
                            <input type="url" required name="url" className="form-input mb-2" placeholder="URL" />
                            <button type='submit' className='btn float-right'>Add <i className="bx bx-list-plus"></i></button>
                        </form>
                    </div>
                </div>}
            </div>
            <div className='flex flex-col gap-y-2'>
                <SortableContext items={links} strategy={verticalListSortingStrategy}>
                    {links.map((link, index) => (
                        <LinkComponent id={link.id} title={link.title} url={link.url} handleDelete={handleDelete}  key={link.id} />
                    ))}
                </SortableContext>
            </div>
        </DndContext>
    );

}

export default LinkForm