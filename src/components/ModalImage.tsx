'use client'

import Image from 'next/image'

export default function ModalImage() {
  function openModalImage(e: any) {
    e.preventDefault()
    const modal = document.querySelector('.modal-image')

    modal?.classList.remove('open')
  }

  return (
    <div className="modal-image open">
      <button className="modal-image__close" onClick={(e) => openModalImage(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="modal-image__backdrop" onClick={(e) => openModalImage(e)} />
      <div className="modal-image__content">
        <Image
          src="/static/media/file/23marzo.jpg"
          alt="Mujeres en Movimiento"
          width={800}
          height={800}
          className="bg-white p-4 rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}
