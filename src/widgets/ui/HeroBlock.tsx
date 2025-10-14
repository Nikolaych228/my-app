import Star from '@/assets/icons/star.svg'
import ThreeScene from '@/features/ui/ComplexAnimatedModel'

const HeroBlock = () => {
  return (
    <div className='flex flex-row'>
      <div className="mt-[150px] ml-[55px] w-1/2">
        <div className="">
            <p className="ml-[-6px] text-[148px] text-[#3F3F3F] font-semibold">Елизавета</p>
            <p className=" text-[40px] text-[#3F3F3F] mt-[-40px]">UX/UI-Дизайнер</p>
        </div>
        <div className="h-[1px] w-[893px] bg-[#3F3F3F] opacity-20 mt-5"></div>
        <div className="flex flex-row items-end justify-between">
            <div className="max-w-[351px]">
                <p className="text-[20px] leading-7 text-[#3F3F3F] ">
                    Я создаю интерфейсы, которые чувствуют и предвосхищают. Как интеллектуальные системы, адаптирующиеся под поведение 
                    и эмоции пользователя.
                </p>
                <div className="py-4 w-full bg-black text-white text-[20px] mb-4 rounded-full flex justify-center mt-[33px]">
                    Смотреть кейсы
                </div>
            </div>
            <div className="w-[1px] bg-[#3F3F3F] h-100 opacity-20 mt-0"></div>
            <div className='mb-[33px]'>
                <div className='mb-5'>
                    <img src={Star} alt='star'/>
                </div>
                <p className='font-bold text-[33px] text-[#3F3F3F]'>4+</p>
                <p className='text-[20px] text-[#999999]'>Лет опыта</p>
            </div>
            <div className="w-[1px] bg-[#3F3F3F] h-[121px] opacity-20 mt-0"></div>
            <div className='mb-[33px] flex flex-col'>
                <div className='mb-5'>
                    <img src={Star} alt='star'/>
                </div>
                <p className='font-bold text-[33px] text-[#3F3F3F]'>50+</p>
                <p className='text-[20px] text-[#999999]'>Успешных проектов</p>
            </div>
        </div>
      </div>
      <div className='w-1/2 mt-[56px] h-[804px]'>
         <ThreeScene
            rotationSpeed={0.3}
            modelScale={2.8}
            className="h-[800px]  rounded-xl"
            showControls={true}
        />
      </div>
    </div>
  )
}

export default HeroBlock
