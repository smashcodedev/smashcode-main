import QuoteForm from "@/components/Quote-Form/QuoteForm";

const ContactPage: React.FC = () => {
  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-10 mt-36">
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <h1 className="mb-4 text-4xl">Get a Quote</h1>

            <h6 className="text-center text-lg sm:text-xl">
              Let’s share details of your project. So that we can start working
              on it.
            </h6>
            <br />
          </div>
        </div>
        <div className="form-container flex flex-wrap items-center justify-center">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
