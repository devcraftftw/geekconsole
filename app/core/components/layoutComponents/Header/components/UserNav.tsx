import { Form, Link, useSubmit } from '@remix-run/react';
import { useRef } from 'react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { useUser } from '~/app/shared/lib/hooks/index.ts';
import { getUserImgSrc } from '~/app/shared/lib/utils/index.ts';

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Icon,
} from '~/app/shared/ui/index.ts';

export const UserNav = () => {
	const user = useUser();
	const submit = useSubmit();
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="p-6">
				<Button variant="secondary">
					<Link
						to="/settings/profile"
						// this is for progressive enhancement
						onClick={(e) => e.preventDefault()}
						className="flex items-center gap-2"
					>
						<Avatar className="h-12 w-12">
							<AvatarImage
								src={getUserImgSrc(user.image?.id)}
								alt={user.name ?? user.username}
							/>
							<AvatarFallback />
						</Avatar>
						<span className="text-body-sm font-bold">
							{user.name ?? user.username}
						</span>
					</Link>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{user.username}</p>
						<p className="text-xs leading-none text-muted-foreground">
							{user.email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link to={`/profile/${user.username}`} prefetch="intent">
							Profile
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="/dashboard" prefetch="intent">
							Dashboard
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link to="/settings/profile" prefetch="intent">
							Settings
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					asChild
					// this prevents the menu from closing before the form submission is completed
					onSelect={(event) => {
						event.preventDefault();
						submit(formRef.current);
					}}
				>
					<Form action="/logout" method="POST" ref={formRef} className="mt-3">
						<AuthenticityTokenInput />
						<Button type="submit" variant="link" size="sm">
							<Icon name="exit" className="scale-125 max-md:scale-150">
								Logout
							</Icon>
						</Button>
					</Form>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
