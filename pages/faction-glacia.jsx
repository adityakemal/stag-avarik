import React from 'react'
import Layout from "components/layout"
import SEO from "components/seo"
import { Helmet } from "react-helmet"
import FactionGlaciaMain from 'components/pages/faction-lore/FactionGlaciaMain'


export default function factionIgnis() {
    return (
        <>
            <SEO title="Faction Glacia" />
            <Helmet>
                <body className="bd-faction-glacia" />
            </Helmet>
            <Layout>
                <FactionGlaciaMain />
            </Layout>
        </>
    )
}
