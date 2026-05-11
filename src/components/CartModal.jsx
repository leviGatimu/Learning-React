import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';

function CartModal({ cart, onClose, onRemove }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, []);

  const total = cart.reduce((sum, item) => sum + (item.priceRwf || item.price), 0);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/70 backdrop-blur-md animate-modal-overlay">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-modal-content flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Your Shopping Bag</h2>
            <p className="text-sm text-gray-500 font-medium">{cart.length} {cart.length === 1 ? 'item' : 'items'} ready to go</p>
          </div>
          <button 
            ref={closeButtonRef}
            onClick={onClose}
            className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-900 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-simba/50"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto px-8 py-6 custom-scrollbar">
          {cart.length > 0 ? (
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="relative h-20 w-20 flex-shrink-0 rounded-2xl overflow-hidden border border-gray-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  
                  <div className="ml-5 flex-grow">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-simba transition-colors">{item.name}</h4>
                      <button 
                        onClick={() => onRemove(index)}
                        className="text-gray-300 hover:text-red-500 transition-colors ml-4"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-end justify-between mt-2">
                      <p className="text-xl font-black text-gray-900">
                        {new Intl.NumberFormat("en-RW", {
                          style: "currency",
                          currency: "RWF",
                          maximumFractionDigits: 0
                        }).format(item.priceRwf || item.price)}
                      </p>
                      <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-2 py-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Qty: 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-simba" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Empty Cart?</h3>
              <p className="text-gray-500 max-w-[200px] mx-auto">Looks like you haven't added any fresh items yet.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-8 bg-gray-50/50 border-t border-gray-100 sticky bottom-0">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">Total Amount</span>
              <p className="text-3xl font-black text-gray-900">
                {new Intl.NumberFormat("en-RW", {
                  style: "currency",
                  currency: "RWF",
                  maximumFractionDigits: 0
                }).format(total)}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full uppercase">Free Delivery</span>
            </div>
          </div>
          <button 
            disabled={cart.length === 0}
            className="group w-full bg-gray-900 text-white py-5 rounded-[1.5rem] font-bold text-lg hover:bg-gray-800 transition-all active:scale-[0.98] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed shadow-xl shadow-gray-900/10 flex items-center justify-center space-x-3"
          >
            <span>Proceed to Checkout</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default CartModal;
