import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import Welcome from "./components/home/Welcome";
import IntroBanner from "./components/home/IntroBanner";
import LatestPosts from "./components/home/LatestPosts";
import UpcomingEvents from "./components/home/UpcomingEvents";
import FeatureBar from "./components/home/FeatureBar";
import HighlightActivities from "./components/home/HighlightActivities";
import Testimonials from "./components/home/Testimonials";

export default function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Welcome />
            <IntroBanner />
            <LatestPosts />
            <UpcomingEvents />
            <FeatureBar />
            <HighlightActivities />
            <Testimonials />
            <Footer />
        </>
    );
}
