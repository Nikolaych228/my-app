import P1 from '@/assets/carousel/P1.png'
import P2 from '@/assets/carousel/P2.png'

const Polygraphy = () => {
  return (
    <div>
      <div className='flex justify-between gap-x-11 my-[100px] mx-[40px] h-[700px]'>
        <div className='flex flex-col justify-between'>
            <p className="text-[60px] text-[#494949] font-semibold leading-18 flex text-wrap">
                Полиграфия
            </p>
            <p className="text-[#999999] text-[15px] mt-2">
                Полиграфия для мероприятий и промоматериалов
            </p>
            <img src={P1} alt='P1' className="mt-10"/>
        </div>
        <img src={P2} alt='P2' className=""/>
      </div>
    </div>
  )
}

export default Polygraphy
