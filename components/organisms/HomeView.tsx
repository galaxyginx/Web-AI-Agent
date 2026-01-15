import { ViewProps } from "@/types";
import Link from "next/link";
import { getLocalePath } from "@/translation/";
import { Carousel, CarouselContent } from "../ui/carousel";
import Image from "next/image";
import { InputGroupButton } from "../ui/input-group";
import { ArrowUpIcon } from "lucide-react";
import { Carousels } from "../molecules/Carousel";
// import Autoplay from "embla-carousel-autoplay";

export function HomeView({ masterData, t }: ViewProps) {
    return <div className={`relative flex-col w-full h-full`}>
        <Carousels masterData={masterData} t={t} isMobile />
        <div className="absolute flex flex-col w-full h-screen overflow-scroll">
            <section className="w-screen h-screen">
                <div className="flex flex-col h-screen px-4 mx-auto text-center laptop:justify-center items-center">
                    <div className="flex flex-1 flex-col items-center">
                        {/* <h1 className="mt-24 text-7xl font-extralight tracking-tight leading-none text-transparent bg-clip-text bg-gray-200 tablet:text-9xl laptop:text-[140px] large-screen:text-[150px]">GalaxyX</h1> */}
                        <p className="text-3xl font-medium text-gray-300 px-4 mt-16 laptop:text-4xl laptop:px-48 laptop:mt-36">AI, YouTube, XXXSPACE</p>
                        <p className="text-3xl font-medium text-gray-300 px-4 mt-2 laptop:text-4xl">New Personal agent for you, starting from free for personal use.</p>
                        <Link href={`/chat`} className="mt-8">
                            <div className="flex flex-row justify-between w-[60vw] self-center bg-gray-800 rounded-4xl py-4 px-4 border-none focus:outline-none tablet:mx-4 tablet:w-[40vw]">
                                <div className="px-4">{t.input_placeholder}</div>
                                    <InputGroupButton variant="default" className="rounded-full bg-blue-500">
                                        <ArrowUpIcon />
                                    </InputGroupButton>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <div className="flex flex-row items-center bg-sidebar/30 rounded-2xl px-6 gap-4 laptop:gap-16">
                            <Link href={`/chat`}>
                                <svg className="text-white w-20 h-20 laptop:w-24 laptop:h-24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z" clipRule="evenodd"/>
                                </svg>
                            </Link>
                            <Link href={`https://www.youtube.com/@galaxyginx`} target="_blank" rel="noopener noreferrer">
                                <svg className="text-white w-20 h-20 laptop:w-24 laptop:h-24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                    <path fillRule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <svg className="text-white w-20 h-20 laptop:w-24 laptop:h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF">
                                <path d="M0 0h24v24H0z" fill="none" /><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                            </svg>
                            {/* <svg className="text-white w-20 h-20 laptop:w-24 laptop:h-24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
                            </svg> */}
                            <Link href={`https://xxxspace.live`} target="_blank" rel="noopener noreferrer">
                                <Image src={'/images/xxxspace-logo.jpg'} width={128} height={128} alt="xxxspace" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-screen h-full px-8 py-20 laptop:px-80">
                <div className="flex flex-col laptop:flex-row h-auto laptop:h-[400px] p-2 gap-2 my-20 bg-gray-700 border-2 border-solid border-gray-500 rounded-xl shadow-2xl">
                    <div className="flex-1 ml-2">
                        {/* <div className="text-5xl text-transparent bg-clip-text from-gray-500 to-white bg-gradient-to-r laptop:text-6xl">{t.image_ai}</div> */}
                        {/* <div className="text-lg text-gray-200 my-2 laptop:text-2xl">{t.image_ai_detail}</div> */}
                        <a href={getLocalePath(masterData.locale) + 'models'} className="text-blue-500 underline text-lg">Learn more</a>
                    </div>
                    <div className="flex flex-row">
                        <video src="/images/ObjectDetection1080p.mp4" className="h-full min-w-[180px] laptop:min-w-[200px]" autoPlay muted controls={false} loop playsInline />
                        <Image src={'/images/AirplaneClassifier.png'} className="h-full min-w-[160px] laptop:min-w-[200px]" width={160} height={300} alt="airplane classifier" />
                    </div>
                </div>
                {/* For bottom margin */}
                <div className="h-4" />
            </section>
        </div>
    </div>
}