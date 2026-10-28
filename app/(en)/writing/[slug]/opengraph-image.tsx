import { ogSize } from "@/lib/og";
import { articleImageParams, articleShareImage } from "@/components/pages/articleImage";

export const alt = "Article by Chukwuemeka Iheonye";
export const size = ogSize;
export const contentType = "image/png";
export const generateStaticParams = articleImageParams;

export default function ArticleImage({ params }: { params: { slug: string } }) {
  return articleShareImage("en", params.slug);
}
