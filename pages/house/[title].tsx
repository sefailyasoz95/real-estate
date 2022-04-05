import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AdvertModel } from '../../Models/models'
import { useAppSelector } from '../../Redux/store/store'
import { GetServerSideProps } from 'next'
import { FaCalendarWeek, FaCheck } from 'react-icons/fa'
import Carousel from '../../Components/Carousel/Carousel'
import { Map, YMaps, Placemark } from 'react-yandex-maps'

type Props = {
  item?: AdvertModel
}

const HouseDetail = ({ item }: Props) => {
  const { AdvertData } = useAppSelector((state) => state.global)
  const [data, setData] = useState<any>()
  const router = useRouter()

  useEffect(() => {
    // let filtered = AdvertData.filter(
    //   (it) => it.id.toString() === router.query.id
    // )
    setData(AdvertData[1])
  }, [])
  const coordinates = [
    [33.985, -118.4695],
    [33.9416, -118.4085],
  ]

  return (
    <div className="mt-5 flex flex-col items-center justify-center">
      {data ? (
        <div className="mx-auto flex w-full flex-col items-center justify-center md:w-4/5">
          <Carousel data={data.images} autoPlay={false} size="large" />
          <h1 className="mt-3 text-3xl font-bold">{data.title}</h1>
          <div
            className={`mx-5 mt-5 mb-16  flex w-full flex-col 
            items-center rounded-xl border-2 border-white 
            bg-white px-5 py-3 drop-shadow-xl transition-all 
            duration-300 hover:drop-shadow-2xl
            `}
          >
            {/* MAP INTEGRATION NEEDED */}
            <div className="flex w-full flex-row flex-wrap items-center justify-evenly">
              <div className="m-1 flex h-28 w-2/5 flex-col items-center justify-between rounded-xl border border-blue-300 bg-white px-3 py-2 text-center drop-shadow-lg transition-all duration-300 hover:scale-110 md:m-0 md:w-44">
                <span className="text-3xl">{data.bedroom}</span>
                <span className="font-bold">Bedrooms</span>
              </div>
              <div className="m-1 flex h-28 w-2/5 flex-col items-center justify-between rounded-xl border border-blue-300 bg-white px-3 py-2 text-center drop-shadow-lg transition-all duration-300 hover:scale-110 md:m-0 md:w-44">
                <span className="text-3xl">{data.bath}</span>
                <span className="font-bold">Baths</span>
              </div>
              <div className="m-1 flex h-28 w-2/5 flex-col items-center justify-between rounded-xl border border-blue-300 bg-white px-3 py-2 text-center drop-shadow-lg transition-all duration-300 hover:scale-110 md:m-0 md:w-44">
                <span className="text-3xl">{data.garage}</span>
                {/* <span className="text-xl">{data.postedAt.toDateString()}</span> */}
                <span className="font-bold">Garage</span>
              </div>
              <div className="m-1 flex h-28 w-2/5 flex-col items-center justify-between rounded-xl border border-blue-300 bg-white px-3 py-2 text-center drop-shadow-lg transition-all duration-300 hover:scale-110 md:m-0 md:w-44">
                <span className="mt-1 text-xl">
                  {data.hasACommonSpace ? 'Available' : 'Not Available'}
                </span>
                <span className="font-bold">Shared Space</span>
              </div>
            </div>
            <div className="my-10 w-full text-center md:w-3/5">
              <span className="mx-auto">{data.description}</span>
            </div>
            <div className="flex w-full flex-row items-center justify-between">
              <div
                className={`flex w-24 cursor-pointer flex-row items-center justify-between 
                rounded-lg border border-black bg-white
                px-3 py-2 drop-shadow-md transition-all duration-300
                hover:rotate-360 hover:border-blue-300 hover:text-blue-300
                `}
                onClick={() => console.log('hello')}
              >
                <button>Apply</button>
                <FaCheck />
              </div>
              <span className="text-sm italic">
                {data.postedAt.toDateString()}
              </span>
            </div>
          </div>
          <YMaps query={{ lang: 'en_US' }}>
            <div>Take a look to the house's location on the map</div>
            <Map
              defaultState={{ center: [33.985, -118.4695], zoom: 12 }}
              options={{}}
              style={{ width: '100%', height: '50vh', margin: 10 }}
            >
              {coordinates.map((coordinate) => (
                <Placemark geometry={coordinate} />
              ))}
            </Map>
          </YMaps>
        </div>
      ) : (
        'loading'
      )}
    </div>
  )
}

export default HouseDetail

// export const getServerSideProps: GetServerSideProps = async (context) => {
// get data here
//   return {
//     props: {
//       item: []
//     }
//   }
// }
