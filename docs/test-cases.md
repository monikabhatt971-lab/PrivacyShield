# PrivacyShield Test Cases

## Test 01 — Single Email

Input:
My email is abc@gmail.com

Expected:
My email is [EMAIL_01]

Status:
Pending


## Test 02 — Multiple Emails

Input:
My emails are abc@gmail.com and xyz@gmail.com

Expected:
My emails are [EMAIL_01] and [EMAIL_02]

Status:
Pending


## Test 03 — Same Email Repeated

Input:
My email is abc@gmail.com.
Please contact abc@gmail.com again.

Expected:
My email is [EMAIL_01].
Please contact [EMAIL_01] again.

Status:
Pending


## Test 04 — Single Phone

Input:
My phone number is 9876543210.

Expected:
My phone number is [PHONE_01].

Status:
Pending


## Test 05 — Multiple Phones

Input:
My number is 9876543210.
My friend's number is 9123456789.

Expected:
My number is [PHONE_01].
My friend's number is [PHONE_02].

Status:
Pending


## Test 06 — Same Phone Repeated

Input:
Call me at 9876543210.
My number again is 9876543210.

Expected:
Call me at [PHONE_01].
My number again is [PHONE_01].

Status:
Pending


## Test 07 — Email + Phone

Input:
My email is abc@gmail.com.
My phone is 9876543210.

Expected:
My email is [EMAIL_01].
My phone is [PHONE_01].

Status:
Pending


## Test 08 — Normal Text

Input:
Hello, how are you?

Expected:
Hello, how are you?

Status:
Pending


## Test 09 — Multiple Lines

Input:
My name is Monika.
My email is abc@gmail.com.

My phone is 9876543210.

Expected:
My name is Monika.
My email is [EMAIL_01].

My phone is [PHONE_01].

Status:
Pending


## Test 10 — Empty Input

Input:
Empty

Expected:
Enter some text to protect.

Status:
Pending