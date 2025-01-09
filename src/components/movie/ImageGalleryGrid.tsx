import Image from 'next/image'
export function ImageGalleryGrid() {
  return (
    <div className="flex flex-wrap mx-[-15px] mt-3 mb-10">
      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
        <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
          <a
            href="./assets/img/photos/b8-full.jpg"
            data-glightbox="title: Heading; description: Purus Vulputate Sem Tellus Quam"
            data-gallery="post"
          >
            {' '}
            <Image src="/assets/img/photos/b8.jpg" alt="image" width="300" height="300" />
          </a>
        </figure>
      </div>
      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
        <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
          <a href="./assets/img/photos/b9-full.jpg" data-glightbox data-gallery="post">
            {' '}
            <Image src="/assets/img/photos/b9.jpg" alt="image" width="300" height="300" />
          </a>
        </figure>
      </div>
      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
        <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
          <a href="./assets/img/photos/b10-full.jpg" data-glightbox data-gallery="post">
            {' '}
            <Image src="/assets/img/photos/b10.jpg" alt="image" width="300" height="300" />
          </a>
        </figure>
      </div>
      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
        <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
          <a href="./assets/img/photos/b11-full.jpg" data-glightbox data-gallery="post">
            {' '}
            <Image src="/assets/img/photos/b11.jpg" alt="image" width="300" height="300" />
          </a>
        </figure>
      </div>
    </div>
  )
}
