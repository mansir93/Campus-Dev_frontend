import React from "react";
import Hero from "../Components/Hero";
import Layout from "../Container/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <div className="w-full bg-blue-300 mx-auto md:px-6">
          <div className="container mx-auto md:px-6">
            <section className="mb-32 text-center lg:text-left">
              <div className="px-6 py-12 md:px-12">
                <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
                  <div className="my-12 lg:mt-0">
                    <h1 class="mb-12 text-5xl font-bold leading-tight tracking-tight">
                      Empowering Students for
                      <br />
                      <span className="text-primary text-white">
                        {" "}
                        a Brighter Future
                      </span>
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-200">
                      Welcome to Student Hub, the ultimate online destination
                      for students. Whether you're pursuing higher education,
                      preparing for exams, or looking to connect with
                      like-minded individuals, we've got you covered.
                    </p>
                  </div>

                  <div className="mb-12 lg:mb-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgSgeIDC-NWTcWGWg_vy3SQn2rsVLegRX2w&usqp=CAU"
                      // src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/051.jpg"
                      className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>{" "}
      </Layout>
    </div>
  );
};

export default Home;
