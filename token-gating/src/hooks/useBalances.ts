import { NativeBalance } from "./../types/NativeBalance";
import { useCallback, useEffect, useState } from "react";
import Moralis from "moralis";
import { useAppContext } from "@/contexts/AppContext";
import { current_chain } from "@/util/chain";

export function useBalances() {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [nativeBalance, setNativeBalance] = useState<NativeBalance>();
    const { address } = useAppContext();

    const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY ?? "";

    const fetchTokenBalance = useCallback(async () => {
        try {
            if (!address) return;
            if (!Moralis.Core.isStarted) {
                await Moralis.start({ apiKey });
            }

            const native_balance = await fetch(
                `https://deep-index.moralis.io/api/v2.2/0x057Ec652A4F150f7FF94f089A38008f49a0DF88e/balance?` +
                    new URLSearchParams({
                        chain: current_chain,
                    }),
                {
                    method: "get",
                    headers: {
                        accept: "application/json",
                        "X-API-Key": `${apiKey}`,
                    },
                }
            );
            const native = await native_balance.json();
            setNativeBalance(native);

            // const native_balance =
            //     await Moralis.EvmApi.balance.getNativeBalance({
            //         address,
            //         chain: current_chain,
            //     });
            // setNativeBalance(native_balance.toJSON());
        } catch (error) {
            console.log("Error fetching token balances: ", error);
            setMessage("Error fetching token balances");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTokenBalance();
    }, [fetchTokenBalance]);

    return {
        loading,
        message,
        nativeBalance,
    };
}
