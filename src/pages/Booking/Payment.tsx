import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";

const Payment = () => {
  const { session } = useParams<{ session: string }>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const windowObj = window as any;
    // Ensure the Checkout object is available globally
    if (session) {
      windowObj.errorCallback = (error: any) => {
        console.log(JSON.stringify(error));
      };
      windowObj.cancelCallback = () => {
        console.log("Payment cancelled");
      };

      setIsLoaded(true);
    } else {
      console.error("Checkout object not found or ID is missing.");
    }
  }, [session]);

  useEffect(() => {
    if (isLoaded) {
      const windowObj = window as any;
      windowObj.Checkout.configure({
        session: {
          id: session,
        },
        interaction: {
          // cancelUrl: 'https://kurifturesorts.com/cancel',
          // errorUrl: 'https://kurifturesorts.com/error'
          // cancelUrl: `${window.location.origin}/cancel`, // Absolute URL
          // errorUrl: `${window.location.origin}/error`,   // Absolute URL
        },
      });
      windowObj.Checkout.showEmbeddedPage("#embed-target");
    }
  }, [isLoaded]);

  return (
    <div>
      <div id="embed-target"></div>
    </div>
  );
};

export default Payment;
