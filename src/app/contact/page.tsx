const About = (props: any) => {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-y-[100px] justify-center items-center">
        <section className="max-w-[684px] px-6 gap-y-6 flex flex-col">
          <div className="w-full max-w-[600px] text-black items-center lg mb-[12px]">
            <p className="text-[30px] font-bold">About DIY Pet Shipping Consultants</p>
          </div>
          <p className="font-bold	text-[24px] leading-7">
            Who Are We?
          </p>
          <div className="text-[18px] leading-tight">
            We’re a family-owned pet-loving company. We’ve been shipping pets domestically and internationally for over two decades now.
          </div>
          <p className="font-bold	text-[24px] leading-7">
            Why This Service?
          </p>
          <div className="text-[18px] leading-tight">
            Our consulting service was born from a desire to provide an alternative to the high-priced costs of hiring a full-service company to ship your pet(s).
          </div>
          <p className="font-bold	text-[24px] leading-7">
            What We Offer:
          </p>
          <div className="text-[18px] leading-tight">
            We offer an easy, customizable DIY solution based on your pet(&apos;s) unique move. This solution is designed to provide clear-cut, simple instructions, and options, and advise you of requirements for your pet(&apos;s) transport.
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
