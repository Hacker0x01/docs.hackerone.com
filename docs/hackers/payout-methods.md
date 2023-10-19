---
title: "Payout Preferences"
path: "/hackers/payout-methods.html"
id: "hackers/payout-methods"
---

You can manage your payout settings by going to your profile's <b>[Settings > Payout Methods](https://hackerone.com/settings/payment_preferences)</b>.

You can choose between these 2 processing times in receiving your payouts:

Option | Details
------ | --------
Daily | Your payouts will be processed daily.
Monthly | Your payouts will be processed on the 27th of every month. <br><br>If the 27th falls on a weekend, the payout will be processed on the next business day. If February 27th is a Sunday, the payout will be processed on March 1. <br><br>*Charity payments aren't able to be processed monthly.*

You can also choose between 3 payout methods.

Depending on which of the 3 payout methods you elect, payments are processed at different times each day, and the expected retrieval time of your monetary award also varies depending on the method.

**Note:** Payments are not processed on the first or last days of the month.

HackerOne offers these 3 payout methods for monetary awards:

Payout Method | Processing Time | Description  
------------- | --------------- | -----------
PayPal | Monday to Friday at 11:30pm UTC | Payout time is 1-2 days.<br>As soon as the payment is initiated, you'll receive your award instantly, given that your PayPal account is set up to properly receive the amount of money HackerOne is trying to send.</br>
Bitcoin via Coinbase | Every day at 11pm UTC | Payout time is 1-2 days.<br>As soon as the payment is processed, you'll receive your award instantly.</br>
Bank Transfer (Currencycloud) | Monday to Friday at 9am UTC | Payout time is 1-10 days.<br>You can choose between using Normal (local) or Priority (SWIFT) payments. How fast you receive your payout depends on the type of payment you're using as well as your bank. There are cases where hackers have received payments on the same day and cases where hackers have had to wait the full 10 business days. Bank transfers can be done in your own local currency. To convert bounties to your local currency, the mid-market rate is used to convert money. This saves you up to 5% compared to relying on your bank to convert the money to your local currency.</br><br>Make sure your bank isn’t on the sanctions list. Go to https://sanctionssearch.ofac.treas.gov/ to check if your bank is on the list. Banks on this list don’t qualify for bank transfers. Examples include VTB and SBERBANK.</br><br>**Note on payment limits:** we attempt to pay the largest payment in a single transaction allowed to us by the currency exchanges. This will vary by currency and whether it is a Priority or Regular payment. See chart below for more details.

### More Info on Bank Transfers (Currencycloud)

#### Choosing between SWIFT and Local payment
  _ | SWIFT | Local
 -------------- | -------- | ----------
Availability | Most currencies | Fewer currencies available
Fees | Fees imposed by banks | Does not impose a bank fee
Speed | Slightly slower | Slightly faster
Maximum payment size per single transaction (USD) | Unlimited | Depending on the currency and exchange rate, from about $15,000 USD, to unlimited. Payments due that are larger than the single transaction limit will be split up into multiple transfers

When creating your bank transfer payout preference in Settings, you will automatically be guided to available options for your bank and currency.

Generally, if you are receiving small payments, using Local delivery if it’s available to you is best for both speed and minimizing fees. Note that even if your currency doesn’t support Local delivery or SWIFT, you can ask for USD to be delivered to your bank - the only caveat is that your bank will likely give you a less favorable exchange rate, and you will need to test that yourself.

#### Currency Conversions
For bank transfers, we currently support conversions to the following currencies:

Supported Currency (Code) | SWIFT/Local Supported | Supported Currency (Code) | SWIFT/Local Supported 
------------ | ------------ | ------------ | --------- 
Australian Dollar (AUD) | SWIFT & Local | Mexican Peso (MXN) | SWIFT Only
Bahraini Dinar (BHD) | SWIFT Only | New Zealand Dollar NZD) | SWIFT Only
British Pound (GBP) | SWIFT & Local | Norwegian Krone (NOK) | SWIFT & Local
Bulgarian Lev (BGN) | SWIFT Only | Omani Rial (OMR) | SWIFT Only
Canadian Dollar (CAD) | SWIFT & Local | Philippine Peso (PHP) | SWIFT & Local
Chinese Yuan (CNY) | SWIFT Only | Polish Zloty (PLN) | SWIFT & Local
Croatian Kuna (HRK) | SWIFT & Local | Qatari Rial (QAR) | SWIFT Only
Czech Koruna (CZK) | SWIFT & Local | Romanian New Leu (RON) | SWIFT & Local
Danish Krone (DKK) | SWIFT & Local | Saudi Riyal (SAR) | SWIFT Only
Euro (EUR) | SWIFT & Local | Singapore Dollar (SGD) | SWIFT & Local | Hong Kong Dollar (HKD) | SWIFT & Local
South African Rand (ZAR) | SWIFT Only | Hungarian Forint (HUF) | SWIFT & Local
Swedish Krona (SEK) | SWIFT & Local | Indian Rupee (INR) | Local Only
Swiss Franc (CHF) | SWIFT & Local | Indonesian Rupiah (IDR) | Local Only | Thai Baht (THB) | SWIFT Only
Israeli New Sheqel (ILS) | SWIFT Only | Turkish Lira (TRY) | SWIFT Only | Japanese Yen (JPY) | SWIFT Only
Ugandan Shilling (UGX) | SWIFT Only | Kenyan Shilling (KES) | SWIFT Only | United Arab Emirates Dirham (AED) | SWIFT Only
Kuwaiti Dinar (KWD) | SWIFT Only | United States Dollar (USD) | SWIFT & Local | Malaysian Ringgit (MYR) | SWIFT & Local


Keep in mind that:
* When receiving a payout through a bank transfer, the payout must meet the minimum amount for the type of payment before it can be sent:
     * Swift payment minimum: $100
     * Local payment minimum: $50
     * The minimum is the cumulative of all payments pending for that user. For example, if you have $1 from one award and $49 pending from another, the 2 payments will be grouped into one payout of $50, which enables it to meet the local payment minimum transaction amount.
