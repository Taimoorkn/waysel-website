const ServiceBox = ({ title, description, image }) => {
  return (
    <div className="w-full md:w-[calc(33.33333333%_-_21.33333333px)] bg-white px-8 py-10 rounded-xl shadow-[0_5px_64px_rgba(0,0,0,0.08)] flex flex-col items-start justify-start">
      <div className="mb-6">
        <img
          src={image}
          alt={`${title} Logo`}
          className="h-12 sm:h-14 3xl:h-16"
        />
      </div>
      {/* <h3 className="font-clashGrotesk text-2xl leading-[29.5px] text-primary_text font-medium mb-2"> */}
      <h3 className="font-clashGrotesk text-lg sm:text-xl md:text-2xl leading-tight text-primary_text font-medium mb-2 sm:mb-3">
        {title}
      </h3>
      {/* <p className="font-manrope text-lg leading-[24.6px] text-tertiary_text text-justify"> */}
      <p className="font-manrope text-sm sm:text-base md:text-lg leading-relaxed text-tertiary_text text-justify">
        {description}
      </p>
    </div>
  );
};

export default ServiceBox;

{/* <div className="flex flex-wrap justify-center gap-8 w-full border">
  {items.map((item, index) => (
    <div className="w-full md:w-[calc(33%_-_16px)] bg-white px-8 py-10 rounded-xl shadow-[0_5px_64px_rgba(0,0,0,0.08)] flex flex-col items-start justify-start">
      <div className="mb-6">
        <img src={item.image} alt={`${item.title} Logo`} className="h-[60px]" />
      </div>
      <h3 className="font-clashGrotesk text-2xl leading-[29.5px] text-primary_text font-medium mb-2">
        {item.title}
      </h3>
      <p className="font-manrope text-lg leading-[24.6px] text-tertiary_text text-justify">
        {item.description}
      </p>
    </div>
  ))}
</div> */}
// const ServiceBox = ({ title, description, image, className }) => {
//   return (
//     <div
//       className={`bg-white w-full min-h-[300px] px-4 sm:px-6 md:px-8 py-6 sm:py-8 rounded-xl shadow-[0_5px_64px_rgba(0,0,0,0.08)] flex flex-col items-start justify-start transition-transform duration-200 hover:-translate-y-1 ${className}`}
//     >
//       <div className="mb-4 sm:mb-6">
//         <img
//           src={image}
//           alt={`${title} illustration`}
//           className="h-12 sm:h-14 md:h-16 w-auto max-w-full"
//         />
//       </div>
//       <h3 className="font-clashGrotesk text-lg sm:text-xl md:text-2xl leading-tight text-primary_text font-medium mb-2 sm:mb-3">
//         {title}
//       </h3>
//       <p className="font-manrope text-sm sm:text-base md:text-lg leading-relaxed text-tertiary_text text-justify">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default ServiceBox;