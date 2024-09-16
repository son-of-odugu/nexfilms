interface Props {
  url: string;
  title: string;
}

export default function Trailer({ url, title }: Props) {
  return (
    <div className="my-2 flex flex-col items-center justify-center gap-4">
      <h2 className="cursor-default text-2xl font-bold uppercase text-primary">
        {title}
      </h2>
      <iframe
        className="object-fit h-[60vh] w-[80vw] rounded-lg sm:w-[55vw] md:w-[60vw] lg:h-[70vh] lg:w-[70vw]"
        src={url}
        title={title}
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      ></iframe>
    </div>
  );
}
