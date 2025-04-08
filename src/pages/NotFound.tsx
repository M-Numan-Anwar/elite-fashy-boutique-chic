
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 text-elite-DEFAULT">404</h1>
          <div className="h-1 w-20 bg-elite-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-elite-taupe mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-elite-gold hover:bg-elite-gold/80 text-elite-DEFAULT">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
