import logoMain from "assets/img/common/logo_main-title.png";
import { Link } from "components/anti/link/link";
import React from "react";
import AvaTokenAbout from "./ava-token-about";
import AvaTokenClaim from "./ava-token-claim";
import AvaTokenClaimBenefit from "./ava-token-claim-benefit";
import AvaTokenRecruit from "./ava-token-recruit";
import AvaTokenStakingAvrk from "./ava-token-staking-avrk";
import AvaTokenTotalSupply from "./ava-token-total-supply";
import AvaTokenWhere from "./ava-token-where";
import milestone from "assets/img/token/img_milestone.png";

const AvaTokenMain = () => {

    return (
        <div className="sc-main sc-ava-token pb-main">
            <div className="container mw-xl">
                <Link to="/" className="logo">
                    <img src={logoMain} className={`img-fluid`} alt="Logo" />
                </Link>
                <div className={`box box-light animated fadeIn`}>
                    <div className="box-inner">
                        <div className="content">
                            <AvaTokenAbout />
                            <AvaTokenWhere />
                            <AvaTokenClaim />
                            <AvaTokenRecruit />
                            <AvaTokenStakingAvrk />
                            <AvaTokenClaimBenefit />
                            <AvaTokenTotalSupply />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvaTokenMain;
