import { TbPlayerTrackNext } from "react-icons/tb";

function Blog() {
  return (
    <>
      <div id="first-blog" className=" flex bg-[#EDEDED] p-5 rounded-2xl ">
        <div className="grid">
          <h1 className="text-wrap font-semibold">Comfy style for her..✨</h1>
          <p>
            Shop from Apex and buy fashion including shoes, clothes, handbags and
            much more😊
          </p>
          <a href="/products" className="font-semibold inline-flex items-center gap-1">
            Explore
            <TbPlayerTrackNext />
          </a>
        </div>
        <div className="rounded-2xl">
          <img
            src="./src/components/assets/product/Pexels Photo by EVG Kowalievska.png"
            alt=""
            className="pt-4"
          />
        </div>
      </div>
      <div id="second-blog" className="flex bg-[#EDEDED] mx-4 p-5 rounded-2xl">
        <div className="grid">
          <h1 className="font-semibold">Comfy style for her..✨</h1>
          <p>
            Shop from Apex fashion including shoes, clothes, handbags and
            much more😊
          </p>
          <a
            href="/products"
            className="font-semibold inline-flex items-center gap-1"
          >
            Explore <TbPlayerTrackNext />
          </a>
        </div>
        <div className="rounded-2xl">
          <img
            src="./src/components/assets/product/Pexels P chloe.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
