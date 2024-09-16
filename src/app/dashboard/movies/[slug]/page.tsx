import { redirect } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  if (params.slug === "new") {
    return <h1>New Page</h1>;
  }
  if (params.slug === "edit") {
    return <h1>Old Page</h1>;
  }

  redirect("/movies");
}
