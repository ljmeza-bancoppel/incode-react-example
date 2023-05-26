import { useEffect, useRef } from "react";

import incode from "../incode";

export default function Selfie({ session, onSuccess, onError }) {
    const containerRef = useRef();
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            return false;
        }
        incode.renderCamera("selfie", containerRef.current, {
            onSuccess,
            onError: onError,
            token: session,
            numberOfTries: 3,
            showTutorial: true,
        });
        isMounted.current = true;
    }, [onSuccess, onError, session]);

    return <div ref={containerRef}></div>;
}