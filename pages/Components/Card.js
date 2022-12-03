import React from "react";
import Image from "next/image";
function Card({ item ,isRounded}) {
  return (
    <div className=" w-full aspect-square text-center rounded-md shadow-m  ">
      <Image
        className={ " object-center w-1/4  h-full "+(isRounded?'rounded-full':'')}
        src={item.thumbnail}
        alt="/"
        layout="responsive"
        width="215"
        height="217"
        object="cover"
      />
      <div className="flex flex-col justify-between p-6 ">
        <button
          type="button"
          className=" hover:bg-[#e4d895] -mt-12 flex items-center text-white justify-center w-full p-3 font-semibold tracking-wide rounded-m bg-[#a7b294]"
        >
          {item.title}
        </button>
      </div>
    </div>
  );
}
const Cards = ({ items,isRounded=false }) => {
  console.log(items)
  items = items ?? [
    { thumbnail: "/d4.jpg", title: "fresh flowers" },
    { thumbnail: "/d14.jpg", title: " Gifts" },
    { thumbnail: "/d3.jpg", title: "Everlasting Flowers" },
  ];
  const itemsComponent = items.map((item, index) => (
    <Card item={item} key={index} isRounded={isRounded}/>
  ));

  return (
    <section className="py-6">
      <div className="container flex flex-col justify-between items-center p-4 mx-auto">
        <h1 className="font-bold text-5xl text-[#4e515a] p-4 pb-20 font-mono">
          Shop For
        </h1>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 sm:grid-cols-2 ">
          {itemsComponent}
        </div>
      </div>
    </section>
  );
};

export default Cards;
