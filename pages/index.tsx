import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import Steps from '../components/Steps'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai'

const Home: NextPage = () => {
  return (
    <div className="bg-primary-black py-10 text-primary-white md:px-20">
      <Head>
        <title>Invade</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <header className="flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-4xl font-black">
          <Image src={'/logo.svg'} width={30} height={30} />
          Invade
        </h1>
        <nav className="text-sm">
          <ul className="flex gap-4">
            <li>
              <a href="">Docs</a>
            </li>
            <li>
              <a
                className="text-primary-red"
                href="https://lqt188qdqmu.typeform.com/to/UKd5NG6K"
              >
                Request demo
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="mb-9 flex h-[30rem] flex-col justify-center">
          <div className="mx-auto flex w-1/2 flex-col justify-center">
            <div className="my-6 flex items-center gap-2">
              <div className="h-0.5 w-10  bg-primary-red"></div>
              <p className="tracking-widest text-primary-red">
                Security testing on autopilot
              </p>
            </div>
            <h1 className=" text-6xl">
              Let us{' '}
              <span className="text-primary-red">
                [<span className="text-primary-white">invade</span>]
              </span>
              so no one else does.
            </h1>
            <p className="my-6 w-5/6">
              Invade is built to provide effective and contineous security
              testing because the old pentesting practices are becoming
              obsolete.
            </p>
            <a
              className="group flex w-fit items-center rounded-md bg-primary-red px-6 py-3 text-primary-white"
              href=""
            >
              Learn more
              <BsArrowRight className="ml-2 transition-all group-hover:translate-x-3 group-active:translate-x-6" />
            </a>
          </div>
        </section>
        <section className="py-6">
          <h2 className="my-8 text-center text-4xl">How does it work?</h2>
          <Steps
            step="01"
            name="Agentless security testing platfom"
            title="Add all your internet-facing assets."
            subtext="Invade does not need your source code or information, just the
                  urls."
            imageURI="/image-1.png"
          />
          <Steps
            step="02"
            name="an autonomous hacking environment"
            title="What's now?"
            subtext="Sit back and relax, your assets are in an autonomous hacking environment that continuously performs thousands of scans ad tests to find weaknesses, and vulnerabilities.
"
            leftImage={true}
            imageURI="/image-2.jpg"
          />
          <Steps
            step="03"
            name="is built to simplify security testing"
            title="Manage, Prioritize and fix."
            subtext="Invade’s easy-to-use SaaS platform lets you manage and prioritize what needs to be fixed and shamelessly integrate insights to  your existing workflow."
            imageURI="/image-3.png"
          />
          <Steps
            step="04"
            name="we never compromise, it’s invade"
            title="Need something ad-hoc?"
            subtext="We have got you covered, you can schedule a compliance-based PenTest with the existing assets or a staging asset anytime and it takes only 12 hrs to get started."
            leftImage={true}
            imageURI="/image-4.jpg"
          />
        </section>
        <div className="mx-auto mt-10 h-px w-1/2 bg-primary-white opacity-50"></div>
        <section className="flex flex-col items-center py-6 ">
          <h2 className="mb-6 text-center text-4xl">
            Ready to get started? We can help.
          </h2>
          <a
            href="https://lqt188qdqmu.typeform.com/to/UKd5NG6K"
            className="flex w-fit items-center rounded-md bg-primary-red px-6 py-3 text-primary-white"
          >
            Request Demo
          </a>
        </section>
        <footer className="mt-24 flex justify-between py-6">
          <div className="flex items-center gap-2 text-4xl font-black">
            <Image src={'/logo.svg'} width={30} height={30} />
            Invade
          </div>
          <div className="flex items-center gap-2 text-2xl font-black">
            <a href="https://twitter.com/Invade_hq">
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.linkedin.com/company/invadehq/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Invadehq">
              <AiFillGithub />
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Home
