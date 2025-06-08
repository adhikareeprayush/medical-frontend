import React from 'react';
import HeadImg from '../../assets/images/Hospital members/founder.jpg';

const MessageFromHead = () => {
  return (
    <section className="mx:px-8 container mx-auto px-4 py-10 lg:py-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
        {/* image section */}
        <div className="flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-sm">
            <img
              src={HeadImg}
              alt="Headimage"
              className="h-auto w-full max-w-[500px] object-cover md:max-w-full lg:h-[500px] lg:w-[580px]"
            />
          </div>
        </div>
        {/* content section */}
        <div className="flex flex-col">
          <h4 className="text-secondary center text-lg font-bold sm:text-center md:text-center md:text-2xl lg:text-start">
            Message From Chairman MR.Panta
          </h4>

          <div className="mt-2">
            <p className="mb-3 sm:text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque placerat scelerisque. Convallis felis vitae tortor augue.
              Velit nascetur proin massa in. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque placerat scelerisque tortor
              ornare ornare. Quisque placerat scelerisque tortor ornare ornare
              Convallis felis vitae tortor augue. Velit nascetur proin massa in.
              Consequat faucibus porttitor enim et.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque placerat scelerisque.
              Convallis felis vitae tortor augue. Velit nascetur proin massa in.
            </p>
            <p className="sm:text-center lg:text-start">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque placerat scelerisque. Convallis felis
              vitae tortor augue. Velit nascetur proin massa in.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Quisque placerat
              scelerisque. Convallis felis vitae tortor augue. Velit nascetur
              proin massa in.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Quisque placerat scelerisque. Convallis felis vitae tortor
              augue. Velit nascetur proin massa in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromHead;
