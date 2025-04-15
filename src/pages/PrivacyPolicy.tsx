
import React from 'react';
import DocumentPage from '@/components/DocumentPage';

const privacyPolicyContent = `
# Privacy Policy

Last updated: April 15, 2024

## 1. Introduction

PACT OWOH LIMITED ("we", "our", or "us") respects your privacy and is committed to protecting it through our compliance with this policy.

This Privacy Policy describes how we collect, use, store, and share your information when you use our services, including our Snap Credit, Online Loan, and EZloan applications (collectively, the "Services").

## 2. Information We Collect

### Personal Information
- Full name
- Contact information (email address, phone number, mailing address)
- Date of birth
- Government-issued identification numbers
- Employment information
- Financial information

### Technical Information
- IP address
- Device information
- Browser type and version
- Operating system
- Referring website
- Pages visited
- Time and date of your visit

## 3. How We Use Your Information

We use your information to:
- Process your loan applications
- Verify your identity
- Assess your creditworthiness
- Communicate with you about your account
- Improve our Services
- Comply with legal obligations

## 4. Information Sharing

We may share your information with:
- Credit reference agencies
- Fraud prevention agencies
- Service providers who assist us in operating our business
- Regulatory authorities
- Legal advisors

## 5. Your Rights

You have the right to:
- Access your personal information
- Correct inaccurate information
- Request deletion of your information
- Restrict or object to processing
- Data portability

## 6. Security

We implement appropriate technical and organizational measures to protect your personal information.

## 7. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

## 8. Contact Us

If you have any questions about this Privacy Policy, please contact us at:

PACT OWOH LIMITED  
Email: privacy@pactowoh.com  
Phone: +44 123 456 7890
`;

const PrivacyPolicy = () => {
  return (
    <DocumentPage 
      title="Privacy Policy" 
      content={privacyPolicyContent} 
    />
  );
};

export default PrivacyPolicy;
