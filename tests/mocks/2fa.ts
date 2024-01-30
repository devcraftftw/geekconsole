import { generateTOTP } from '~/app/core/server/index.ts';

// Paste your string here. It should start with "otpauth://totp/" and include a secret and other params
const otpString = ``;

const otpUri = new URL(otpString);
const { secret, algorithm, digits, period } = Object.fromEntries(
	otpUri.searchParams.entries(),
);

const { otp } = generateTOTP({
	secret,
	algorithm,
	digits: +digits,
	period: +period,
});

console.log(otp);
