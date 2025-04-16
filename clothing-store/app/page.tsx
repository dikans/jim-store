import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ProductCard } from "@/components/ui/product-card";

export default function Home() {
  // Mock data for featured products
  const featuredProducts = [
    {
      id: "1",
      name: "Performance Training Tee",
      price: 39.99,
      image: "/product1.jpg",
      category: "Men's Apparel",
      isNew: true,
    },
    {
      id: "2",
      name: "Compression Leggings",
      price: 59.99,
      image: "/product2.jpg",
      category: "Women's Apparel",
    },
    {
      id: "3",
      name: "Lightweight Training Shorts",
      price: 44.99,
      image: "/product3.jpg",
      category: "Men's Apparel",
      isNew: true,
    },
    {
      id: "4",
      name: "Seamless Sports Bra",
      price: 34.99,
      image: "/product4.jpg",
      category: "Women's Apparel",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-10" />
          <Image
            src="/hero.jpg"
            alt="JIM Fitness Apparel"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            ELEVATE YOUR <span className="text-primary">PERFORMANCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium gym apparel designed for serious athletes who demand the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#shop"
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              href="#about"
              className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative rounded-lg overflow-hidden group h-80">
              <Image
                src="/product1.jpg"
                alt="Men's Collection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Men</h3>
                  <Link
                    href="#"
                    className="inline-block bg-white text-black font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group h-80">
              <Image
                src="/product2.jpg"
                alt="Women's Collection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Women</h3>
                  <Link
                    href="#"
                    className="inline-block bg-white text-black font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group h-80">
              <Image
                src="/product3.jpg"
                alt="Accessories"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Accessories</h3>
                  <Link
                    href="#"
                    className="inline-block bg-white text-black font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group h-80">
              <Image
                src="/product4.jpg"
                alt="New Arrivals"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">New Arrivals</h3>
                  <Link
                    href="#"
                    className="inline-block bg-white text-black font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="shop" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Products</h2>
            <Link
              href="#"
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose JIM Apparel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 01-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Quality</h3>
              <p className="text-gray-400">
                Crafted from high-performance fabrics that withstand intense workouts while providing maximum comfort.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Athlete Tested</h3>
              <p className="text-gray-400">
                Designed with input from professional athletes to ensure our gear meets the demands of serious training.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sustainable Materials</h3>
              <p className="text-gray-400">
                Eco-friendly fabrics and responsible manufacturing processes that reduce our environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-bg.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join the JIM Community</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for exclusive deals, fitness tips, and early access to new releases.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Follow Us on Instagram</h2>
            <p className="text-gray-400">
              @jimfitnessapparel
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 1, 2].map((num, index) => (
              <a
                key={index}
                href="#"
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={`/product${num}.jpg`}
                  alt="Instagram Post"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
