import { useEffect, useRef } from "react";

import incode from "../incode";

export default function PhoneNumberInput({ session, onSuccess, onError }) {
    const containerRef = useRef();
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            return;
        }
        incode.addPhone({
            token: session,
            phone: "5555555555"
        }).then((res) => console.log("res:", res));


        isMounted.current = true;
    }, [onSuccess, onError, session]);

    return <div ref={containerRef}></div>;
}
