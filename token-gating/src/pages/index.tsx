import ConnectWalletBtn from "@/components/ConnectWalletBtn";
import Meeting from "@/components/Meeting";
import { useAppContext } from "@/contexts/AppContext";
import { useAuth } from "@/hooks/useAuth";
import styles from "@/styles/Home.module.css";

function Hub() {
    const { isConnected } = useAppContext();
    const { handleConnect } = useAuth();

    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <div>
                    <h1 className="text-6xl font-semibold my-4 text-center">
                        Welcome to the Chilliz Hub
                    </h1>

                    <h2 className="text-4xl text-center">
                        <div className="my-8">Only Fan Token Holders can</div>
                        <div className="mt-8">
                            join exclusive virtual meetups
                        </div>
                    </h2>
                </div>
            </div>
            {isConnected ? (
                <Meeting />
            ) : (
                <ConnectWalletBtn onClick={handleConnect} />
            )}
        </main>
    );
}
export default Hub;
