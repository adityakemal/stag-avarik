import { Button } from "components/anti"
import { useScrollAnim } from "components/hooks/hooks"
import SEO from "components/seo"

const Custom404 = () => {
    const [trigger, anim] = useScrollAnim()
    return (
        <>
            <SEO title="Page Not Found" />
            <section className="py-main h-100 content-center sc-notfound" ref={trigger}>
                <div className="container d-flex flex-column align-items-center">
                    <div className="col-md-6 text-center">
                        <h1 className={`"text-white h1 ${anim(10)}`}>404</h1>
                    </div>
                    <div className="col-md-6 text-center py-4">
                        <h4 className={anim(11)}>Looks like you’ve got lost..</h4>
                        <p className={`text-gray-500 font-weight-light w-300px ${anim(12)}`}>The page you’re looking for doesn’t exist or has been moved</p>
                        <Button variant="outline-white" link="/" className={anim(13)}>
                            BACK TO HOME
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Custom404