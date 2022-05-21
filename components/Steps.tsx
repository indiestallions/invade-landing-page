import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'

interface StepsProps {
  step: string
  name: string
  title: string
  subtext: string
  imageURI: string
  leftImage?: boolean
}

const Steps = ({
  step,
  name,
  title,
  subtext,
  imageURI,
  leftImage = false,
}: StepsProps) => {
  return (
    <div className="my-24  flex items-center justify-around gap-5 md:my-14">
      <div className={`relative md:w-2/6 ${leftImage ? 'order-last' : ''}`}>
        <span className="absolute -top-10 -z-0 text-9xl opacity-25 md:-left-10">
          {step}
        </span>
        <div>
          <div className="my-6 flex items-center gap-2">
            <div className="h-0.5 w-10  bg-primary-red"></div>
            <p className="tracking-widest text-primary-red">{name}</p>
          </div>
          <h3 className="text-bold text-left text-5xl">{title}</h3>
          <p className="my-4">{subtext}</p>
          <a href="" className="flex w-fit items-center text-primary-red">
            Read more <BsArrowRight className="ml-2" />
          </a>
        </div>
      </div>
      <div className="hidden md:inline-block">
        {imageURI && <Image src={imageURI} height={400} width={300} />}
      </div>
    </div>
  )
}

export default Steps
