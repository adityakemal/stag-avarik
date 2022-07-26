import React from 'react'
import Layout from "components/layout"
import SEO from "components/seo"
import { Helmet } from "react-helmet"
import FactionIgnisMain from 'components/pages/faction-lore/FactionIgnisMain'


export default function factionIgnis() {
    return (
        <>
            <SEO title="Faction Ignis" />
            <Helmet>
                <body className="bd-faction-ignis" />
            </Helmet>
            <Layout>
                <FactionIgnisMain />
            </Layout>
        </>
    )
}
