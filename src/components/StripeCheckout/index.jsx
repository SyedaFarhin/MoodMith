import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

// Stripe publishable key (in production, this should come from environment variables)
const stripePromise = loadStripe('pk_test_51234567890abcdefghijklmnopqrstuvwxyz');

const CheckoutForm = ({ clientSecret, onSuccess, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Customer Name',
          email: 'customer@example.com',
        },
      },
    });

    if (error) {
      toast.error(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      toast.success('Payment successful!');
      onSuccess(paymentIntent);
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
            },
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          isProcessing || !stripe
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105'
        }`}
      >
        {isProcessing ? 'Processing...' : `Pay $${amount}`}
      </button>
    </form>
  );
};

const StripeCheckout = ({ amount, onSuccess }) => {
  const [clientSecret, setClientSecret] = useState('');

  // Create payment intent when component mounts
  React.useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        // In a real application, you would call your backend to create a payment intent
        // For demo purposes, we'll simulate this with a mock response
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: Math.round(amount * 100), // Convert to cents
            currency: 'usd',
          }),
        });

        if (!response.ok) {
          // For demo purposes, create a mock client secret
          const mockClientSecret = 'pi_mock_' + Math.random().toString(36).substr(2, 9) + '_secret_' + Math.random().toString(36).substr(2, 9);
          setClientSecret(mockClientSecret);
          return;
        }

        const { clientSecret: secret } = await response.json();
        setClientSecret(secret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
        // For demo purposes, create a mock client secret
        const mockClientSecret = 'pi_mock_' + Math.random().toString(36).substr(2, 9) + '_secret_' + Math.random().toString(36).substr(2, 9);
        setClientSecret(mockClientSecret);
      }
    };

    createPaymentIntent();
  }, [amount]);

  if (!clientSecret) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        clientSecret={clientSecret}
        onSuccess={onSuccess}
        amount={amount}
      />
    </Elements>
  );
};

export default StripeCheckout;
