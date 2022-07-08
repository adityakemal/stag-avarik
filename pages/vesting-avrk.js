import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected
} from "@web3-react/injected-connector"
import Layout from "components/layout"
import BeforeConnectVesting from "components/pages/avrk/before-connect-vesting"
import Faq from "components/pages/avrk/faq"
import VestingAvrkMain from "components/pages/avrk/vesting-avrk-main"
import SEO from "components/seo"
import { ErrorStateContext } from "context/error-msg-context"
import { useContext, useEffect } from "react"
import { Helmet } from "react-helmet"

const VestingAvrk = () => {
    const { account, error } = useWeb3React()
    const { setErrorMsg } = useContext(ErrorStateContext);

    useEffect(() => {
        if (error) {
            getErrorMessage(error)
        } else {
            setErrorMsg("")
        }
    }, [error])

    const getErrorMessage = (error) => {
        if (error instanceof NoEthereumProviderError) {
            setErrorMsg(
                "No Ethereum browser extension detected, install MetaMask on desktop or visit from a App browser on mobile."
            );
        } else if (error instanceof UnsupportedChainIdError) {
            setErrorMsg("You're connected to an unsupported network.");
        } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
        ) {
            setErrorMsg("Please authorize this website to access your Ethereum account.");
        } else {
            setErrorMsg("An unknown error occurred. Check the console for more details.");
        }
    };
    return (
        <>
            <SEO title="Vesting AVRK" />
            <Helmet>
                <body className="bd-vesting-avrk" />
            </Helmet>
            <Layout>
                {account ? (
                    <VestingAvrkMain />
                ) : (
                    <>
                        <BeforeConnectVesting />
                        <Faq
                            list={[
                                {
                                    question: "What is hold-to-earn?",
                                    answer: " It is a mechanism that allows anyone who owns an Avarik NFT to automatically earn approximately 3 $VORTEM per day. Much like putting your money in a deposit or other forms of investment, “hold-to-earn” lets you earn some interest from holding the NFT.",
                                },
                                {
                                    question: "How much $VORTEM can I earn?",
                                    answer: "You can earn around 3 $VORTEM per day for each NFT that you own.",
                                },
                                {
                                    question: "When can I claim my tokens?",
                                    answer: "You can claim your $VORTEM tokens once Avarik Saga has officially and fully launched. For now, you can find ou how many tokens you can earn by connecting to your wallet.",
                                },
                                {
                                    question: "Is hold-to-earn like NFT staking?",
                                    answer: "Yes, this is essentially NFT staking. Our staking feature is still currently under development, which is why players can’t actually claim their $VORTEM tokens yet, and thus this mechanism is temporarily called “hold-to-earn”.",
                                },
                            ]}
                        />
                    </>
                )}
            </Layout>
        </>
    )
}
export default VestingAvrk