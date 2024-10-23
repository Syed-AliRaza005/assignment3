
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Header />

    
      
      <section
        id="section-1"
        className="p-8 md:p-16 bg-blue-200"
      >
        <div className="container mx-auto text-center bg-red-200 p-6 shadow-lg rounded-lg ">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-200 mb-6">
          1st section
          
          </h2>
          <p className="text-lg font-bold md:text-xl text-black">
            this thi my 2nd section
          </p>
        </div>
      </section>

      <section
        id="section-2"
        className="p-8 md:p-16 bg-purple-300"
      >
        <div className="container mx-auto text-center   bg-red-200 p-6 shadow-lg rounded-lg ">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-300 mb-6">
          2nd section
          
          </h2>
          <p className="text-lg font-bold md:text-xl text-black">
            this thi my 2nd section
          </p>
        </div>
      </section>

      <section
        id="section-3"
        className="p-8 md:p-16 bg-yellow-300" >
        <div className="container mx-auto text-center bg-red-200 p-6 shadow-lg rounded-lg ">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">
          3rd section
          
          </h2>
          <p className="text-lg font-bold md:text-xl text-black">
            this thi my 3rd section
          </p>
        </div>
      </section>


    
      <img  src="img.png" alt="this is image">sample image</img>


      
      {/* Contact Section */}
      <section
        id="contact"
        className="p-8 md:p-16 bg-green-200 text-gray-900"
      >
        <div className="container mx-auto text-center bg-yellow p-6 shadow-lg  rounded-lg transition">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl mb-6">     
          
               <a href="mailto:syedali102205@gmail.com" >
              {" "}
              syedali102205@gmail.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;
