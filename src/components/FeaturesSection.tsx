import { Card, CardContent } from "@/components/ui/card";
import { Landmark, Book, GamepadIcon, Share2 } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation

const FeaturesSection = () => {
  const features = [
    {
      icon: <Landmark className="w-12 h-12 text-amber-600" />,
      title: "Immersive AR/VR Experiences",
      description: "Recreate historical landmarks and events in your space.",
      link: "/FeaturedGalleries", // Add respective link
    },
    {
      icon: <Book className="w-12 h-12 text-amber-600" />,
      title: "Personalized Heritage Stories",
      description: "Dive into your ancestral stories with an AI-powered guide.",
      link: "/StoryPage", // Add respective link
    },
    {
      icon: <GamepadIcon className="w-12 h-12 text-amber-600" />,
      title: "Educational Quests",
      description: "Learn through gamified cultural adventures.",
      link: "/QuizPage", // Add respective link
    },
    {
      icon: <Share2 className="w-12 h-12 text-amber-600" />,
      title: "Community Sharing",
      description: "Connect with others who share your heritage.",
      link: "/community-sharing", // Add respective link
    },
  ];

  return (
    <section
      id="features"
      className="py-20 h-screen bg-stone-100 flex items-center justify-center overflow-hidden relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/Feature.jpeg')",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index}>
              {/* Wrap the Card with Link */}
              <Card className="hover:shadow-xl transition-shadow bg-amber-50 bg-opacity-80">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-stone-600">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
