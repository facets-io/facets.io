
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function FAQ() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Facet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <ol>
                    <li>
                        <h4>Why Facet?</h4>
                        <p>
                            Facet abstracts the rollout mechanism that used to be achieved by using feature flags. At facet, we believe that engineers shouldn't spend their time maintaining manual configurations that come along with feature flags. We enable engineers to focus on building the future, while we build the rollout mechanisms which offer rollout abstractions.
                        </p>
                    </li>
                    <li>
                        <h4>What is a facet?</h4>
                        <p>
                            A facet is a set elements that construe a feature. For instance, a login form could be considered a facet, with the elements being username and password. (//todo add image)
                        </p>
                    </li>
                    <li>
                        <h4>Is facet secure?</h4>
                        <p>
                            At facet, Security is at the center of our priorities. We have integrated with multiple vendors who champion DevSecOps,including Snyk and Github, to ensure secure codebases. We are also working on getting ISO, HIIPA and other security compliance licenses.
                        </p>
                    </li>
                    <li>
                        <h4>Is JS/HTML code delivered at all after disabling a facet?</h4>
                        <p>
                            JS code is delivered at all times to the end user. The facet CDN script observes facets and hides them from the website, but code is still being delivered to the website.
                        </p>
                    </li>
                    <li>
                        <h4>My facet is declared in multiple pages (ie: menu). Can I declare a global facets?</h4>
                        <p>
                            Not yet. WIP!
                        </p>
                    </li>
                    <li>
                        <h4>How to hide a facet before rolling out to production?</h4>
                        <p>
                            Not yet. WIP!
                        </p>
                    </li>
                    <li>
                        <h4>Can I declare facets within backend technologies?</h4>
                        <p>
                            Not yet. Our team is working hard to offer facet declaration for backend systems. We will be launching a pilot soon, targeting Java as the piloting language. However, we are planning to make the underlying API open source, so that affiliating SDKs can be implemented in whichever language of interest.
                        </p>
                    </li>
                    <li>
                        <h4>Is facet open source?</h4>
                        <p>
                            Currently, facet-extension is open source. We believe in open source and we plan to make many of our systems open source as they become ready for release.
                        </p>
                    </li>
                    <li>
                        <h4>What is the roadmap?</h4>
                        <p>
                            The roadmap for facet-extension can be tracked through our <a href='https://github.com/facets-io/facet-extension/projects/1'>Github board</a>.
                        </p>
                    </li>
                    <li>
                        <h4>How to contact?</h4>
                        <p>
                            You can open github issue or email us at support@facet.ninja.
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    )
}
