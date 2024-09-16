import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Headline = () => {
  const images = [
    "https://placehold.co/600x400/png",
    "https://placehold.co/600x400/png",
    "https://placehold.co/600x400/png",
    "https://placehold.co/600x400/png",
  ];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image + index}>
            <div className="mx-4 h-[250px] w-4/5 rounded-lg">
              {/* <Card > */}
              {/* <CardContent className="flex items-center justify-center"> */}
              <img
                src={image}
                alt={"headline" + index + 1}
                width={500}
                height={400}
                className="rounded-lg object-contain"
              />
              {/* </CardContent>
                </Card> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Headline;
