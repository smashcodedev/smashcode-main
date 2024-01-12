import { QuoteForm } from "@/components";

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
          <div className="w-full md:w-1/2">
            <QuoteForm />
            <div className="-mt-4 text-center">
              <p>
                <span className="text-primary-green">Note:</span> We will
                contact you as soon as possible through your E-mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
