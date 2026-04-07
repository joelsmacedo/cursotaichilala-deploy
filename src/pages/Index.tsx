import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Benefits from "@/components/landing/Benefits";
import Curriculum from "@/components/landing/Curriculum";
import Professor from "@/components/landing/Professor";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Curso de Tai Chi Chuan Online | Professor Laércio Fonseca</title>
        <meta
          name="description"
          content="Aprenda Tai Chi Chuan com o Professor Laércio Fonseca. Curso 100% online com certificado, +68h de conteúdo, método Wu San Dji Tao. Transforme sua saúde e espiritualidade."
        />
        <meta
          name="keywords"
          content="tai chi chuan, tai chi online, curso tai chi, laércio fonseca, wu san dji tao, meditação, artes marciais"
        />
        <link rel="canonical" href="https://curso-taichi.com.br" />

        {/* Open Graph */}
        <meta property="og:title" content="Curso de Tai Chi Chuan Online | Professor Laércio Fonseca" />
        <meta
          property="og:description"
          content="Aprenda Tai Chi Chuan com o Professor Laércio Fonseca. Curso 100% online com certificado."
        />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Curso de Tai Chi Chuan - Método Wu San Dji Tao",
            description:
              "Curso online completo de Tai Chi Chuan com Professor Laércio Fonseca. 21 aulas, +68h de conteúdo, certificado incluso.",
            provider: {
              "@type": "Organization",
              name: "Espaço Caminho Da Luz",
              sameAs: "https://curso-taichi.com.br",
            },
            instructor: {
              "@type": "Person",
              name: "Laércio Fonseca",
              description: "Físico pela Unicamp, especialista em Astrofísica e mestre de Tai Chi Chuan há mais de 50 anos.",
            },
            courseMode: "online",
            educationalLevel: "Beginner to Advanced",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              courseWorkload: "PT68H",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Curriculum />
          <Professor />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
