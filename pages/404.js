import { Button } from "components/anti"
import { useScrollAnim } from "components/hooks/hooks"
import SEO from "components/seo"
import { Helmet } from "react-helmet"

const Custom404 = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <>
            <SEO title="Page Not Found" />
            <Helmet>
                <body className="bd-notfound"></body>
            </Helmet>
            <section className="py-main h-100 content-center sc-notfound" ref={trigger}>
                <div className="container d-flex flex-column align-items-center">
                    <div className="col-md-6 text-center">
                        <h1 className={`h1 text-white ${anim(1)}`}>404</h1>
                    </div>
                    <div className="col-md-6 text-center py-4 d-flex flex-column align-items-center">
                        <h4 className={`text-white ${anim(2)}`}>Looks like you’ve got lost..</h4>
                        <p className={`text-gray-500 font-weight-light text-center w-300px ${anim(3)}`}>The page you’re looking for doesn’t exist or has been moved</p>
                        <Button variant="outline-white" link="/" className={anim(4)}>
                            BACK TO HOME
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Custom404