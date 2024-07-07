import React from 'react';
import wondersImages from "@/app/photo-feed/wonders";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
    return (
        <main className='container mx-auto'>
            <h1 className='text-center text-3xl font-bold my-4'>
                New Wonders of the World
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    wondersImages.map(({id, src, name}) => (
                        <Link key={id} href={`/photo-feed/${id}`}>
                            <Image
                                src={src}
                                alt={name}
                                className='w-full object-cover aspect-square'
                            />
                        </Link>
                    ))
                }
            </div>
        </main>
    );
};

export default Home;