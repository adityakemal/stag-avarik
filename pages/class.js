import Layout from "components/layout"
import ClassMain from "components/pages/class/class-main"
import SEO from "components/seo"
import { Helmet } from "react-helmet"


const Class = () => {
    return (
        <>
            <SEO title="Class" />
            <Helmet>
                <body className="bd-class" />
            </Helmet>
            <Layout>
                <ClassMain />
            </Layout>
        </>
    )
}

export default Class