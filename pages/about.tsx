import Layout from '@/components/atoms/Layout'
import Link from 'next/link'
import Instagram from 'public/assets/Instagram'
import LinkedIn from 'public/assets/LinkedIn'
import Twiter from 'public/assets/Twiter'

const About = () => {
  return (
    <Layout>
      <div className="mt-52 text-center">
        <h5 className="z-20 text-2xl font-bold text-black-semi sm:mr-8 md:text-4xl">
          <span className="bg-black pt-4 pl-4 text-white">Nu</span>ntium
        </h5>
        <p className="text-black text-xl mt-6 w-full max-w-[370px] mx-auto">A publishing company that focuses on the essentials.</p>
      </div>
      <div className="bg-black-semi mt-48 text-white relative">
        <div className="bg-white w-2 h-[926px] md:h-[1068px] top-0 right-20 md:right-24 lg:right-[138px] xl:right-[194px] absolute hidden sm:block"></div>
        <div className="flex flex-col-reverse sm:flex-row gap-[51px] px-9 lg:px-14 xl:px-24 pt-16 sm:pt-24 md:pt-36">
          <div className="w-full sm:w-5/12">
            <h2 className="font-libre text-3xl md:text-[41px]">We tell stories that drives the heart.</h2>
            <p className="text-base mt-3">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</p>
          </div>
          <div className="w-full sm:w-7/12">
            <img src="/image/about-1.webp" className="w-full h-full relative z-[1]" alt="about-1" />
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center px-9 sm:px-0 mt-16 lg:-mt-5 xl:-mt-[7.25rem]">
          <img className="w-full max-w-[396px] md:max-w-[502px] xl:max-w-[557px] relative z-[2]" src="/image/about-2.webp" alt="about-2" />
          <div className="w-full max-w-[393px] md:max-w-[491px] xl:max-w-[524px]">
            <h2 className="font-libre text-3xl md:text-[41px] mt-8">We tell the news that makes the most impact.</h2>
            <p className="text-base mt-8">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</p>
          </div>
        </div>
        <div className="w-11/12 sm:w-10/12 ml-auto mt-32 xl:mt-52">
          <div className="w-full max-w-[612px]">
            <h2 className="font-libre text-3xl md:text-[41px]">We share the little moments that shows we’re alive.</h2>
            <p className="text-base mt-6">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.</p>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-7 md:mt-[76px] pb-36">
            <img className="aspect-square" src="/image/about-3.webp" alt="about-3" />
            <img className="aspect-square" src="/image/about-4.webp" alt="about-4" />
            <img className="aspect-square" src="/image/about-5.webp" alt="about-5" />
          </div>
        </div>
        <div className="bg-white w-2 h-[1052px] md:h-[1452px] bottom-0 left-20 lg:left-[110px] xl:left-[160px] absolute hidden sm:block"></div>
      </div>
      <div className="w-full max-w-[427px] mx-auto text-black-semi text-center mt-56">
        <h2 className="font-libre text-[41px]">Because we are you. Humans.</h2>
        <p className="text-base mt-9">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad.</p>
      </div>
      <div className="bg-black-semi py-[119px] text-white text-center mt-[237px]">
        <div className="w-full max-w-[332px] mx-auto">
          <h2 className="text-[33px]">want to connect?</h2>
          <p className="text-base mt-4">Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui..</p>
          <div className="flex justify-center gap-4 mt-7">
            <button className="group">
              <Link href={"https://www.linkedin.com/in/ivanrizkys/"}>
                <div className="group-hover:-translate-y-1 transition-[transform] duration-300"><Twiter /></div>
              </Link>
            </button>
            <button className="group">
              <Link href={"https://www.instagram.com/ivanrizkys/"}>
                <div className="group-hover:-translate-y-1 transition-[transform] duration-300"><Instagram /></div>
              </Link>
            </button>
            <button className="group">
              <Link href={"https://www.linkedin.com/in/ivanrizkys/"}>
                <div className="group-hover:-translate-y-1 transition-[transform] duration-300"><LinkedIn /></div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
