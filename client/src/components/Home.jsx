import BackgroundVideo from "../components/BackgroundVideo";
import ServicesSection from "../components/services";
import Footer from "../components/Footer";
import heroContent from "../data/heroContent";


const Home = () => {
    return (
        <>
            <BackgroundVideo
                title={heroContent.home.title}
                description={heroContent.home.description} />
            <ServicesSection />

            {/* Your service-specific content here */}
            <Footer />
        </>
    );
};

export default Home;
