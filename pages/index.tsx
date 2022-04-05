import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AdvertItem from '../Components/AdvertItem/AdvertItem'
import { AdvertData, CarouselData } from '../Constants/data'
import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Carousel } from '@sefailyasoz/react-carousel'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        {loading ? (
          <div className="h-2/5 w-2/5">
            <Lottie
              animationData={require('../public/Assets/blackHouseAnimation.json')}
              autoPlay={true}
              loop={true}
            />
          </div>
        ) : (
          <>
            {/* <Carousel data={CarouselData} autoPlay={false} /> */}
            <Carousel
              data={CarouselData}
              autoPlay={false}
              rightItem={<FaArrowRight />}
              leftItem={<FaArrowLeft />}
              animationDuration={3000}
              headerTextType="black"
              subTextType="white"
              size="normal"
            />
            <hr className="my-5 w-full border-2 border-black" />
            <div className="flex w-full items-start">
              <span className="text-2xl font-bold">Latest Additions</span>
            </div>

            <div className="flex w-full flex-row flex-wrap items-center justify-evenly">
              {AdvertData.map((data, index) => (
                <AdvertItem advert={data} key={index} />
              ))}
            </div>
            <hr className="my-5 w-full border-2 border-black" />
          </>
        )}
      </div>
    </main>
  )
}

export default Home
