import ArticlePage, { articleMetadata, articleParams } from "@/components/pages/ArticlePage";

export const generateStaticParams = articleParams;
export const generateMetadata = ({ params }: { params: { slug: string } }) => articleMetadata("en", params.slug);

export default function Page({ params }: { params: { slug: string } }) {
  return <ArticlePage locale="en" slug={params.slug} />;
}
