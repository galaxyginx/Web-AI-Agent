'use client'
import { ViewProps } from "@/types"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export function Carousels({ masterData, t }: ViewProps) {
    return <Carousel className="absolute bg-white w-screen h-screen" plugins={[Autoplay({ delay: 2000 })]}>
        <CarouselContent>
            <CarouselItem key={1}>
                <div className="relative w-screen h-screen">
                    <Image src="/images/GalleryPhoto14K.jpg" fill sizes="(width: auto, height: auto)" loading="eager" alt="gallery1" />
                </div>
            </CarouselItem>
            {/* <CarouselItem key={2}>
                <div className="relative w-screen h-screen">
                    <Image src="/images/GalleryPhoto24K.jpg" fill sizes="(width: auto, height: auto)" loading="eager" alt="gallery2" />
                </div>
            </CarouselItem> */}
            <CarouselItem key={3}>
                <div className="relative w-screen h-screen">
                    <Image src="/images/CockpitBoeing.jpg" fill sizes="(width: auto, height: auto)" loading="eager" alt="gallery3" />
                </div>
            </CarouselItem>
            <CarouselItem key={4}>
                <div className="relative w-screen h-screen">
                    <Image src='/images/xxxspace-logo.jpg' fill sizes="(width: auto, height: auto)" loading="eager" className="w-full self-center" alt="xxxspace" />
                </div>
            </CarouselItem>
        </CarouselContent>
    </Carousel>
}