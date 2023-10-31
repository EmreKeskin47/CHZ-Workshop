import { useCallback, useEffect, useState } from "react";

export function useBalances() {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    const fetchTokenBalance = useCallback(async () => {}, []);

    useEffect(() => {
        fetchTokenBalance();
    }, [fetchTokenBalance]);

    return {
        loading,
        message,
    };
}
