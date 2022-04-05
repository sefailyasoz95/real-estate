import React, { useEffect, useState } from 'react'
import { CarouselModel } from '../../Models/models'

type Props = {
  data: CarouselModel[]
  autoPlay?: boolean
  size?: 'normal' | 'large'
  headerTextType?: 'black' | 'white'
  subTextType?: 'black' | 'white'
  animationDuration?: 1000 | 2000 | 3000 | number
  leftItem?:
    | React.ReactHTMLElement<HTMLElement>
    | React.ReactNode
    | React.ReactChild
  rightItem?:
    | React.ReactHTMLElement<HTMLElement>
    | React.ReactNode
    | React.ReactChild
}

const Carousel = ({
  data,
  autoPlay = true,
  size = 'normal',
  headerTextType = 'black',
  subTextType = 'white',
  animationDuration = 3000,
  leftItem,
  rightItem,
}: Props) => {
  const [activeItem, setActiveItem] = useState<number>(data.length > 3 ? 1 : 0)
  const [onDragState, setOnDragState] = useState(0)

  useEffect(() => {
    autoPlay &&
      setTimeout(() => {
        handleNextSlide(true)
      }, animationDuration)
  }, [activeItem])
  const handleNextSlide = (increase: boolean) => {
    if (increase) {
      if (activeItem + 1 > data.length - 1) {
        setActiveItem(0)
      } else {
        setActiveItem(activeItem + 1)
      }
    } else {
      if (activeItem === 0) {
        setActiveItem(data.length - 1)
      } else {
        setActiveItem(activeItem - 1)
      }
    }
  }

  const onDragEnded = (e: React.DragEvent) => {
    if (e.clientX - onDragState < 150) {
      handleNextSlide(true)
    } else if (e.clientX - onDragState > 400) {
      handleNextSlide(false)
    }
  }

  const onDragStarted = (e: React.DragEvent) => setOnDragState(e.clientX)
  return (
    <div
      className={`container relative w-full drop-shadow-lg ${
        size === 'normal' ? 'md:w-2/3' : 'md:w-11/12'
      }`}
    >
      {data.map((item, index) => (
        <div
          className={`inner relative flex w-full cursor-pointer 
          flex-col items-center justify-center overflow-hidden rounded-lg transition-all duration-500 ${
            index === activeItem
              ? 'z-20 animate-fade-in'
              : index === activeItem + 1
              ? '-z-10 ml-96 scale-90 opacity-70'
              : index === activeItem - 1 && activeItem !== 0
              ? '-z-10 mr-96 scale-90 opacity-70'
              : 'opacity-0'
          }`}
          key={index}
          onDragStart={onDragStarted}
          onDragEnd={onDragEnded}
        >
          <img
            src={item.image}
            width="100%"
            className={`object-center transition-all duration-300 hover:scale-110 ${
              size === 'normal' ? 'h-80' : 'h-96 lg:h-650px'
            }`}
          />
          {item.headerText && (
            <p
              className={`
              absolute bottom-10 mb-3 rounded-xl px-2 py-1 font-bold 
              ${
                headerTextType === 'white'
                  ? 'bg-white text-black mix-blend-screen'
                  : 'bg-black text-white mix-blend-multiply'
              }
               ${size === 'normal' ? 'text-md' : 'text-xl'}
              `}
            >
              {item.headerText}
            </p>
          )}
          {item.subText && (
            <p
              className={`absolute bottom-5 rounded-xl px-2 py-1 
                ${
                  subTextType === 'white'
                    ? 'bg-white text-black mix-blend-screen'
                    : 'bg-black text-white mix-blend-multiply'
                }
                 ${size === 'normal' ? 'text-sm' : 'text-lg'}`}
            >
              {item.subText}
            </p>
          )}
          {index === activeItem && (
            <div className="absolute flex w-full flex-row items-center justify-between">
              {leftItem ? (
                <div onClick={() => handleNextSlide(false)} className="m-1 p-1">
                  {leftItem}
                </div>
              ) : (
                <span
                  className="m-1 rounded-lg bg-white p-1 text-black mix-blend-screen"
                  onClick={() => handleNextSlide(false)}
                >
                  ←
                </span>
              )}
              {rightItem ? (
                <div onClick={() => handleNextSlide(true)} className="m-1 p-1">
                  {rightItem}
                </div>
              ) : (
                <span
                  className="m-1 rounded-md bg-white p-1 text-black mix-blend-screen"
                  onClick={() => handleNextSlide(true)}
                >
                  →
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Carousel
