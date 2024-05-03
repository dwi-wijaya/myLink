import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

export const BackButton = ({href}) => {
    const router = useRouter();

    return (
        <Link href={href} className='flex gap-1 items-center text-subtext mb-3' >
            <i className="icon-arrow-left-circle"></i>
            Back
        </Link>
    )
}

