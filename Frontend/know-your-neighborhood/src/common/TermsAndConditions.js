import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="container" style={{ fontFamily: "'Roboto Slab', serif" }}>
      <div className="row min-vh-100">
        <div className="col-md-10 offset-md-1">
          <div className="terms-and-conditions">
            <h1 className='text-center mb-4 mt-4'>Terms and Conditions</h1>
            
            <ul>
              <li>
                <h5>Acceptance of Terms</h5><br />
                By accessing and using the KYN website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our platform.
              </li>
              <li>
                <h5 className='mt-4'>User Responsibilities</h5><br />
                <ul type="a">
                  <li>You are responsible for maintaining the confidentiality of your account information and password.</li>
                  <li>You agree to use KYN solely for lawful purposes and in compliance with applicable laws and regulations.</li>
                  <li>You must not engage in any activity that may disrupt or interfere with the functioning of KYN or compromise the security of the platform.</li>
                </ul>
              </li>
              <li>
                <h5 className='mt-4'>Intellectual Property</h5><br />
                <ul type="a">
                  <li>All content and materials on the KYN platform, including but not limited to text, graphics, logos, images, and software, are the property of KYN and protected by intellectual property laws.</li>
                  <li>You may not reproduce, modify, distribute, or use any content from KYN without prior written permission.</li>
                </ul>
              </li>
              <li>
                <h5 className='mt-4'>User-Generated Content</h5><br />
                <ul type="a">
                  <li>By submitting content to KYN, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute the content.</li>
                  <li>You are solely responsible for the content you submit and must ensure that it does not infringe upon any third-party rights or violate any laws.</li>
                </ul>
              </li>
              <li>
                <h5 className='mt-4'>Disclaimer of Warranties</h5><br />
                <ul type="a">
                  <li>KYN provides the platform on an "as is" and "as available" basis, without any warranties or representations of any kind.</li>
                  <li>We do not guarantee the accuracy, completeness, or reliability of any content or information on KYN.</li>
                </ul>
              </li>
              <li>
                <h5 className='mt-4'>Limitation of Liability</h5><br />
                <ul type="a">
                  <li>KYN and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from your use of the platform.</li>
                  <li>We are not responsible for any loss or damage caused by third-party services, products, or content linked to or advertised on KYN.</li>
                </ul>
              </li>
              <li>
                <h5 className='mt-4'>Privacy Policy</h5><br />
                <ul type="a">
                  <li>KYN collects and processes personal data in accordance with our Privacy Policy.</li>
                  <li>By using KYN, you consent to the collection, storage, and processing of your personal information as described in our Privacy Policy.</li>
                </ul>
              </li>
              <li>
                <h5 className='mt-4'>Modifications and Termination</h5><br />
                <ul type="a">
                  <li>KYN reserves the right to modify or terminate the platform, services, or these Terms and Conditions at any time without prior notice.</li>
                  <li>You may terminate your use of KYN at any time by discontinuing your access to the platform.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
