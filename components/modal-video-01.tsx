'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface ModalVideo01Props {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo01({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideo01Props) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="shrink-0" data-aos="fade-left">

      {/* Video thumbnail */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none border-2 border-slate-700 mt-3 ml-3 translate-x-4 translate-y-4 -z-10" aria-hidden="true"></div>
          <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
        </div>
        <button className="absolute group" onClick={() => { setModalOpen(true) }} aria-label="Watch the video">
        <svg width="104" height="104" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M214 0C270.756 0 325.188 22.5464 365.321 62.6792C405.454 102.812 428 157.244 428 214C428 270.756 405.454 325.188 365.321 365.321C325.188 405.454 270.756 428 214 428C157.244 428 102.812 405.454 62.6792 365.321C22.5464 325.188 0 270.756 0 214C0 157.244 22.5464 102.812 62.6792 62.6792C102.812 22.5464 157.244 0 214 0ZM40.125 214C40.125 260.115 58.4439 304.34 91.0518 336.948C123.66 369.556 167.885 387.875 214 387.875C260.115 387.875 304.34 369.556 336.948 336.948C369.556 304.34 387.875 260.115 387.875 214C387.875 167.885 369.556 123.66 336.948 91.0518C304.34 58.4439 260.115 40.125 214 40.125C167.885 40.125 123.66 58.4439 91.0518 91.0518C58.4439 123.66 40.125 167.885 40.125 214ZM170.638 139.822L284.7 208.275C285.686 208.871 286.501 209.711 287.067 210.714C287.633 211.716 287.93 212.848 287.93 214C287.93 215.152 287.633 216.284 287.067 217.287C286.501 218.289 285.686 219.129 284.7 219.724L170.638 288.178C169.624 288.789 168.466 289.119 167.282 289.136C166.098 289.153 164.93 288.855 163.899 288.273C162.868 287.69 162.01 286.845 161.413 285.822C160.816 284.8 160.501 283.637 160.5 282.453V145.573C160.496 144.387 160.808 143.221 161.403 142.195C161.998 141.169 162.856 140.319 163.888 139.734C164.92 139.149 166.089 138.848 167.275 138.864C168.461 138.879 169.622 139.21 170.638 139.822Z" fill="white"/>
</svg>

        </button>
      </div>
      {/* End: Video thumbnail */}

      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}

        </Dialog>
      </Transition>

    </div>
  )
}