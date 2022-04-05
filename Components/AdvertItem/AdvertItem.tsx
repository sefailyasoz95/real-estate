import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { AdvertModel } from '../../Models/models'

type Props = {
  advert: AdvertModel
}

const AdvertItem = ({ advert }: Props) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    let replaced = advert.title
      .replaceAll(' ', '-')
      .replaceAll("'", '')
      .replaceAll('/', '')
      .replaceAll('!', '')
      .replaceAll(',', '')
      .toLowerCase()
    setUrl(replaced)
  }, [])

  return (
    <Link
      href={{
        pathname: `house/${url}`,
        query: { id: advert.id },
      }}
      as={`house/${url}`}
    >
      <div className="rotate3d my-5 h-48 w-full rounded-3xl md:w-2/3 lg:w-47%">
        <div className="flip-card-inner">
          <div
            className={`
     front flex
    w-full cursor-pointer flex-row items-center justify-around
     rounded-3xl border-2 border-black bg-white py-5 px-3 drop-shadow-xl
    `}
          >
            <img
              src={advert.cover}
              className="h-40 w-32 rounded-xl object-cover drop-shadow-md transition-all duration-300 hover:scale-110"
            />
            <div className="flex h-40 flex-col justify-between py-1">
              <span className="text-elipsis px-1 text-xl font-bold">
                {advert.title}
              </span>
              <div className="flex flex-row items-center justify-around">
                <div className="flex flex-row items-center justify-center">
                  {/* <FaHome className="text-slate-400" size={20} /> */}
                  <span className="ml-2 text-slate-400">
                    {advert.bedroom} Bedroom
                  </span>
                </div>
                <div className="flex flex-row items-center justify-center">
                  {/* <FaBath className="text-slate-400" size={20} /> */}
                  <span className="ml-2 text-slate-400">
                    {advert.bath} Bath
                  </span>
                </div>
                <div className="flex flex-row items-center justify-center">
                  {/* <MdGarage className="text-slate-400" size={20} /> */}
                  <span className="ml-2 text-slate-400">
                    {advert.garage} Garage
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between px-3">
                <span className="flex flex-row items-center justify-center text-xs">
                  122 <FaEye className="ml-1" />
                </span>
                <span className="text-xs italic">
                  {advert.postedAt.toDateString()}
                </span>
              </div>
            </div>
          </div>
          <div
            className={`back flex 
    w-full cursor-pointer flex-row items-center justify-around rounded-3xl
     border-2 border-blue-400 bg-white py-5 px-3 drop-shadow-2xl transition-all duration-300`}
          >
            <div className="flex h-40 flex-col justify-between py-1">
              <span className="overflow-scroll px-1 font-bold">
                {advert.description}
              </span>
              <div className="flex w-full flex-row items-center justify-between px-3">
                <span className="flex flex-row items-center justify-center text-xs">
                  122 <FaEye className="ml-1" />
                </span>
                <span className="text-xs italic">
                  {advert.postedAt.toDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AdvertItem
