import { useEffect, useRef } from "react";

import FrontId from "./FrontId";

import coppelBanner from "../imgs/coppel-banner.jpeg";

export default function IncodeContainer({ session, onSuccess, onError, params }) {
    const containerRef = useRef();

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    };
  
    return <div ref={containerRef}>
        <img src={coppelBanner} style={imgStyle} />
        <FrontId session={session} onSuccess={onSuccess} onError={onError} />
    </div>;
  }