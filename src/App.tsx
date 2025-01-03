import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ProfileHeader />
              <About />
              <Experience />
              <Projects />
              <Education />
              <Certifications />
              <Skills />
              <Recommendations />
            </div>
            <div className="hidden lg:block">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 sticky top-20">
                <h2 className="text-lg font-semibold mb-4 dark:text-white">
                  People also viewed
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      name: "Tim Cook",
                      company: "CEO @ Apple",
                      img: "data:image/jpeg;base64,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",
                    },
                    {
                      name: "Sundar Pichai",
                      company: "CEO @ Google",
                      img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR2QHjfA875fQsYSgN_QqPRuXaFUj8aUxhjVtCydkawQkRUVLIsmv2pkxDWM-JqVo0mXhF8CvhdWBzv4Tk",
                    },
                    {
                      name: "Satya Nadella",
                      company: "CEO @ Microsoft",
                      img: "data:image/jpeg;base64,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",
                    },
                  ].map((ceo, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <img
                        src={ceo.img}
                        alt={`${ceo.name}'s Profile`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium dark:text-white">
                          {ceo.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {ceo.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
