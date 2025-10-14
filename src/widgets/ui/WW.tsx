
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
    <div className="mx-10 mt-5 relative bg-[#F6F6F6] mb-12 h-[1179px] relative overflow-hidden rounded-[40px]">
        <video
            ref={videoRef}
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute top-30 w-full left-100 h-[1079px] px-[200px] object-cover z-0"
        >
          <source src="/src/assets/video/ww.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
        </video>
       <div className='ml-[95px] z-10 relative w-[750px]'>
        <div>
            <p className="text-[96px] text-[#494949] font-semibold leading-27 flex text-wrap mt-[37px]">
                Мобильное приложение по подработкам
            </p>
            <p className="text-[33px] text-[#494949] font-bold  mt-8">
                Желание заказчика
            </p>
            <p className="text-[#999999] text-5 mt-3">
                Создать мобильное приложение, которое объединит разрозненный рынок временного труда и станет надежным посредником между соискателями и работодателями.
            </p>
            <p className="text-[33px] text-[#494949] font-bold mt-8">
                Результат
            </p>
            <p className="text-[#999999] text-5 mt-3">
                Раздельные интерфейсы для соискателей и работодателей Встроенная система рейтингов и верификации
Процесс публикации вакансий сокращен до 5 шагов
Автоматизированная система выплат            </p>
        </div>
       </div>
        <div className="flex flex-row  relative justify-between max-w-[794px] mt-[283px] ml-[95px]">
            <div className="w-[750px]">
                <p className="text-[20px] text-[#999999] mt-2">Приложение успешно опубликовано в RuStore. Проект запущен в активную фазу роста, с ежедневным мониторингом ключевых метрик. Дизайн-система позволяет оперативно добавлять новый функционал по мере развития платформы.</p>
            </div>
        </div>
    </div>
  )
}

export default WW
