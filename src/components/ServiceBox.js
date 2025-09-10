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
      <h3 className="font-clashGrotesk text-lg sm:text-xl md:text-2xl leading-tight text-primary_text font-medium mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="font-manrope text-sm sm:text-base md:text-lg leading-relaxed text-tertiary_text text-justify">
        {description}
      </p>
    </div>
  );
};

export default ServiceBox;