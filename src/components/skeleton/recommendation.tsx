import Listing from "./listing";
import Title from "./title";

export default function Recommendation() {
  const recommended = 6;

  return (
    <div className="-z-20 flex flex-col gap-1">
      <Title />
      <Listing length={recommended} />
    </div>
  );
}
