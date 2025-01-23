
# Mobile Payment Module

This is a React Native + Typescript project utilizing device biometric authentication, device contact, date-fns and other libraries.

## Installation

Clone project

```bash
  git clone https://github.com/wanikmalfitri/mobile-payment-module.git
```

Install dependencies

```bash
  cd mobile-payment-module
  npm install
```
Run app

```bash
  npm run start
```
    
## Features

### Payment Transfer Interface
- Create a user-friendly interface for initiating payments ✅
- Include fields for recipient selection/input, amount, and optional note ✅
- Implement current account balance checking and display ✅
- Provide clear error messages for invalid inputs ✅

### Biometric Authentication
- Integrate device biometric capabilities (Face ID / Touch ID / Fingerprint) ✅
- Biometric should be prompted upon the payment transfer happens for user authentication. ✅
- Implement fallback options for devices without biometric capabilities ✅
- Ensure proper handling of biometric authentication results ✅

### Transaction Processing
- Simulate API calls for processing the transaction ✅
- Implement proper error handling for various scenarios (e.g. insufficient funds - amount > 199403,network issues - amount = 999) ✅
- Display a confirmation screen with transaction details upon successful transfer ✅

### Performance Optimization
- Optimize rendering of lists - applied lazy loading and list paginated ✅
- Implement efficient state management and minimize unnecessary re-renders ✅

### Extra
- Allow users to access and select recipient from their contact list ✅
- Display recent transfer history for quick re-sending ✅

## Workflow

Folders and files structured in a way that these items were put into different sections
- componenents (ContactSelector, Skeleton)
- data (mocked data)
- navigation
- screens (Home, Transfer, TransferSuccess)
- services (mocked API)
- types
- utils (biometric)

For simplicity, no UI library being used and vanilla styling was applied. I used CursorAI to speed up repetitive things like mocking the data, troubleshooting and getting a drafted UI component before i started customizing them and write my own methods. I avoid using AI for something I did not know as I barely learn from that process.

## Things that can be improved
- use zustand or useContext to get the latest user balance
- use zod or yum for better form validation
- custom component for alert, button, input

## Demo

https://drive.google.com/drive/folders/1uF3HublqP3gHY6qs_qhi7u9z64INEbbJ?usp=sharing

