import { useEffect, useRef } from "react";

import incode from "../incode";

export default function RetrySteps({ session, onSuccess, onError, numberOfTries }) {
    const containerRef = useRef();
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            return;
        }
        incode.renderRetrySteps(
            containerRef.current,
            {
                token: session,
                numberOfTries,
            },
            {
                onSuccess,
                onError,
            }
        );
        isMounted.current = true;
    }, [onSuccess, onError, session, numberOfTries]);

    return <div ref={containerRef}></div>;
}