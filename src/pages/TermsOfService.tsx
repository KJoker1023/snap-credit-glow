
import React from 'react';
import DocumentPage from '@/components/DocumentPage';

const termsOfServiceContent = `
# Terms of Service

Last updated: April 15, 2024

## 1. Agreement to Terms

By accessing or using the services offered by PACT OWOH LIMITED, including Snap Credit, Online Loan, and EZloan (collectively, the "Services"), you agree to be bound by these Terms of Service.

## 2. Eligibility

To use our Services, you must:
- Be at least 18 years old
- Be a resident of the United Kingdom
- Have a valid bank account
- Have a regular source of income
- Meet our creditworthiness criteria

## 3. Loan Terms

### 3.1 Loan Application
- All loan applications are subject to credit and affordability assessments
- We reserve the right to approve or decline any application at our discretion
- We may request additional information to verify your identity and assess your application

### 3.2 Repayment
- You agree to repay the loan amount plus interest and fees as specified in your loan agreement
- Payments must be made by the due date specified in your loan agreement
- Late payments may result in additional fees and negative credit reporting

## 4. Interest and Fees

- Interest rates and fees vary based on the loan product, loan amount, and your creditworthiness
- All applicable interest rates and fees will be disclosed in your loan agreement
- We calculate interest on a daily basis on the outstanding principal balance

## 5. Default

If you fail to make a payment when due, we may:
- Charge late payment fees
- Report the default to credit reference agencies
- Take legal action to recover the debt
- Assign the debt to a third-party debt collection agency

## 6. Termination

We reserve the right to terminate your access to our Services at any time, with or without cause, and without notice.

## 7. Changes to Terms

We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page.

## 8. Governing Law

These Terms are governed by the laws of the United Kingdom.

## 9. Contact Us

If you have any questions about these Terms, please contact us at:

PACT OWOH LIMITED  
Email: terms@pactowoh.com  
Phone: +44 123 456 7890
`;

const TermsOfService = () => {
  return (
    <DocumentPage 
      title="Terms of Service" 
      content={termsOfServiceContent} 
    />
  );
};

export default TermsOfService;
