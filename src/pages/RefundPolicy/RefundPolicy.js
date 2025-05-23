import React from "react";
import "./RefundPolicy.css";

export default function RefundPolicy() {
  return (
    <div className="refund-policy">
      <h1 className="refund-policy__title">
        Payment Terms - Withdrawals, Refunds &amp; Cancellation
      </h1>

      <h2 className="refund-policy__subtitle">Ownership of Payment Method</h2>
      <p className="refund-policy__paragraph">
        By inputting a payment method, the User hereby affirms that the User is the lawful owner of the payment method account used to make any deposit(s) on the Portal. It shall be a violation of these Terms and Conditions for any User to submit payment using any payment method that is not owned by the User.
      </p>

      <h2 className="refund-policy__subtitle">Payment Terms for Participation in Paid Games</h2>
      <p className="refund-policy__paragraph">
        In respect of any transactions entered into on the Nifty10 Portal, including making a payment to participate in the Paid Games, Users agree to be bound by the following payment terms:
      </p>
      <ul className="refund-policy__list">
        <li className="refund-policy__list-item">
          The payment of a pre-designated amount Users make to participate in the Paid Game(s) includes the pre-designated Portal fee for access to the Nifty10 Services charged by Nifty10 and the participant’s contribution towards the prize money pool.
        </li>
        <li className="refund-policy__list-item">
          All amounts collected from the User are held in separate non-interest earning bank accounts operated by a third party appointed by Nifty10.
        </li>
        <li className="refund-policy__list-item">
          From these accounts, payouts can be made to:
          <ul className="refund-policy__sublist">
            <li className="refund-policy__sublist-item">(a) Users (withdrawals)</li>
            <li className="refund-policy__sublist-item">(b) Nifty10 (Portal Fees)</li>
            <li className="refund-policy__sublist-item">(c) Government (GST payable)</li>
            <li className="refund-policy__sublist-item">(d) Government (TDS on winnings amount)</li>
          </ul>
        </li>
        <li className="refund-policy__list-item">
          Nifty10 reserves the right to charge a Portal fee, which will be specified and notified on the Contest page prior to a User joining.
        </li>
        <li className="refund-policy__list-item">
          From 01 Oct 2023, 28% GST is applicable on amounts deposited by the User in the ‘Amount Unutilized’ account.
        </li>
        <li className="refund-policy__list-item">
          The User contributes a pre-specified amount towards the prize money pool, which is passed on to winners. Nifty10 only acts as an intermediary for collecting and distributing this prize money pool.
        </li>
      </ul>

      <h2 className="refund-policy__subtitle">User Account Types and Transactions</h2>
      <ul className="refund-policy__list">
        <li className="refund-policy__list-item">
          Users have two types of accounts for payments: (i) ‘Amount Unutilized’ Account, and (ii) Winnings Account. Transfers between these accounts or to third parties is not permitted.
        </li>
        <li className="refund-policy__list-item">
          Winnings from contests credit to the Winnings Account.
        </li>
        <li className="refund-policy__list-item">
          Amounts remitted by Users credit to the ‘Amount Unutilized’ Account.
        </li>
        <li className="refund-policy__list-item">
          When participating in Paid Games, the participation fee is first debited from the ‘Amount Unutilized’ Account, then from the Winnings Account if needed.
        </li>
        <li className="refund-policy__list-item">
          If additional payment is required, Users are directed to a payment gateway, with applicable taxes (e.g., 28% GST) included.
        </li>
        <li className="refund-policy__list-item">
          Excess payment beyond the required amount is credited back to the User’s ‘Amount Unutilized’ Account.
        </li>
        <li className="refund-policy__list-item">
          Debits from ‘Amount Unutilized’ Account occur in order of credit date (first in, first out).
        </li>
        <li className="refund-policy__list-item">
          Amounts in the ‘Amount Unutilized’ Account must be used within 335 days or may be forfeited by Nifty10 without compensation.
        </li>
      </ul>

      <h2 className="refund-policy__subtitle">Withdrawals</h2>
      <p className="refund-policy__paragraph">
        Withdrawal requests from the Winnings Account must be submitted to Nifty10, which will transfer funds to the User’s registered bank account within a reasonable time without processing fees. Users must provide valid photo ID, PAN card, and address proof matching the registration details. Withdrawals will not be processed if the User has not verified their account or registered a bank account.
      </p>

      <h2 className="refund-policy__subtitle">Transaction Finality and Refunds</h2>
      <ul className="refund-policy__list">
        <li className="refund-policy__list-item">
          Once a User confirms a transaction, it is binding and payment must be made.
        </li>
        <li className="refund-policy__list-item">
          Transactions may take up to 24 hours to process due to bank reconciliations.
        </li>
        <li className="refund-policy__list-item">
          Delays in crediting amounts to User accounts may occur; Users agree not to claim compensation or complaints for lost opportunities.
        </li>
        <li className="refund-policy__list-item">
          Transactions, once confirmed, cannot be canceled.
        </li>
        <li className="refund-policy__list-item">
          Refunds may be issued at Nifty10’s sole discretion, after deducting cancellation charges and taxes, within 7 to 10 working days from initiation.
        </li>
        <li className="refund-policy__list-item">
          Additional terms may apply, and in case of conflict, those terms prevail.
        </li>
      </ul>
    </div>
  );
}
