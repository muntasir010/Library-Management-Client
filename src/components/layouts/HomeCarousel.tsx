import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomeCarousel() {
  return (
    <Carousel className="w-full my-8">
      <CarouselContent>
        <CarouselItem>
          <img
            src="https://i.ibb.co.com/nq3bGsL3/31561.jpg"
            alt="Slide 1"
            className=" object-cover rounded-xl w-full max-h-[620px]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://i.ibb.co.com/Mk2gvDQx/abundant-collection-antique-books-wooden-shelves-generated-by-ai.jpg"
            alt="Slide 2"
            className=" object-cover rounded-xl w-full max-h-[620px]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://i.ibb.co.com/ZRLSVLjF/young-student-looking-book-library.jpg"
            alt="Slide 3"
            className=" object-cover rounded-xl w-full max-h-[620px]"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
