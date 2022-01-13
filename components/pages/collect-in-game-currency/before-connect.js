import AvarikButton from "components/avarik-saga/avarik-button"
import holdToEarnImage from "assets/img/vortem/5b_staking_image.png"

const BeforeConnect = ({ setModal }) => {
    return (
        <section className="sc-before-connect">
            <div className="py-main container mw-xl">
                <div className="row">
                    <div className="col-md-5 col-text">
                        <h1 className="text-white fadeInUp d1">Hold Your Token to Earn $VORTEM</h1>
                        <p className={`text-white fadeInUp d2 mb-3`}>
                            For each Avarik Saga NFT that you hold will earn approximately 3 $VORTEM per day.
                        </p>
                        <p className={`text-white fadeInUp d3`}>
                            You can claim your $VORTEM tokens once the game is officially launched.
                        </p>
                        <h5 className={`text-white fadeInUp d4 mb-4 mt-3`}>
                            To see how much $VORTEM you can earn, please connect by clicking on the button below.
                        </h5>
                        <AvarikButton
                            className="fadeInUp d5 btn-connect w-250px"
                            onClick={() => setModal("modalConnect")}
                            text="Connect Wallet"
                        />
                    </div>
                    <div className="col-md-7 text-right">
                        <img
                            src={holdToEarnImage}
                            className={`img-fluid img-hold-to-earn fadeInUp d3`}
                            alt="Vortem"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BeforeConnect