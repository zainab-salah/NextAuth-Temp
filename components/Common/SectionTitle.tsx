import { titleSectionProps } from "@/types/titleSection";

 

 

const SectionTitle: React.FC<titleSectionProps> = ({
  heading,
  primary,
  descripton = "",
  center,
}) => {
  return (
    <div className={`${center ? "text-center" : "text-start"}  relative`}>
      <h1
        className={`${
          descripton ? "mb-5" : "mb-10 md:mb-20"
        } text-2xl md:text-4xl ${
          primary ? "text-primary" : "text-white"
        }   font-extrabold `}
      >
        {heading}
      </h1>
      <div
        className={`flex ${
          center ? "justify-center" : "justify-start"
        } items-center`}
      >
        <p
          className={`${primary ? "text-primary" : "text-white"}   lg:w-1/2 w-full`}
        >
          {descripton}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;