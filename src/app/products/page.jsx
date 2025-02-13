"use client"

import Head from "next/head";
import ProductCard from "@/components/ProductCard";

export default function page() {
  const products = [
    {
      name: "Smartphone X",
      rating: 4.8,
      reviews: 120,
      price: 5999000,
      thumbnail: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
    },
    {
      name: "Laptop Pro 15",
      rating: 4.6,
      reviews: 85,
      price: 14999000,
      thumbnail: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    },
    {
      name: "Wireless Earbuds",
      rating: 4.7,
      reviews: 200,
      price: 1499000,
      thumbnail: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
    },
    {
      name: "Gaming Chair",
      rating: 4.5,
      reviews: 75,
      price: 3299000,
      thumbnail: "https://images.pexels.com/photos/7862491/pexels-photo-7862491.jpeg",
    },
    {
      name: "Smartwatch Series 7",
      rating: 4.9,
      reviews: 150,
      price: 4999000,
      thumbnail: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    },
    {
      name: "Mechanical Keyboard",
      rating: 4.8,
      reviews: 110,
      price: 1299000,
      thumbnail: "https://images.pexels.com/photos/18311093/pexels-photo-18311093/free-photo-of-colorful-mechanical-keyboard-on-orange-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Gaming Mouse",
      rating: 4.7,
      reviews: 95,
      price: 699000,
      thumbnail: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
    },
    {
      name: "External SSD 1TB",
      rating: 4.8,
      reviews: 130,
      price: 2299000,
      thumbnail: "https://images.pexels.com/photos/2942361/pexels-photo-2942361.jpeg",
    },
    {
      name: "Noise Cancelling Headphones",
      rating: 4.9,
      reviews: 180,
      price: 3499000,
      thumbnail: "https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg",
    },
    {
      name: "Action Camera 4K",
      rating: 4.6,
      reviews: 140,
      price: 2799000,
      thumbnail: "https://images.pexels.com/photos/690806/pexels-photo-690806.jpeg",
    },
  ];

  const handleAddToCart = (product) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(product.price);

    const message = `Halo, saya ingin membeli:\n\nProduk: *${product.name}*\nHarga: *${formattedPrice}*\nJumlah: *1*\nAlamat: \nMetode Pembayaran: `;

    const phoneNumber = "6281273588433";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Head>
        <title>Our Products</title>
      </Head>
      <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Products</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} index={index} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}