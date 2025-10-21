
import { useRef, useEffect, useState } from 'react';


const WW = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
      const [hasPlayed, setHasPlayed] = useState(false);
    
      useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !hasPlayed) {
                // Видео в области видимости и еще не проигрывалось
                video.play().then(() => {
                  setHasPlayed(true);
                }).catch((error) => {
                  console.log('Автовоспроизведение заблокировано:', error);
                });
              }
            });
          },
          {
            threshold: 0.5, // Срабатывает когда 50% видео в области видимости
            rootMargin: '0px'
          }
        );
    
        observer.observe(video);
    
        return () => {
          observer.disconnect();
        };
      }, [hasPlayed]);
    
      // Обработчик окончания видео
      const handleVideoEnd = () => {
        setHasPlayed(true);
      };
  return (
    <div className="mx-10 bg-[#F6F6F6] mt-5 relative mb-12 h-[850px] overflow-hidden rounded-[40px]">
        <video
            ref={videoRef}
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute ml-[500px] top-0 left-0 h-full object-cover z-0"
        >
          <source src="/src/assets/video/ww.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
        </video>
       <div className='ml-10 z-10 relative w-[550px]'>
        <div>
            <p className="text-[60px] text-[#494949] font-semibold leading-18 flex text-wrap mt-[37px]">
                Мобильное приложение по подработкам
            </p>
            <p className="text-[28px] text-[#494949] font-bold mt-5">
                Желание заказчика
            </p>
            <p className="text-[#999999] text-[15px] mt-2">
                Создать мобильное приложение, которое объединит разрозненный рынок временного труда и станет надежным посредником между соискателями и работодателями.
            </p>
            <p className="text-[28px] text-[#494949] font-bold mt-5">
                Результат
            </p>
            <p className="text-[#999999] text-[15px] mt-2">
                Раздельные интерфейсы для соискателей и работодателей Встроенная система рейтингов и верификации
                Процесс публикации вакансий сокращен до 5 шагов
Автоматизированная система выплат            </p>
        </div>
       </div>
        <div className="flex flex-row  relative justify-between max-w-[794px] mt-[210px] ml-10">
            <div className="w-[720px]">
                <p className="text-[#999999] text-[15px]">Приложение успешно опубликовано в RuStore. Проект запущен в активную фазу роста, с ежедневным мониторингом ключевых метрик. Дизайн-система позволяет оперативно добавлять новый функционал по мере развития платформы.</p>
            </div>
           
        </div>
    </div>
  )
}

export default WW
