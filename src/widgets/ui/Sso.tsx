import { useRef, useEffect, useState } from 'react';


const Sso = () => {
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
    <div className="mx-10 mt-5 relative mb-12 h-[1150px] overflow-hidden rounded-[40px]">
        <video
            ref={videoRef}
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/src/assets/video/sso.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
        </video>
       <div className="flex z-10 relative justify-end">
        <div className="mr-15 w-2/5 text-wrap">
            <p className="text-[96px] text-[#494949] font-semibold leading-27 flex text-wrap mt-[37px]">
                Сайт для студенческой лаборатории
            </p>
            <p className="text-[33px] text-[#494949] font-bold  mt-8">
                Проблема
            </p>
            <p className="text-[#999999] text-5 mt-3">
                Студенческая лаборатория теряла потенциальных участников из-за отсутствия цифрового присутствия. Информация была разрозненной, процесс вступления — непонятным, что создавало высокий порог входа.
            </p>
            <p className="text-[33px] text-[#494949] font-bold mt-8">
                Решение
            </p>
            <p className="text-[#999999] text-5 mt-3">
                Создать интуитивный сайт-визитку с персонализированными карточками кураторов и минималистичной формой заявки. Проработанная навигация и живой контент устранили информационный хаос.            </p>
        </div>
       </div>
        <div className="flex flex-row  relative justify-between max-w-[794px] mt-[283px] ml-[95px]">
            <div className="max-w-[226px]">
                <p className="text-[33px] font-bold text-[#494949]">85%</p>
                <p className="text-[20px] text-[#999999] mt-2">Пользователей дошли до формы заявки</p>
            </div>
            <div className="w-[1px] bg-[#3F3F3F] h-[121px] opacity-20 mt-0"></div>
            <div className="max-w-[226px]">
                <p className="text-[33px] font-bold text-[#494949]">до 2 минут</p>
                <p className="text-[20px] text-[#999999] mt-2">Уменьшилось время на подачу заявки</p>
            </div>
                <div className="w-[1px] bg-[#3F3F3F] h-[121px] opacity-20 mt-0"></div>
            <div className="max-w-[226px]">
                <p className="text-[33px] font-bold text-[#494949]">на 40%</p>
                <p className="text-[20px] text-[#999999] mt-2">К Увеличилось число заявок на вступление</p>
            </div>
        </div>
    </div>
  )
}

export default Sso
