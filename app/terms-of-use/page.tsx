
import React from "react";
import { SimpleNavbar } from "@/components/landing/simple-navbar";
import { Footer } from "@/components/landing/footer";

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-veda-beige text-veda-charcoal flex flex-col">
            <SimpleNavbar />
            <div className="pt-32 pb-16 px-4 md:px-8 lg:px-16 flex-grow">
                <div className="max-w-4xl mx-auto space-y-8">
                    <header className="text-center space-y-4 mb-12">
                        <h1 className="text-4xl md:text-5xl font-cinzel text-veda-gold-dark">
                            Terms of Use
                        </h1>
                        <p className="text-veda-gold-dark italic font-serif text-lg">
                            Please read these terms carefully before using our services
                        </p>
                    </header>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            1. Introduction
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            Welcome to Veda Antiques. These Terms of Use (&quot;Terms&quot;) govern your use of our website and purchase of products from us. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            2. Use of the Website
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else&apos;s use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            3. Product Information and Pricing
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the website. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
                        </p>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80 mt-2">
                            All prices are subject to change without notice. We plan to ensure that prices on the website are accurate but errors may occur. If we discover an error in the price of a product you have ordered, we will inform you of this as soon as possible and give you the option of reconfirming your order at the correct price or cancelling it.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            4. Orders and Payment
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            By placing an order, you are offering to purchase a product on and subject to the following terms and conditions. All orders are subject to availability and confirmation of the order price.
                        </p>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80 mt-2">
                            We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            5. Intellectual Property
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Veda Antiques or its content suppliers and protected by Indian and international copyright laws.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            6. Limitation of Liability
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            In no event shall Veda Antiques, its directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            7. Governing Law
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            These Terms shall be governed by and defined following the laws of India. Veda Antiques and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            8. Contact Us
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            If you have any questions about these Terms of Use, please contact us at:
                        </p>
                        <address className="mt-4 not-italic font-sans text-veda-charcoal/80">
                            Veda Antiques<br />
                            Mauranagar, Khammam<br />
                            Telangana, India<br />
                            Email: <a href="mailto:support@vedaantiques.com" className="text-blue-600 underline">support@vedaantiques.com</a>
                        </address>
                    </section>

                    <div className="pt-8 text-center text-sm font-sans text-veda-charcoal/60">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
            <div className="pb-8 px-4 md:px-8 lg:px-16">
                <Footer variant="light" />
            </div>
        </div>
    );
}
