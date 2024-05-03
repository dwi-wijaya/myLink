import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const ButtonActionColumn = ({ route, id, children, onDeleteClick, file = null, }) => {
    const router = useRouter();

    return (
        <>
            <Link href={`${route}/${id}`} className="action-btn action-btn-primary">
                <i className="bx bx-search"></i>
            </Link>
            <Link href={`${route}/update/${id}`} className="action-btn action-btn-warning">
                <i className="bx bxs-pencil"></i>
            </Link>
            <a onClick={() => onDeleteClick()} className="action-btn action-btn-danger">
                <i className="bx bx-trash"></i>
            </a>
            {children}
        </>
    )
}

export default ButtonActionColumn;
