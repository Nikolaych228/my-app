
import ThreeScene from '@/features/ui/ComplexAnimatedModel'

const Footer = () => {
  return (
    <div className='mt-[100px] h-[700px] flex flex-col items-center overflow-hidden'>
      <div className='relative rounded-[40px] w-2/3 py-[70px] backdrop-blur-sm shadow-md z-10'>
        <div className='text-[80px] text-[#494949] font-semibold leading-27 flex justify-center mt-[37px]'>
            Есть задача? Пишите
        </div>
        <div className='flex justify-center'>
           <div className="w-[341px] h-[70px] bg-black text-white text-[20px] mb-4 rounded-full flex justify-center items-center mt-[33px]">
                Связаться
            </div>  
        </div>
      </div>
        <div className='mt-[-156px] w-full z-0'>
               <ThreeScene
                  rotationSpeed={0.3}
                  modelScale={2.8}
                  className="h-[800px] rounded-xl"
                  showControls={true}
              />
        </div>
    </div>  
  )
}

export default Footer
