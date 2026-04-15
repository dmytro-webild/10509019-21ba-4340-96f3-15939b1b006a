"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Clock, Lightbulb, MapPin, Shield, ShieldCheck, Star, Sun, Users, Wifi, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Stein's Electrical"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="Stein's Electrical & Solar: Your Trusted Sydney Tradies"
      description="Neat, safe, and built to last. We offer 24/7 emergency electrical services, expert repairs, and solar installations for residential, commercial, and industrial clients."
      buttons={[
        {
          text: "Call 0426 254 273",
          href: "tel:0426254273",
        },
        {
          text: "Get a Quote",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-51642.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/closeup-shot-handsome-male-smiling_181624-41237.jpg",
          alt: "Satisfied customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17096.jpg",
          alt: "Satisfied customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-smiling-brunette-asian-woman-sitting-with-graphic-pen-looking-happy-drawing_1258-199033.jpg",
          alt: "Satisfied customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/teen-age-youth-style-self-expression-concept-portrait-positive-happy-teenage-girl-with-bob-pinkish-hairstyle-facial-piercing-relaxing-indoors_343059-3781.jpg",
          alt: "Satisfied customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg",
          alt: "Satisfied customer 5",
        },
      ]}
      avatarText="Join 77+ happy local families"
      marqueeItems={[
        {
          type: "text-icon",
          text: "24/7 Emergency",
          icon: Zap,
        },
        {
          type: "text-icon",
          text: "Fully Licensed",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Sydney Wide",
          icon: MapPin,
        },
        {
          type: "text-icon",
          text: "Solar Experts",
          icon: Sun,
        },
        {
          type: "text-icon",
          text: "10+ Years Exp",
          icon: Award,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Committed to Quality & Safety"
      description={[
        "At Stein's Electrical, we take pride in delivering electrical work that's neat, safe, and built to last. With a strong focus on attention to detail, we ensure every job exceeds expectations.",
        "Servicing the Wattle Grove and Sydney region, our expert team provides professional service, punctuality, and quality craftsmanship for all your residential and commercial electrical needs.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "24/7 Emergency",
          description: "Rapid response electrical assistance.",
          bentoComponent: "reveal-icon",
          icon: Zap,
          imageSrc: "http://img.b2bpic.net/free-photo/female-electrician-hard-hat-near-control-panel-technician-portrait_169016-70993.jpg",
          imageAlt: "friendly local electrician portrait",
        },
        {
          title: "Rewiring & Panels",
          description: "Safe, compliant upgrades for your home.",
          bentoComponent: "reveal-icon",
          icon: Shield,
          imageSrc: "http://img.b2bpic.net/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-51642.jpg",
          imageAlt: "friendly local electrician portrait",
        },
        {
          title: "Lighting & LED",
          description: "Modern upgrades and fixture installations.",
          bentoComponent: "reveal-icon",
          icon: Lightbulb,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-brunette-woman-sitting-with-coffee-using-smartphone-cafe-chatting_1258-199048.jpg",
          imageAlt: "friendly local electrician portrait",
        },
        {
          title: "Data & Alarms",
          description: "Advanced smoke alarms and cabling.",
          bentoComponent: "reveal-icon",
          icon: Wifi,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-girl-shows-okay-ok-signs-look-satisfied-recommend-good-company-perfect-quality-praise-good-job-well-done-standing-pleased-against-white-background_176420-54380.jpg",
          imageAlt: "friendly local electrician portrait",
        },
      ]}
      title="Comprehensive Electrical Services"
      description="From emergency repairs to full home rewiring, we handle all your electrical requirements with expert precision."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Star,
          title: "Google Rating",
          value: "5.0",
        },
        {
          id: "m2",
          icon: Users,
          title: "Happy Customers",
          value: "77+",
        },
        {
          id: "m3",
          icon: Clock,
          title: "Years Experience",
          value: "10+",
        },
      ]}
      title="Quality by the Numbers"
      description="Trusted by hundreds of Sydney families and businesses."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          handle: "@sarah-m",
          testimonial: "Nick was very professional, punctual and very reasonably priced. Highly recommended.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-brunette-woman-sitting-with-coffee-using-smartphone-cafe-chatting_1258-199048.jpg",
        },
        {
          id: "t2",
          name: "James Bond",
          handle: "@james-b",
          testimonial: "Excellent quality service. Very clean and tidy work, corrected wiring issues I didn't know existed.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-girl-shows-okay-ok-signs-look-satisfied-recommend-good-company-perfect-quality-praise-good-job-well-done-standing-pleased-against-white-background_176420-54380.jpg",
        },
        {
          id: "t3",
          name: "Alice Wong",
          handle: "@alice-w",
          testimonial: "Nick did a great job changing over 4 lights. Reliable and great communication.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-attractive-dark-haired-latin-man-posing-kitchen_74855-7991.jpg",
        },
        {
          id: "t4",
          name: "Robert Chen",
          handle: "@robert-c",
          testimonial: "Extremely punctual and polite. Would recommend to all friends and family.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-mother-home_23-2148321636.jpg",
        },
        {
          id: "t5",
          name: "Emma Davis",
          handle: "@emma-d",
          testimonial: "Quality work and great service. We will definitely use Stein's Electrical again.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businesswoman-recommending-new-business-app_1262-21064.jpg",
        },
      ]}
      title="What Our Customers Say"
      description="Don't just take our word for it—read our 70+ 5-star reviews."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={[
        "Google Reviews",
        "Hipages",
        "Facebook",
        "Instagram",
        "Verified Sydney Tradies",
        "Australian Electrician Alliance",
        "Safety First Certification",
      ]}
      title="Verified Partners"
      description="Stein's Electrical is trusted by industry leaders and platforms."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Do you offer emergency services?",
          content: "Yes, we provide 24/7 emergency electrical services throughout Sydney.",
        },
        {
          id: "f2",
          title: "Are you fully licensed?",
          content: "Absolutely. Lic No. 397055C.",
        },
        {
          id: "f3",
          title: "What areas do you service?",
          content: "We proudly service Wattle Grove and the wider Sydney metropolitan area.",
        },
      ]}
      title="Common Questions"
      description="We're here to provide answers to the most common electrical inquiries."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Contact Us"
      title="Need a Reliable Electrician?"
      description="Ready to get started or need emergency assistance? Give us a call or send a request below for a prompt response."
      imageSrc="http://img.b2bpic.net/free-photo/variety-carpentry-tools-table_23-2148180578.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Stein's Electrical"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "© 2024 Stein's Electrical",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
