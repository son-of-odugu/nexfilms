import { formatDate } from "@/lib/utils";

type data = {
  name: string;
  data?: string | Date | number;
};

interface Props {
  data: data[];
}

export default function Info({ data }: Props) {
  const getDate = (date?: Date) => {
    const newDate = date?.toString() || "";
    const { day, month, year } = formatDate(newDate);
    return [day, month, year];
  };
  return (
    <ul className="flex flex-col items-start justify-center gap-2 bg-accent p-2 text-xs text-accent-foreground">
      {data.map(
        ({ name, data }, index) =>
          data && (
            <li className="flex items-center gap-x-4 capitalize" key={index}>
              {name}:
              <span className="text-[0.65rem] font-thin lowercase">
                {data instanceof Date ? getDate(data).join(" ") : data}
              </span>
            </li>
          ),
      )}
    </ul>
  );
}
