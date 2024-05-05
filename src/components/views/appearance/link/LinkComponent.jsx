import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const LinkComponent = ({ id, title, url, order, handleDelete, handleUpdate }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };


    return (
        <div ref={setNodeRef} style={style} {...attributes}  className="bg-container border border-stroke px-3 py-2 rounded-lg  touch-none cursor-default">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <button className='btn !bg-background !border-stroke' {...listeners}><i className="bx bx-grid-alt"></i></button>
                    <div className="flex flex-col">
                        
                            <p className="flex items-center gap-3 mb-0">
                                {title}
                                <i onClick={handleUpdate} className="bx bx-pencil"></i>
                            </p>

                        <p className="flex items-center gap-3 text-subtext">
                            {url} <i onClick={handleUpdate} className="bx bx-pencil"></i>
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
