import { Link, useRouteLoaderData } from '@remix-run/react';

import { useEffect, useState } from 'react';
import { userHasRole } from '~/app/core/server/index.ts';
import { type loader as rootLoader } from '~/app/root.tsx';
import { useOptionalUser } from '~/app/shared/lib/hooks/index.ts';
import { cn } from '~/app/shared/lib/utils/index.ts';
import { Button, Icon } from '~/app/shared/ui/index.ts';
import { ThemeSwitcher, UserNav } from './components/index.ts';

const SCROLL_OFFSET = 50;

const DEFAULT_HEADER_CLASSES =
	'sticky inset-x-0 top-0 z-30 w-full transition-all';
const SCROLLED_HEADER_CLASSES =
	'border-b border-foreground/40 backdrop-blur-lg';

export const Header = () => {
	const maybeUser = useOptionalUser();
	const data = useRouteLoaderData<typeof rootLoader>('root');
	const userIsAdmin = userHasRole(maybeUser, 'admin');

	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		if (window.scrollY > SCROLL_OFFSET) setHasScrolled(true);

		const handleScroll = () => {
			const offset = window.scrollY;
			setHasScrolled(offset > SCROLL_OFFSET);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={cn(
				DEFAULT_HEADER_CLASSES,
				hasScrolled && SCROLLED_HEADER_CLASSES,
			)}
		>
			<nav className="relative py-3" aria-label="Top">
				<div className="mx-auto w-full px-4 pt-0 lg:px-20">
					<div className="flex flex-row items-center justify-between">
						<div className="flex items-center">
							<Link to="/" prefetch="intent">
								<img
									className="h-12 w-auto"
									src="/images/geekConsole3.png"
									alt="Header logo"
								/>
							</Link>
						</div>
						<div className="flex items-center justify-center gap-4">
							{maybeUser !== null ? (
								<UserNav />
							) : (
								<div className="ml-10 hidden space-x-4 lg:block">
									<Button asChild variant="link">
										<Link to="/login">Log in</Link>
									</Button>
									<Button asChild variant="link">
										<Link to="/signup">Get started today</Link>
									</Button>
								</div>
							)}
							{userIsAdmin ? (
								<Button asChild variant="secondary">
									<Link to="/admin/cache">
										<Icon name="backpack">
											<span className="hidden sm:block">Admin</span>
										</Icon>
									</Link>
								</Button>
							) : null}
							<ThemeSwitcher
								userPreference={data?.requestInfo.userPrefs.theme}
							/>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};
