import WorkPage, { workMetadata, workParams } from "@/components/pages/WorkPage";

export const generateStaticParams = workParams;
export const generateMetadata = ({ params }: { params: { slug: string } }) => workMetadata("fr", params.slug);

export default function Page({ params }: { params: { slug: string } }) {
  return <WorkPage locale="fr" slug={params.slug} />;
}
