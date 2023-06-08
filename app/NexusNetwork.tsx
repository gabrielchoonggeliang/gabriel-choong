import React from 'react';
import Image from 'next/image';

const NexusNetwork = () => {
    return (
        <a href="/" className="nexus-network">
            <Image
                src="/images/nexus-network.png"
                alt="Nexus Network"
                width={90}
                height={90}
            />
        </a>
    )
}

export default NexusNetwork;