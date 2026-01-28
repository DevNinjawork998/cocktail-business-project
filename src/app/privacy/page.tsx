"use client";

import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import * as S from "./page.styles";

export default function PrivacyPage() {
  return (
    <S.PageContainer>
      <Navigation />
      <S.ContentSection>
        <S.Title>Privacy Policy</S.Title>
        <S.Paragraph>
          At Mocktails On the Go, we take your privacy seriously and are committed
          to protecting your personal data in accordance with the Personal Data
          Protection Act 2010 (PDPA) of Malaysia. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your personal information when
          you visit our website or use our services.
        </S.Paragraph>
        <S.Paragraph>Last updated: January 2025</S.Paragraph>

        <S.PrivacySection>
          <S.SectionTitle>1. Personal Data Protection Act (PDPA) Compliance</S.SectionTitle>
          <S.Paragraph>
            Mocktails On the Go is committed to complying with the Personal Data
            Protection Act 2010 (Act 709) of Malaysia. We respect your privacy and
            are dedicated to protecting your personal data in accordance with the
            principles and requirements set forth in the PDPA.
          </S.Paragraph>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>2. Information We Collect</S.SectionTitle>
          <S.Paragraph>
            We may collect the following types of personal data from you:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              <S.StrongText>Personal Identification Information:</S.StrongText> Name,
              email address, phone number, delivery address
            </S.ListItem>
            <S.ListItem>
              <S.StrongText>Order Information:</S.StrongText> Products purchased,
              order history, payment information (processed securely through third-party
              payment processors)
            </S.ListItem>
            <S.ListItem>
              <S.StrongText>Communication Data:</S.StrongText> Messages sent through
              our contact forms, WhatsApp communications, customer service inquiries
            </S.ListItem>
            <S.ListItem>
              <S.StrongText>Technical Data:</S.StrongText> IP address, browser type,
              device information, website usage data through cookies and similar
              technologies
            </S.ListItem>
          </S.List>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>3. How We Use Your Information</S.SectionTitle>
          <S.Paragraph>
            We use your personal data for the following purposes:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              To process and fulfill your orders, including delivery arrangements
            </S.ListItem>
            <S.ListItem>
              To communicate with you regarding your orders, inquiries, and customer
              service requests
            </S.ListItem>
            <S.ListItem>
              To send you marketing communications (only with your consent) about our
              products, promotions, and events
            </S.ListItem>
            <S.ListItem>
              To improve our website, products, and services based on your feedback
              and usage patterns
            </S.ListItem>
            <S.ListItem>
              To comply with legal obligations and protect our legal rights
            </S.ListItem>
            <S.ListItem>
              To prevent fraud and ensure the security of our website and services
            </S.ListItem>
          </S.List>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>4. Data Sharing and Disclosure</S.SectionTitle>
          <S.Paragraph>
            We do not sell your personal data. We may share your information with:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              <S.StrongText>Service Providers:</S.StrongText> Third-party companies
              that help us operate our business, such as payment processors, delivery
              services, and IT service providers, under strict confidentiality
              agreements
            </S.ListItem>
            <S.ListItem>
              <S.StrongText>Legal Requirements:</S.StrongText> When required by law,
              court order, or government regulation
            </S.ListItem>
            <S.ListItem>
              <S.StrongText>Business Transfers:</S.StrongText> In the event of a
              merger, acquisition, or sale of assets, your data may be transferred
              to the new entity
            </S.ListItem>
          </S.List>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>5. Data Security</S.SectionTitle>
          <S.Paragraph>
            We implement appropriate technical and organizational security measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction. These measures include:
          </S.Paragraph>
          <S.List>
            <S.ListItem>Secure data transmission using encryption (SSL/TLS)</S.ListItem>
            <S.ListItem>Secure storage of personal data</S.ListItem>
            <S.ListItem>Regular security assessments and updates</S.ListItem>
            <S.ListItem>Limited access to personal data on a need-to-know basis</S.ListItem>
          </S.List>
          <S.Paragraph>
            However, no method of transmission over the Internet or electronic storage
            is 100% secure. While we strive to protect your personal data, we cannot
            guarantee absolute security.
          </S.Paragraph>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>6. Your Rights Under PDPA</S.SectionTitle>
          <S.Paragraph>
            Under the Personal Data Protection Act 2010, you have the following
            rights regarding your personal data:
          </S.Paragraph>
          <S.List>
            <S.ListItem>
              <S.StrongText>Right of Access:</S.StrongText> You have the right to
              request access to your personal data held by us
            </S.ListItem>
            <S.ListItem>
              <S.StrongText>Right of Correction:</S.StrongText> You have the right to
              request correction of inaccurate or incomplete personal data
            </S.ListItem>
            <S.ListItem>
              <S.StrongText>Right to Withdraw Consent:</S.StrongText> You have the
              right to withdraw your consent for the processing of your personal data
              at any time
            </S.ListItem>
            <S.ListItem>
              <S.StrongText>Right to Limit Processing:</S.StrongText> You have the
              right to limit the processing of your personal data
            </S.ListItem>
            <S.ListItem>
              <S.StrongText>Right to Object:</S.StrongText> You have the right to
              object to the processing of your personal data in certain circumstances
            </S.ListItem>
          </S.List>
          <S.Paragraph>
            To exercise any of these rights, please contact us using the contact
            information provided in Section 10 below.
          </S.Paragraph>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>7. Data Retention</S.SectionTitle>
          <S.Paragraph>
            We will retain your personal data only for as long as necessary to fulfill
            the purposes outlined in this Privacy Policy, unless a longer retention
            period is required or permitted by law. When we no longer need your
            personal data, we will securely delete or anonymize it.
          </S.Paragraph>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>8. Cookies and Tracking Technologies</S.SectionTitle>
          <S.Paragraph>
            Our website uses cookies and similar tracking technologies to enhance your
            browsing experience, analyze website traffic, and understand user
            preferences. You can control cookie settings through your browser
            preferences. However, disabling cookies may affect the functionality of
            our website.
          </S.Paragraph>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>9. Third-Party Links</S.SectionTitle>
          <S.Paragraph>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these external sites.
            We encourage you to review the privacy policies of any third-party sites
            you visit.
          </S.Paragraph>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>10. Changes to This Privacy Policy</S.SectionTitle>
          <S.Paragraph>
            We may update this Privacy Policy from time to time to reflect changes in
            our practices or legal requirements. We will notify you of any material
            changes by posting the updated policy on this page and updating the
            &quot;Last updated&quot; date. Your continued use of our services after such
            changes constitutes your acceptance of the updated Privacy Policy.
          </S.Paragraph>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>11. Contact Us for Data Protection Matters</S.SectionTitle>
          <S.Paragraph>
            If you have any questions, concerns, or requests regarding this Privacy
            Policy or wish to exercise your rights under the PDPA, please contact us:
          </S.Paragraph>
          <S.Paragraph>
            <S.StrongText>Mocktails On the Go</S.StrongText>
            <br />
            Email: [Your Email Address]
            <br />
            Phone: [Your Phone Number]
            <br />
            Address: [Your Business Address]
          </S.Paragraph>
          <S.Paragraph>
            We will respond to your inquiries within a reasonable timeframe in
            accordance with the PDPA requirements.
          </S.Paragraph>
        </S.PrivacySection>

        <S.PrivacySection>
          <S.SectionTitle>12. Consent</S.SectionTitle>
          <S.Paragraph>
            By using our website and services, you consent to the collection, use,
            and disclosure of your personal data as described in this Privacy Policy.
            If you do not agree with this Privacy Policy, please do not use our
            website or services.
          </S.Paragraph>
        </S.PrivacySection>
      </S.ContentSection>
      <Footer />
    </S.PageContainer>
  );
}
