import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      
      <header className="p-8 bg-white">
          <div className="container pt-12 pb-6 mx-auto text-center w-w-full lg:pb-20">
              <h1 className="block antialiased tracking-tight font-sans font-bold text-gray-900 !lg:leading-tight mx-auto mb-6 w-full text-3xl !leading-snug lg:max-w-3xl lg:text-5xl">Home Page</h1>
              <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mx-auto w-full !text-gray-500 lg:w-10/12 lg:px-12 xl:w-9/12 xl:px-20">Welcome to our marketplace&#x27;s home page. Explore our delicious menu and discover a world of amazing goods.</p>
              <div className="grid w-full mt-8 place-items-start md:justify-center">
                  <div className="w-full mb-2">
                      <Link href="/products" className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-blue-900 text-white shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full px-4 md:w-[12rem]" type="button">
                        Shop Now
                      </Link>
                  </div>
              </div>
          </div>
      </header>

      <section className="bg-white">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg">
                  <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">About Us</h2>
                  <p className="mb-4">Salna hadir sebagai solusi bagi Anda yang mencari pengalaman berbelanja online yang mudah, cepat, dan terpercaya. Dengan berbagai pilihan produk berkualitas dari berbagai kategori, kami berkomitmen untuk memberikan layanan terbaik bagi pelanggan. Kami percaya bahwa setiap transaksi harus aman dan nyaman, sehingga kami selalu berinovasi dalam menghadirkan fitur-fitur yang mendukung pengalaman berbelanja yang menyenangkan.</p>
                  <p>Didukung oleh tim yang terdiri dari para ahli strategi, desainer, dan pengembang, Salna terus berkembang untuk memberikan layanan yang lebih baik. Kami adalah inovator dan pemecah masalah, berkomitmen untuk menghadirkan marketplace yang tidak hanya efisien tetapi juga memberikan nilai lebih bagi pengguna. Kecil untuk tetap gesit dan responsif, tetapi cukup besar untuk memberikan cakupan layanan yang Anda butuhkan dengan kecepatan yang Anda harapkan.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                  <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                  <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
              </div>
          </div>
      </section>
    </>
  );
}
