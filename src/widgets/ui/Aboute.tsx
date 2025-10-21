import Photo from "@/assets/icons/Photo.png"

const Aboute = () => {
  return (
    <div className="my-[100px] mx-12">
      <div className="flex flex-row gap-x-[60px]">
        <img src={Photo} alt='photo' className="w-[650px]"/>
        <div className="flex flex-col justify-between">
            <div>
                <p className="text-[80px] font-semibold text-[#3F3F3F]">
                    Мой опыт
                </p>
                <p className="text-[16px] text-[#999999] max-w-[936px] mt-2">
                    Создаю интерфейсы, ориентированные на цели ваших клиентов. 
                    Моя задача — не просто сделать красиво, а помочь вам 
                    больше зарабатывать.
                </p>
            </div>
            <div className="flex flex-row  justify-between">
                <div>
                    <p className="text-[33px] font-bold text-[#494949]">100%</p>
                    <p className="text-[16px] text-[#999999] mt-2">Проектов сдано <br></br>в срок</p>
                </div>
                <div className="w-[1px] bg-[#3F3F3F] h-[100px] opacity-20 mt-0"></div>
                <div>
                    <p className="text-[33px] font-bold text-[#494949]">40%</p>
                    <p className="text-[16px] text-[#999999] mt-2">Повторных заказов <br></br>от клиентов</p>
                </div>
                    <div className="w-[1px] bg-[#3F3F3F] h-[100px] opacity-20 mt-0"></div>
                <div>
                    <p className="text-[33px] font-bold text-[#494949]">+30%</p>
                    <p className="text-[16px] text-[#999999] mt-2">К конверсии в среднем <br></br>по проектам</p>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Aboute
