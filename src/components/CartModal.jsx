import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';

function CartModal({ cart, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    // Focus the close button when the modal opens
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, []);

  const total = cart.reduce((sum, item) => sum + (item.priceRwf || item.price), 0);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in slide-in-from-bottom-8 duration-300">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-black text-gray-900">Your Cart</h2>
          <button 
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-simba"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-simba font-medium">
                      {new Intl.NumberFormat("en-RW", {
                        style: "currency",
                        currency: "RWF",
                        maximumFractionDigits: 0
                      }).format(item.priceRwf || item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          )}
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-600 font-medium">Total Estimate</span>
            <span className="text-2xl font-black text-gray-900">
              {new Intl.NumberFormat("en-RW", {
                style: "currency",
                currency: "RWF",
                maximumFractionDigits: 0
              }).format(total)}
            </span>
          </div>
          <button 
            disabled={cart.length === 0}
            className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default CartModal;
