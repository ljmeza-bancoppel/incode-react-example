import { useEffect, useRef } from "react";

import incode from "../incode";

export default function FrontId({ session, onSuccess, onError }) {
    const containerRef = useRef();
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            return;
        }
        incode.renderCamera("front", containerRef.current, {
            onSuccess,
            onError: onError,
            token: session,
            numberOfTries: -1,
            showTutorial: true,
        });

        isMounted.current = true;
    }, [onSuccess, onError, session]);

    return <div ref={containerRef}></div>;
}
