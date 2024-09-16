import { Download } from "lucide-react";

import { Button } from "./ui/button";

interface Props {
  videoUrl: string;
  title: string;
}

export default function DownloadBtn({ videoUrl, title }: Props) {
  const handleDownload = async () => {
    try {
      const link = document.createElement("a");
      link.href = videoUrl;
      link.download = title;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className="text-md px-3 py-1 capitalize text-white shadow-sm dark:shadow-none"
    >
      <span>download</span>
      <Download className="size-4" />
    </Button>
  );
}
