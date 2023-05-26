import { useEffect, useRef } from "react";

import incode from "../incode";

export default function ProcessId({ session, onSuccess }) {
    useEffect(() => {
        incode.processId({ token: session.token }).then(() => {
            onSuccess();
        });
    }, [onSuccess, session]);

    return <p>Processing...</p>;
}