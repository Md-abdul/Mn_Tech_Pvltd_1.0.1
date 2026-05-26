import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Refund Policy
        </h1>
        <div className="border-b-2 border-gray-200 dark:border-gray-700 mb-6"></div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              1. Overview
            </h2>
            <p className="mb-4">
              At Modevia Ninehertz, we strive to ensure complete customer satisfaction with our products and services. 
              This Refund Policy outlines the terms and conditions under which refunds are processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              2. Eligibility for Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Products received in damaged or defective condition</li>
              <li>Wrong product delivered</li>
              <li>Products missing parts or accessories</li>
              <li>Service not delivered as per agreed terms</li>
              <li>Cancellation before shipment (for applicable products)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              3. Refund Process
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <ol className="list-decimal pl-6 space-y-2">
                <li>Submit a refund request within 7 days of delivery</li>
                <li>Provide necessary documentation (photos/videos of damaged product)</li>
                <li>Our team will verify the claim within 2-3 business days</li>
                <li>Once approved, refund will be processed within 5-10 business days</li>
                <li>Refund will be credited to the original payment method</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              4. Non-Refundable Items
            </h2>
            <p className="mb-4">
              The following items/services are generally not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Digital products (software, eBooks, digital downloads)</li>
              <li>Services already rendered</li>
              <li>Personalized or custom-made products</li>
              <li>Products with tampered seals or missing serial numbers</li>
              <li>Items damaged due to customer misuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              5. Refund Timeline
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-100 dark:bg-gray-700 rounded-lg">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-600">
                    <th className="py-3 px-4 text-left">Payment Method</th>
                    <th className="py-3 px-4 text-left">Processing Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-600">
                    <td className="py-3 px-4">Credit/Debit Card</td>
                    <td className="py-3 px-4">5-10 business days</td>
                  </tr>
                  <tr className="border-b dark:border-gray-600">
                    <td className="py-3 px-4">Net Banking</td>
                    <td className="py-3 px-4">3-7 business days</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">UPI/Wallet</td>
                    <td className="py-3 px-4">24-48 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              6. Contact Information
            </h2>
            <p className="mb-2">
              For any refund-related queries, please contact our customer support:
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p>Email: refunds@modevianinehertz.com</p>
              <p>Phone: 9674387425 (Mon-Sat, 10 AM - 7 PM)</p>
              <p>Address: Modevia Ninehertz, Tech Park, Sector 62, Noida, Uttar Pradesh 201309</p>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Last Updated:</strong> January 8, 2025
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Modevia Ninehertz reserves the right to modify this refund policy at any time. 
              Changes will be effective immediately upon posting to the website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;