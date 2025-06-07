const Sticky = () => {
  return (
    <div className="fixed top-1/2 right-0 z-100 flex max-w-[100px] -translate-y-1/2 transform flex-col items-center">
      <ul className="bg-accent flex flex-col gap-2 rounded-l-[5px] shadow-lg">
        <li className="p-2">
          <button>Book an appointment</button>
        </li>
        <li className="p-2">
          <button>Item 2</button>
        </li>
        <li className="p-2">
          <button>Item 3</button>
        </li>
      </ul>
    </div>
  );
};

export default Sticky;
