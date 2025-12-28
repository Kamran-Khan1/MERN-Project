import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Turn Your Dreams Into
            <span className="text-indigo-400"> Achievable Goals</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Set, track, and accomplish your goals with our intuitive platform.
            Join thousands of achievers who are making progress every day.
          </p>
          <div>
            <h1 className="text-white text-3xl font-bold ">
              Go to 👉🏼{" "}
              <Link
                className="hover:text-indigo-300 transition-colors"
                to={"/dashboard"}
              >
                {" "}
                Dashboard
              </Link>
            </h1>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-sky-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-300">
              Powerful features to help you stay on track
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300">
              Two simple steps to achieve your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                step: "01",
                title: "Register",
                description: "To track progress",
              },
              {
                step: "02",
                title: "Set your goals",
                description: "What you want to do today",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-indigo-400 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Achieving Your Goals?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of successful people who are making their dreams a
            reality
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/login" className="hover:text-white transition">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-white transition">
                    register
                  </Link>
                </li>
                <li>
                  <Link to="/me" className="hover:text-white transition">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2025 Created by Kamran Khan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
