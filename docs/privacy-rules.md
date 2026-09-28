# PrivacyShield Privacy Rules

## 1. Sensitive Data Categories

PrivacyShield is designed to protect the following types of sensitive information:

| Category | Example | Mask |
|---|---|---|
| Email | abc@gmail.com | [EMAIL_01] |
| Phone | 9876543210 | [PHONE_01] |
| Name | Monika Bhatt | [NAME_01] |
| DOB | 24/11/2005 | [DOB_01] |
| Address | Ajmer, Rajasthan | [ADDRESS_01] |
| ID | Sample ID | [ID_01] |
| Financial Information | Sample data | [FINANCIAL_01] |

## 2. Current Implementation

Currently, PrivacyShield supports:

- Email masking
- Phone number masking

Other categories will be implemented in later phases.

## 3. Masking Rules

1. Same original data should get the same token.
2. Different original data should get different tokens.
3. Normal text should remain unchanged.
4. Multiple sensitive items should be detected.
5. Original sensitive data should not appear in protected output.
6. Text formatting and line breaks should be preserved.