import { type useUser } from '~/app/shared/lib/hooks';

type Action = 'create' | 'read' | 'update' | 'delete';
type Entity = 'user' | 'book' | 'carSpending';
type Access = 'own' | 'any' | 'own,any' | 'any,own';
export type PermissionString =
	| `${Action}:${Entity}`
	| `${Action}:${Entity}:${Access}`;

export function parsePermissionString(permissionString: PermissionString) {
	const [action, entity, access] = permissionString.split(':') as [
		Action,
		Entity,
		Access | undefined,
	];

	return {
		action,
		entity,
		access: access ? (access.split(',') as Array<Access>) : undefined,
	};
}

export function userHasPermission(
	user: Pick<ReturnType<typeof useUser>, 'roles'> | null,
	permission: PermissionString,
) {
	if (!user) return false;

	const { action, entity, access } = parsePermissionString(permission);

	return user.roles.some((role) =>
		role.permissions.some(
			(permission) =>
				permission.entity === entity &&
				permission.action === action &&
				(!access || access.includes(permission.access)),
		),
	);
}

export function userHasRole(
	user: Pick<ReturnType<typeof useUser>, 'roles'> | null,
	role: string,
) {
	if (!user) return false;
	return user.roles.some((r) => r.name === role);
}
