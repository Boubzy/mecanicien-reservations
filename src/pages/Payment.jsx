import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    console.log('Paiement effectué avec les informations suivantes :', {
      cardNumber,
      expiryDate,
      cvv,
      amount,
    });
    alert('Paiement réussi !');
  };

  return (
    <div className="container">
      <h2>Paiement</h2>
      <input
        type="text"
        placeholder="Numéro de carte"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date d'expiration (MM/YY)"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <input
        type="number"
        placeholder="Montant"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Payer</button>
    </div>
  );
};

export default Payment;
