import PageContainer from '../shared/components/PageContainer'
import AppProvider from '../shared/components/AppProvider'
import FacetHead from './FacetHead'
import Blog from '../posts/Introdcution/index.mdx';

export default function BlogPage() {
    return (
        <AppProvider>

            <FacetHead />
            <Blog />

        </AppProvider>
    )
}