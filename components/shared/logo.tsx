import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <Link href={'/'}>
            <div className="flex items-center gap-1">
                <Image src={'/Logo.svg'} width={100} height={100} alt='Logo'/>
                <div className="text-4xl font-bold font-space-grotesk text-primary">Hadji</div>
            </div>
        </Link>
    )
}

export default Logo