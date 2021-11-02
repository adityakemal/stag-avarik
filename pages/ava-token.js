import Layout from "components/layout";
import AvaTokenMain from "components/pages/ava-token/ava-token-main";
import Seo from "components/seo";
import React from "react";
import Helmet from "react-helmet";


const AvaTokenPage = () => {
    return (
        <>
            <Seo title="Avarik Saga NFT" />
            <Layout>
                <Helmet>
                    <body className="bd-ava-token" />
                </Helmet>
                <AvaTokenMain />
            </Layout>
        </>
    );
};

export default AvaTokenPage;
