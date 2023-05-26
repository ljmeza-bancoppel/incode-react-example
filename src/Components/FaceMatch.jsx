import { useEffect, useRef } from "react";

import incode from "../incode";

export default function FaceMatch({ session, onSuccess, onError, liveness, userExists }) {
    const containerRef = useRef();

    useEffect(() => {
        incode.renderFaceMatch(containerRef.current, {
            onSuccess,
            onError,
            token: session,
            liveness,
            userExists,
        });
    }, [onSuccess, onError, session, liveness, userExists]);

    return <div ref={containerRef}></div>;
}
