import React from "react";
import NexusNetwork from "./NexusNetwork";
import HorizontalList from "./HorizontalList";

const LiteralHeader = () => {
    return (
        <ul className="literal-header">
            <li><NexusNetwork/></li>
            <li><HorizontalList/></li>
        </ul>
    )
}

export default LiteralHeader;