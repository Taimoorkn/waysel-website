const ServiceBox = ({ title, description, image }) => {
  return (
    <div className="flex w-full flex-col items-start justify-start rounded-xl bg-card_bg px-8 py-10 shadow-[0_5px_64px_rgba(0,0,0,0.08)] md:w-[calc(33.33333333%_-_21.33333333px)]">
      <div className="mb-6">
        <img src={image} alt={`${title} Logo`} className="h-12 sm:h-14 3xl:h-16" />
      </div>
      <h3 className="mb-2 font-neueMontreal text-lg font-medium text-primary_text sm:mb-3 sm:text-xl md:text-2xl">
        {title}
      </h3>
      <p className="text-justify font-neueMontreal text-sm text-tertiary_text sm:text-base md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default ServiceBox;
