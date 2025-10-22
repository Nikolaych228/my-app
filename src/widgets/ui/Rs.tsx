import { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import ArrowRight from "@/assets/icons/right.svg"
import ArrowLeft from "@/assets/icons/left.svg"

const Rs = () => {
    
const videoRef = useRef<HTMLVideoElement>(null);
      const [hasPlayed, setHasPlayed] = useState(false);
      const NextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute cursor-pointer right-[45px] bottom-5 -translate-y-1/2 z-10 "
      >
        <img src={ArrowRight} alt='qwe'/>
      </button>
    );
  };

  // Кастомная стрелка "Назад"
  const PrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute cursor-pointer right-[105px] bottom-5 -translate-y-1/2 z-10"
      >
        <img src={ArrowLeft} alt='qwe'/>
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
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
      <Slider {...settings} className='mx-10 bg-[#F6F6F6] mt-5 mb-12 h-[850px] overflow-hidden rounded-[40px]'>
        <div className="mx-10 bg-[#F6F6F6] mt-5 relative mb-12 h-[850px] overflow-hidden rounded-[40px]">
            <video
                ref={videoRef}
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="absolute top-0 right-0 w-[950px] h-full object-cover z-0"
            >
              <source src="/src/assets/video/rs.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
          <div className="flex z-10 relative ">
            <div className="ml-10 w-[550px] text-wrap">
                <p className="text-[60px] text-[#494949] font-semibold leading-18 flex text-wrap mt-[37px]">
                    Редизайн сайта для RimSol
                </p>
                <p className="text-[28px] text-[#494949] font-bold mt-5">
                    Проблема
                </p>
                <p className="text-[#999999] text-[15px] mt-2">
                    Устаревший сайт терял клиентов в конкурентной нише: 50% мобильного трафика уходило из-за отсутствия адаптива, сложная структура снижала конверсию, а визуал не вызывал доверия у технических директоров.
                </p>
                <p className="text-[28px] text-[#494949] font-bold mt-5">
                    Решение
                </p>
                <p className="text-[#999999] text-[15px] mt-2">
                    Полный редизайн с переходом на тёмную тематическую палитру, создание адаптивного интерфейса и продуманных пользовательских путей к целевому действию.             </p>
            </div>
          </div>
            <div className="flex flex-row  relative justify-between max-w-[694px] mt-[260px] ml-10">
                <div className="max-w-[226px]">
                    <p className="text-[33px] font-bold text-[#494949]">на 40%</p>
                    <p className="text-4 text-[#999999] mt-2">Выросло время на сайте</p>
                </div>
                <div className="w-[1px] bg-[#3F3F3F] h-[121px] opacity-20 mt-0"></div>
                <div className="max-w-[226px]">
                    <p className="text-[33px] font-bold text-[#494949]">в 2.5</p>
                    <p className="text-4 text-[#999999] mt-2">Рост лидов с мобильных устройств</p>
                </div>
                    <div className="w-[1px] bg-[#3F3F3F] h-[121px] opacity-20 mt-0"></div>
                <div className="max-w-[226px]">
                    <p className="text-[33px] font-bold text-[#494949]">100%</p>
                    <p className="text-4 text-[#999999] mt-2">Рост конверсии</p>
                </div>
            </div>
        </div>
        <div className="mx-10 bg-[#F6F6F6] mt-5 relative mb-12 h-[850px] overflow-hidden rounded-[40px]">
            <video
                ref={videoRef}
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="absolute ml-[500px] top-0 left-0 h-full object-cover z-0"
            >
              <source src="/src/assets/video/rs.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
          <div className="flex z-10 relative ">
            <div className="ml-10 w-[550px] text-wrap">
                <p className="text-[60px] text-[#494949] font-semibold leading-18 flex text-wrap mt-[37px]">
                    Редизайн сайта для RimSol
                </p>
                <p className="text-[28px] text-[#494949] font-bold mt-5">
                    Проблема
                </p>
                <p className="text-[#999999] text-[15px] mt-2">
                    Устаревший сайт терял клиентов в конкурентной нише: 50% мобильного трафика уходило из-за отсутствия адаптива, сложная структура снижала конверсию, а визуал не вызывал доверия у технических директоров.
                </p>
                <p className="text-[28px] text-[#494949] font-bold mt-5">
                    Решение
                </p>
                <p className="text-[#999999] text-[15px] mt-2">
                    Полный редизайн с переходом на тёмную тематическую палитру, создание адаптивного интерфейса и продуманных пользовательских путей к целевому действию.             </p>
            </div>
          </div>
            <div className="flex flex-row  relative justify-between max-w-[794px] mt-[260px] ml-10">
                <div className="max-w-[226px]">
                    <p className="text-[33px] font-bold text-[#494949]">на 40%</p>
                    <p className="text-4 text-[#999999] mt-2">Выросло время на сайте</p>
                </div>
                <div className="w-[1px] bg-[#3F3F3F] h-[121px] opacity-20 mt-0"></div>
                <div className="max-w-[226px]">
                    <p className="text-[33px] font-bold text-[#494949]">в 2.5</p>
                    <p className="text-4 text-[#999999] mt-2">Рост лидов с мобильных устройств</p>
                </div>
                    <div className="w-[1px] bg-[#3F3F3F] h-[121px] opacity-20 mt-0"></div>
                <div className="max-w-[226px]">
                    <p className="text-[33px] font-bold text-[#494949]">100%</p>
                    <p className="text-4 text-[#999999] mt-2">Рост конверсии</p>
                </div>
            </div>
        </div>
      </Slider>
  )
}

export default Rs
