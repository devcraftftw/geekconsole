import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { Outlet } from '@remix-run/react';
import { type VerificationTypes } from '~/app/routes/_layout+/_auth+/verify.tsx';
import { type BreadcrumbHandle } from '~/app/shared/schemas/index.ts';
import { Icon } from '~/app/shared/ui/index.ts';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: <Icon name="lock-closed">2FA</Icon>,
	getSitemapEntries: () => null,
};

export const twoFAVerificationType = '2fa' satisfies VerificationTypes;

export default function TwoFactorRoute() {
	return <Outlet />;
}
