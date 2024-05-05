import React, { useEffect, useRef, useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const LinkComponent = ({ id, title, url, order, handleDelete, setLinks, links }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    const [linkTitle, setLinktitle] = useState(title);
    const [onUpdate, setOnupdate] = useState(false)

    const handleChange = (e) => {
        setLinktitle(e.target.value)
        const id = e.target.id
        // Find the index of the object with the given ID
        handleUpdate(id, e.target.value, e.target.name)
    }

    const inputRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setOnupdate(false);
            }
        };


        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onUpdate]);

    const handleUpdate = (id, value, type) => {
        console.log(links);
        const index = links.findIndex(link =>
            link.id == id)
        console.log(index);
        // // If the object is not found, return without updating
        if (index === -1) return;

        // // Create a copy of the array
        // const newArray = [...yourArray];
        const updatedLinks = [...links];
        // // Update the specific object within the copied array
        updatedLinks[index] = { ...updatedLinks[index], title: value };

        // // Set the state with the updated array
        setLinks(updatedLinks);

    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} className="bg-container border border-stroke px-3 py-2 rounded-lg  touch-none cursor-default">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <button className='btn !bg-background !border-stroke' {...listeners}><i className="bx bx-grid-alt"></i></button>
                    <div className="flex flex-col">

                        <p className="flex items-center gap-3 mb-0">
                            {onUpdate && <input ref={inputRef} id={id} name='title' onChange={handleChange} type="text" className='w-fit focus:!outline-transparent p-0 outline-offset-2 !outline-transparent border-none' value={linkTitle} />}
                            {!onUpdate && <p>{linkTitle}</p>}
                            {!onUpdate && <i onClick={() => setOnupdate(true)} className="bx bx-pencil"></i>}
                        </p>

                        <p className="flex items-center gap-3 text-subtext">
                            {url} {!onUpdate && <i onClick={() => setOnupdate(true)} className="bx bx-pencil"></i>}
                        </p>
                    </div>
                </div>
                <div className="action-column flex flex- gap-1">
                    <button onClick={() => handleDelete(id)} className="btn">
                        <i className="bx bx-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LinkComponent;
