import Head from "next/head";

export type HeadContentProps = { title?: string; description?: string };

export default function HeadContent({ title, description }: HeadContentProps) {
  const titleTemplate = title ? `${title} - Coin verse` : "Coin verse";
  const descriptionTemplate =
    description ||
    "This is coin verse, a place where you can find the best casinos and the best ways to earn money online. You can but bitcoin, ethereum and many more. You can also earn money by playing games, watching videos, doing surveys and more.";
  return (
    <Head>
      <title>{titleTemplate}</title>
      <meta property="og:title" content={titleTemplate} key="title" />
      <meta name="description" content={descriptionTemplate} />
      <meta />
    </Head>
  );
}
