"use client";
import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="relative bg-gradient-to-br mt-5 from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Powered by AI Technology
        </h2>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
          About ExpenseTracker AI
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Your intelligent companion for tracking expenses and managing your
          finances with cutting-edge AI-powered insights.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/signup"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            Start Your Journey
          </Link>
          <Link
            href="/learn-more"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all active:scale-95"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Transforming Financial Management with AI
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          At ExpenseTracker AI, we leverage cutting-edge artificial intelligence
          to revolutionize how individuals achieve financial wellness.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
              10K+
            </p>
            <p className="text-gray-600 dark:text-gray-400">Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
              $2M+
            </p>
            <p className="text-gray-600 dark:text-gray-400">Money Tracked</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
              99%
            </p>
            <p className="text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Why Choose ExpenseTracker AI?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Discover the powerful features that make our AI-driven platform the
            smart choice for modern financial management.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="text-3xl">🤖</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              AI-Powered Insights
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Get intelligent analysis of your spending patterns with
              personalized AI recommendations and automated category suggestions.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="text-3xl">✨</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              Smart Categorization
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Let our AI automatically categorize your expenses with 99%
              accuracy and provide tailored recommendations.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="text-3xl">📊</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              Intelligent Dashboard
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Experience real-time insights, interactive financial analytics,
              and beautiful visualizations that make sense of your data.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Built for the Future
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              ExpenseTracker AI was born from the vision of creating truly
              intelligent financial management tools. Our team of financial
              experts, data scientists, and technologists came together to solve
              a critical problem: making personal finance management smarter,
              more intuitive, and more effective.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Trusted by 10,000+ users</li>
              <li>✅ Founded in 2024</li>
              <li>✅ AI-First Approach</li>
              <li>✅ Global Impact</li>
              <li>✅ User-Centric Design</li>
            </ul>
          </div>
          <div className="rounded-xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 dark:from-emerald-900/20 dark:to-teal-900/20 p-12 flex items-center justify-center shadow-lg">
            <span className="text-6xl">🌍</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 dark:from-emerald-900 dark:via-green-800 dark:to-teal-900 text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Ready to Transform Your Finances?
        </h2>
        <p className="mt-4 text-lg sm:text-xl opacity-90">
          Join thousands of users who already transformed their financial habits
          with ExpenseTracker AI.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/signup"
            className="px-8 py-3 rounded-xl bg-white text-emerald-600 font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            Get Started Free →
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 rounded-xl border border-white/80 text-white font-semibold hover:bg-white/10 transition-all active:scale-95"
          >
            Contact Us 💬
          </Link>
        </div>
        <div className="mt-6 text-sm opacity-80">
          Free • No credit card required • 24/7 AI-powered support • Instant setup
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
