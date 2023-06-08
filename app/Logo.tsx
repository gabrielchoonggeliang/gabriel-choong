import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <a href="/" className="nexus-network">
            <Image
                src="/images/logo.png"
                alt="Nexus Network"
                width={90}
                height={90}
            />
        </a>
    )
}

export default Logo;