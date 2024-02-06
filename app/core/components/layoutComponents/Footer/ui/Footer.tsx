import { Link } from '@remix-run/react';
import { useTheme } from '~/app/shared/lib/hooks/index.ts';
import { BigLogo, Button } from '~/app/shared/ui/index.ts';

export const Footer = () => {
	const theme = useTheme();
	const isDark = theme === 'dark';

	return (
		<footer className="w-full border-t border-foreground/10 py-8">
			<div className="mx-auto w-full px-4 pt-6 lg:px-20">
				<div className="mx-auto w-full">
					<div className="xl:grid xl:grid-cols-5 xl:gap-8">
						<div className="space-y-6 xl:col-span-2">
							<Link to="/">
								<BigLogo className="w-72" isDark={isDark} />
							</Link>
							<p className="max-w-xs text-sm">Stay organized or whatever</p>
						</div>
						<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
							<div className="md:grid md:grid-cols-2 md:gap-8">
								<div>
									<h3 className="text-sm font-semibold">About app</h3>
									<ul className="mt-4">
										<li>
											<Button asChild variant="link">
												<Link className="pl-0 text-sm" to="/about">
													About
												</Link>
											</Button>
										</li>
										<li>
											<Button asChild variant="link">
												<a
													className="pl-0"
													href="https://roadmap.geekconsole.app"
													target="_blank"
													rel="noopener noreferrer"
												>
													Roadmap
												</a>
											</Button>
										</li>
										<li>
											<Button asChild variant="link">
												<a
													className="pl-0"
													href="https://github.com/devcraftftw/geekconsole"
													target="_blank"
													rel="noopener noreferrer"
												>
													Github
												</a>
											</Button>
										</li>
									</ul>
								</div>

								<div className="mt-10 md:mt-0">
									<h3 className="text-sm font-semibold">Company</h3>
									<ul className="mt-4">
										<li>
											<Button asChild variant="link">
												<Link className="pl-0 text-sm" to="/pricing">
													Pricing
												</Link>
											</Button>
										</li>
									</ul>
								</div>
							</div>

							<div className="md:grid md:grid-cols-2 md:gap-8">
								<div>
									<h3 className="text-sm font-semibold">Support</h3>
									<div className="mt-4">
										<Button asChild variant="link">
											<Link
												className="pl-0 text-sm"
												to="mailto:vvolodya.evseev@gmail.com"
											>
												Contact Us
											</Link>
										</Button>
									</div>
								</div>

								<div className="mt-10 md:mt-0">
									<h3 className="text-sm font-semibold">Legal</h3>
									<ul className="mt-4">
										<li>
											<Button asChild variant="link">
												<Link className="pl-0 text-sm" to="/terms-of-service">
													Terms of Service
												</Link>
											</Button>
										</li>
										<li>
											<Button asChild variant="link">
												<Link className="pl-0 text-sm" to="/privacy-policy">
													Privacy Policy
												</Link>
											</Button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-16 border-t border-foreground/5 pt-8 sm:mt-20 lg:mt-8">
						<p className="text-sm leading-5 text-foreground">
							Copyright @ {new Date().getFullYear()} GeekConsole. All Rights
							Reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
