import Container from '@/components/layout/Container'
import getDocument from '@/services/firebase/crud/getDocument'
import { NextSeo } from 'next-seo'
import React from 'react'
import Profile from '@/components/views/profile/Profile'

const PreviewProfile = ({ data }) => {
    return (
        <>
            <NextSeo title={`${data.profile.title} - myLink`} />
            <Profile data={data} />
        </>
    )
}

export default PreviewProfile

export const getServerSideProps = async ({ params }) => {
    const { result } = await getDocument('links', params?.username, false, 'username')

    return {
        props: {
            data: JSON.parse(JSON.stringify(result)),
        },
    };
}