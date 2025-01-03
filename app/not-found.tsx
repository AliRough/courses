import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main className='tw-min-h-screen'>
        <section className='pt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                {/* Image */}
                <div className='relative h-200px h-md-400px mb-4 overflow-hidden '>
                  <Image
                    unoptimized={true}
                    fill={true}
                    src='/images/element/error404-01.svg'
                    className=''
                    alt=''
                  />
                </div>
                {/* Title */}
                <h1 className='display-1 text-danger mb-0'>404</h1>
                {/* Subtitle */}
                <h2>اوه نه، مشکلی پیش آمد!</h2>
                {/* info */}
                <p className='mb-4'>
                  یا مشکلی پیش آمده یا این صفحه دیگر وجود ندارد.
                </p>
                {/* Button */}
                <Link href='/' className='btn btn-primary mb-0'>
                  برگشت به صفحه اصلی
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
