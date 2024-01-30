import { Form, useLocation, useSubmit } from '@remix-run/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '~/app/shared/ui/index.ts';

const LOGOUT_TIME = 1000 * 60 * 60 * 24;
const MODAL_TIME = LOGOUT_TIME - 1000 * 60 * 2;

export function LogoutTimer() {
	const [status, setStatus] = useState<'idle' | 'show-modal'>('idle');
	const location = useLocation();
	const submit = useSubmit();

	const modalTimer = useRef<ReturnType<typeof setTimeout>>();
	const logoutTimer = useRef<ReturnType<typeof setTimeout>>();

	const logout = useCallback(() => {
		submit(null, { method: 'POST', action: '/logout' });
	}, [submit]);

	const cleanupTimers = useCallback(() => {
		clearTimeout(modalTimer.current);
		clearTimeout(logoutTimer.current);
	}, []);

	const resetTimers = useCallback(() => {
		cleanupTimers();

		modalTimer.current = setTimeout(() => {
			setStatus('show-modal');
		}, MODAL_TIME);

		logoutTimer.current = setTimeout(logout, LOGOUT_TIME);
	}, [cleanupTimers, logout]);

	useEffect(() => resetTimers(), [resetTimers, location.key]);
	useEffect(() => cleanupTimers, [cleanupTimers]);

	function closeModal() {
		setStatus('idle');
		resetTimers();
	}

	return (
		<AlertDialog
			aria-label="Pending Logout Notification"
			open={status === 'show-modal'}
		>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you still there?</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogDescription>
					You are going to be logged out due to inactivity. Close this modal to
					stay logged in.
				</AlertDialogDescription>
				<AlertDialogFooter className="flex items-end gap-8">
					<AlertDialogCancel onClick={closeModal}>
						Remain Logged In
					</AlertDialogCancel>
					<Form method="POST" action="/logout">
						<AlertDialogAction type="submit">Logout</AlertDialogAction>
					</Form>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
