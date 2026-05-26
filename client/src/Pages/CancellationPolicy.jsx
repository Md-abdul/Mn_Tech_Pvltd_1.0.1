import React from "react";


const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Cancellation Policy
        </h1>
        <div className="border-b-2 border-gray-200 dark:border-gray-700 mb-6"></div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              1. Order Cancellation
            </h2>
            <p className="mb-4">
              At Modevia Ninehertz, we understand that circumstances may change. This Cancellation 
              Policy outlines the procedures and timelines for canceling orders placed through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              2. Cancellation Timeframes
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-100 dark:bg-gray-700 rounded-lg">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-600">
                    <th className="py-3 px-4 text-left">Order Status</th>
                    <th className="py-3 px-4 text-left">Cancellation Window</th>
                    <th className="py-3 px-4 text-left">Refund Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-600">
                    <td className="py-3 px-4">Order Placed</td>
                    <td className="py-3 px-4">Within 24 hours</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400">Full Refund</td>
                  </tr>
                  <tr className="border-b dark:border-gray-600">
                    <td className="py-3 px-4">Processing</td>
                    <td className="py-3 px-4">Before shipment</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400">Full Refund</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Shipped</td>
                    <td className="py-3 px-4">After delivery only*</td>
                    <td className="py-3 px-4 text-yellow-600 dark:text-yellow-400">Conditional</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                *For shipped orders, cancellation is only possible through the return process after delivery.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              3. How to Cancel an Order
            </h2>
            <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-3">Cancellation Methods</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Online Cancellation</h4>
                  <ol className="list-decimal pl-4 space-y-1 text-sm">
                    <li>Log in to your account</li>
                    <li>Go to "My Orders"</li>
                    <li>Select the order to cancel</li>
                    <li>Click "Cancel Order"</li>
                    <li>Select cancellation reason</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Customer Support</h4>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>Call: 9674387425</li>
                    <li>Email: cancellations@modevianinehertz.com</li>
                    <li>Live Chat (Website/App)</li>
                    <li>Provide order number and details</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              4. Cancellation Charges
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="mb-3">
                In most cases, there are no cancellation charges if the cancellation request is made 
                within the allowed timeframe. However, certain exceptions may apply:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Customized Products:</strong> 25% cancellation fee for personalized/custom orders
                </li>
                <li>
                  <strong>Digital Products:</strong> Non-refundable once accessed/downloaded
                </li>
                <li>
                  <strong>Services:</strong> Cancellation fees may apply based on work completed
                </li>
                <li>
                  <strong>Special Orders:</strong> Products ordered specifically for you may incur charges
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              5. Refund Processing After Cancellation
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Cancellation Confirmation</h3>
                  <p className="text-sm">You will receive email/SMS confirmation within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Refund Initiation</h3>
                  <p className="text-sm">Refund processed within 24 hours of cancellation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Credit to Account</h3>
                  <p className="text-sm">Reflects in your account within 5-10 business days</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              6. Non-Cancellable Items/Services
            </h2>
            <div className="bg-red-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-red-700 dark:text-red-400 font-medium mb-2">The following cannot be cancelled:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Digital products after download/access</li>
                <li>Services already rendered or work completed</li>
                <li>Personalized/custom-made products in production</li>
                <li>Gift cards/vouchers</li>
                <li>Items marked as "Final Sale" or "Non-Cancellable"</li>
                <li>Products shipped via expedited/special delivery</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              7. Bulk Order Cancellations
            </h2>
            <p className="mb-4">
              For bulk orders (10+ units) or business purchases, special cancellation terms apply:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellation request must be made within 48 hours of order placement</li>
              <li>15% processing fee for cancellations after 48 hours</li>
              <li>Written confirmation required for all bulk order cancellations</li>
              <li>Refund timeline: 10-15 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              8. Force Majeure
            </h2>
            <p className="mb-4">
              Modevia Ninehertz shall not be liable for any failure or delay in performance due to 
              circumstances beyond our reasonable control, including but not limited to:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-center text-sm">Natural Disasters</span>
              <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-center text-sm">Government Actions</span>
              <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-center text-sm">Labor Strikes</span>
              <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded text-center text-sm">Supply Chain Issues</span>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              9. Contact & Support
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="font-medium mb-2">Cancellation Support Team</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Phone:</strong> 9674387425</p>
                  {/* <p><strong>Email:</strong> cancellations@modevianinehertz.com</p> */}
                </div>
                <div>
                  <p><strong>Hours:</strong> Mon-Sat, 9 AM - 8 PM</p>
                  {/* <p><strong>Emergency:</strong> support@modevianinehertz.com</p> */}
                </div>
              </div>
              <p className="mt-3 text-sm">
                For fastest resolution, please have your order number ready when contacting support.
              </p>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Last Updated:</strong> January 8, 2025
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Modevia Ninehertz reserves the right to modify this cancellation policy. 
              The policy applicable to your order will be the one in effect at the time of order placement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;