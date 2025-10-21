import { useRef, useEffect, useState } from 'react';

const st = () => {
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
          <source src="/src/assets/video/snn.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
        </video>
       <div className='ml-10 z-10 relative w-[550px]'>
        <div>
            <p className="text-[60px] text-[#494949] font-semibold leading-18 flex text-wrap mt-[37px]">
                Туристическое приложение для г.о. Самара
            </p>
            <p className="text-[28px] text-[#494949] font-bold mt-5">
                Задача
            </p>
            <p className="text-[#999999] text-[15px] mt-2">
                Разработать мобильное приложение как часть стратегического проекта по цифровой трансформации региона. Решить проблему децентрализации туристической информации и создать единую платформу для туристов и гидов.
            </p>
            <p className="text-[28px] text-[#494949] font-bold mt-5">
                Особенности реализации
            </p>
            <p className="text-[#999999] text-[15px] mt-2">
                User-Centered Design с валидацией прототипов
                Дизайн-система со светлой и темной темами
                Проработанные пользовательские сценарии для всех ролей
                Фокус на социальной значимости и доступности услуг          
             </p>
        </div>
       </div>
        <div className="flex flex-row  relative justify-between max-w-[794px] mt-[165px] ml-10">
            <div className="w-[550px]">
                <p className="text-[#999999] text-[15px]">Создан полнофункциональный прототип, готовый к внедрению. Проект повышает туристическую привлекательность региона и автоматизирует ключевые процессы в сфере услуг.
Дипломный проект демонстрирует комплексный подход к созданию социально-значимых digital-продуктов.</p>
            </div>
           
        </div>
    </div>
  )
}

export default st
