import ServiceCard from "../../components/landing/serviceCard";

const mockServices = [
  {
    id: 1,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: "https://ik.imagekit.io/zotyjbh5j/New%20Folder/free_checkup.png?updatedAt=1748351881854",
    link: "/services/free-checkup",
  },
  {
    id: 2,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: "https://ik.imagekit.io/zotyjbh5j/New%20Folder/free_checkup.png?updatedAt=1748351881854",
    link: "/services/free-checkup",
  },
  {
    id: 3,
    title: "Free Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
    image: "https://ik.imagekit.io/zotyjbh5j/New%20Folder/free_checkup.png?updatedAt=1748351881854",
    link: "/services/free-checkup",
  },
];

const services = () => {
  return (
    <section className="w-full h-full relative flex flex-col items-center justify-center gap-10">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
        {mockServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default services;
