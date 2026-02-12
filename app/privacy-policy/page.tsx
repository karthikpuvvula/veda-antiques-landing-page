
import React from "react";
import { SimpleNavbar } from "@/components/landing/simple-navbar";
import { Footer } from "@/components/landing/footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-veda-beige text-veda-charcoal flex flex-col">
            <SimpleNavbar />
            <div className="pt-32 pb-16 px-4 md:px-8 lg:px-16 flex-grow">
                <div className="max-w-4xl mx-auto space-y-8">
                    <header className="text-center space-y-4 mb-12">
                        <h1 className="text-4xl md:text-5xl font-cinzel text-veda-gold-dark">
                            Privacy Policy
                        </h1>
                        <p className="text-veda-gold-dark italic font-serif text-lg">
                            Protecting your privacy is our priority
                        </p>
                    </header>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            1. Introduction
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            Welcome to Veda Antiques. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
                        </p>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            2. Information We Collect
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2 font-sans text-veda-charcoal/80">
                            <li>Name and Contact Data (Email address, Phone number, Mailing address)</li>
                            <li>Credentials (Passwords, hints, etc.)</li>
                            <li>Payment Data (Credit card number, etc., if applicable)</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            3. How We Use Your Information
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-2 font-sans text-veda-charcoal/80">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send you marketing and promotional communications.</li>
                            <li>To fulfill and manage your orders.</li>
                            <li>To request feedback.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            4. Sharing Your Information
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-cinzel text-veda-gold-dark border-b border-veda-gold/30 pb-2">
                            5. Contact Us
                        </h2>
                        <p className="font-sans leading-relaxed text-veda-charcoal/80">
                            If you have questions or comments about this policy, you may email us or contact us by post at:
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
