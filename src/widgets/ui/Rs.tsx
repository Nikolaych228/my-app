import { useRef, useEffect, useState } from 'react';

const Rs = () => {
    
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
            className="absolute ml-[500px] top-0 left-0 h-[1000px] object-cover z-0"
        >
          <source src="/src/assets/video/rs.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
        </video>
       <div className="flex z-10 relative ">
        <div className="ml-10 w-[550px] text-wrap">
            <p className="text-[60px] text-[#494949] font-semibold leading-18 flex text-wrap mt-[37px]">
                Сайт для студенческой лаборатории
            </p>
            <p className="text-[28px] text-[#494949] font-bold mt-5">
                Проблема
            </p>
            <p className="text-[#999999] text-[15px] mt-2">
                Студенческая лаборатория теряла потенциальных участников из-за отсутствия цифрового присутствия. Информация была разрозненной, процесс вступления — непонятным, что создавало высокий порог входа.
            </p>
            <p className="text-[28px] text-[#494949] font-bold mt-5">
                Решение
            </p>
            <p className="text-[#999999] text-[15px] mt-2">
                Создать интуитивный сайт-визитку с персонализированными карточками кураторов и минималистичной формой заявки. Проработанная навигация и живой контент устранили информационный хаос.            </p>
        </div>
       </div>
        <div className="flex flex-row  relative justify-between max-w-[794px] mt-[180px] ml-10">
            <div className="max-w-[226px]">
                <p className="text-[33px] font-bold text-[#494949]">85%</p>
                <p className="text-4 text-[#999999] mt-2">Пользователей дошли до формы заявки</p>
            </div>
            <div className="w-[1px] bg-[#3F3F3F] h-[121px] opacity-20 mt-0"></div>
            <div className="max-w-[226px]">
                <p className="text-[33px] font-bold text-[#494949]">до 2 минут</p>
                <p className="text-4 text-[#999999] mt-2">Уменьшилось время на подачу заявки</p>
            </div>
                <div className="w-[1px] bg-[#3F3F3F] h-[121px] opacity-20 mt-0"></div>
            <div className="max-w-[226px]">
                <p className="text-[33px] font-bold text-[#494949]">на 40%</p>
                <p className="text-4 text-[#999999] mt-2">Увеличилось число заявок на вступление</p>
            </div>
        </div>
    </div>
  )
}

export default Rs
