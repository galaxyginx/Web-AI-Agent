import { ViewProps } from "@/types"
import { getLocalePath } from "@/translation"
import Image from "next/image"
import Link from "next/link"

export function ModelsView({ masterData, t }: ViewProps) {
    const aviation_models = [{ 'title': t.aviation_ai.title, 'uri': 'aircraft', 'description': t.aviation_ai.description }]

    return <div className="flex flex-col w-screen h-screen items-center px-8 py-16 laptop:px-20">
        <div className='text-6xl text-center text-transparent bg-clip-text from-gray-500 to-white bg-linear-to-r'>
            {t.ai_models}
        </div>
        <div className='text-2xl text-gray-200'>
            {t.ai_models_detail}
        </div>
        <div className='text-5xl text-transparent bg-clip-text from-sky-500 to-white bg-linear-to-r font-bold mt-8 laptop:px-40 self-start'>
            {t.aviation_ai.title}
        </div>
        <div className='flex flex-col laptop:flex-row w-full mt-2 gap-4 laptop:px-40'>
            {aviation_models.map(item => (
                <Link key={item.title} href={`${getLocalePath(masterData.locale)}models/${item.uri}`}>
                    <div key={item.title} className='w-full laptop:w-[300px] h-[250px] laptop:h-[200px] rounded-xl relative'>
                        <Image src={'/images/aircraft_thumb.jpg'} width={300} height={200} className='w-full h-full rounded-xl' alt='icon' />
                        <div className='absolute bottom-0 w-full bg-black opacity-70 rounded-b-xl text-white py-1 px-2'>
                            <div className='font-semibold'>{item.title}</div>
                            <div className='overflow-hidden h-6'>{item.description}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
}