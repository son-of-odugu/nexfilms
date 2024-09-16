import Sorting from "./sorting";

interface Props {
  value: string;
  sorting?: boolean;
}

export default function Title({ value, sorting = false }: Props) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-md cursor-default font-semibold capitalize text-primary lg:text-lg">
        {value}
      </h1>
      {sorting && <Sorting />}
    </div>
  );
}
