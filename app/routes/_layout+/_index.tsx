import { type MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { useOptionalUser } from '#app/shared/lib/hooks';
import { Button } from '#app/shared/ui';

export const meta: MetaFunction = () => {
	return [{ title: 'GeekConsole' }];
};

export default function Index() {
	const maybeUser = useOptionalUser();

	return (
		<div className="flex flex-col items-center">
			<img className="h-40" src="images/giphy.gif" alt="GeekConsole Logo" />
			<div className="flex flex-col items-center gap-4">
				<h1 className="mb-3 text-xl text-primary">Welcome to GeekConsole</h1>
				<p className="w-2/3 text-center text-6xl font-bold tracking-tight">
					Take full control of your material and digital stuff
				</p>
				<p className="mx-auto mt-5 max-w-xl text-xl">
					Start saving your essentials with zero effort.
				</p>
				{maybeUser && (
					<Button asChild>
						<Link to="dashboard">Dashboard</Link>
					</Button>
				)}
			</div>
		</div>
	);
}
