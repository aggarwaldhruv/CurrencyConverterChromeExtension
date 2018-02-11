# CurrencyConverterChromeExtensionTest Cases and Execution Document
Execution Steps: 
1.	Go to chrome://extensions/ and check the box for Developer mode in the top right.
2.	Click on Load unpacked extension button and select the folder “Currency Converter Extension” to install it.
3.	Click on   icon and extension will open.
 	
4.	Enter the currency code in From currency field and To currency field. Example: AUD, INR, USD, etc.
5.	Input field will accept both lower case as well as upper case values and will internally convert it to upper case.
6.	Click on submit button result will show next to “Result”.

 
Currency Converter API used: Foreign exchange rates and currency conversion API (URL: fixer.io) 


Test Cases
1	No input is given	Click on Currency Converter Extension
From Currency : Null
To Currency : Null
Click on Submit	Result shown as "Invalid Input"
2	Only one currency is entered i.e either From currency or To currency	Click on Currency Converter Extension
From Currency : Null/AUD
To Currency : Null/USD
Click on Submit	Result shown as "Invalid Input"
3	Length of currency entered is more than 3	Click on Currency Converter Extension
From Currency : AUST
To Currency : INRS
Click on Submit	Result shown as "Invalid Input"
4	To Currency entered is incorrect	Click on Currency Converter Extension
From Currency : USD
To Currency : INS
Click on Submit	Result shown as "To Currency is not valid value."
5	From Currency entered value is incorrect	Click on Currency Converter Extension
From Currency : USS
To Currency : INR
Click on Submit	Result shown as "Invalid base"
6	If extension is not able to reach the currency conversion API	Click on Currency Converter Extension
From Currency : USD
To Currency : INR
Click on Submit	Result shown as "Some error occurred while fetching conversion rate"
7	For Correct Input 	Click on Currency Converter Extension
From Currency : USD
To Currency : INR
Click on Submit	Result shown as " Conversion Rate 1 AUD = 0.79418 USD"

