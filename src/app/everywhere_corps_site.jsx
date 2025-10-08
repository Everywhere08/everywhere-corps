import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function EverywhereCorps() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-[#00C897]">Everywhere Corps</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-[#00C897]">Home</a>
          <a href="#services" className="hover:text-[#00C897]">Services</a>
          <a href="#about" className="hover:text-[#00C897]">About</a>
          <a href="#contact" className="hover:text-[#00C897]">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Digital Solutions That Work, Everywhere</h2>
        <p className="text-lg max-w-2xl mb-8 text-gray-600">
          Everywhere Corps provides IT solutions, website development, and AI automation using n8n — helping small businesses grow smarter.
        </p>
        <Button className="bg-[#00C897] text-white px-6 py-3 rounded-xl text-lg hover:opacity-90">
          Let’s Build Something
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white px-8">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="rounded-2xl shadow-md border-none">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-3">Website Development</h4>
              <p className="text-gray-600">Custom, responsive, and SEO-optimized websites to make your business stand out online.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md border-none">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-3">AI Automation (n8n)</h4>
              <p className="text-gray-600">Automate repetitive tasks and integrate your tools with custom n8n workflows.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md border-none">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-3">Custom IT Solutions</h4>
              <p className="text-gray-600">From integrations to infrastructure, we tailor tech solutions that scale with your business.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F8FAFC] px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">About Everywhere Corps</h3>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Everywhere Corps was founded with one simple mission: make IT simple, scalable, and affordable for everyone. We may be a small company now — but we work with big ideas and reliable tools to deliver impactful results.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">Let’s Work Together</h3>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Have a project or idea? Let’s discuss how Everywhere Corps can help you build and automate your digital presence.
        </p>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="max-w-lg mx-auto space-y-4"
        >
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded-xl" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded-xl" />
          <textarea name="message" placeholder="Your Message" rows="4" required className="w-full p-3 border rounded-xl"></textarea>
          <Button type="submit" className="bg-[#00C897] text-white px-6 py-3 rounded-xl text-lg hover:opacity-90 w-full">
            Send Message
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 bg-[#F8FAFC]">
        <p>© {new Date().getFullYear()} Everywhere Corps. All rights reserved.</p>
      </footer>
    </main>
  );
}
