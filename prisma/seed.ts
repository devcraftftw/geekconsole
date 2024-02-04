import fs from 'node:fs';
import { PrismaClient } from '@prisma/client';
import { promiseHash } from 'remix-utils/promise';
import { cleanupDb, createPassword } from '~/tests/db-utils.ts';
import { insertGitHubUser } from '~/tests/mocks/github.ts';

const prisma = new PrismaClient();

async function img({
	altText,
	filepath,
}: {
	altText?: string;
	filepath: string;
}) {
	return {
		altText,
		contentType: filepath.endsWith('.png') ? 'image/png' : 'image/jpeg',
		blob: await fs.promises.readFile(filepath),
	};
}

async function seed() {
	console.log('🌱 Seeding...');
	console.time(`🌱 Database has been seeded`);

	console.time('🧹 Cleaned up the database...');
	await cleanupDb(prisma);
	console.timeEnd('🧹 Cleaned up the database...');

	console.time('🔑 Created permissions...');
	const entities = ['user', 'book', 'carSpending'];
	const actions = ['create', 'read', 'update', 'delete'];
	const accesses = ['own', 'any'] as const;
	for (const entity of entities) {
		for (const action of actions) {
			for (const access of accesses) {
				await prisma.permission.create({ data: { entity, action, access } });
			}
		}
	}
	console.timeEnd('🔑 Created permissions...');

	console.time('👑 Created roles...');
	await prisma.role.create({
		data: {
			name: 'admin',
			permissions: {
				connect: await prisma.permission.findMany({
					select: { id: true },
					where: { access: 'any' },
				}),
			},
		},
	});

	await prisma.role.create({
		data: {
			name: 'user',
			permissions: {
				connect: await prisma.permission.findMany({
					select: { id: true },
					where: { access: 'own' },
				}),
			},
		},
	});
	console.timeEnd('👑 Created roles...');

	console.time('🏎️  Created car spending types...');
	await prisma.carSpendingType.create({
		data: {
			name: 'Fuel',
		},
	});

	await prisma.carSpendingType.create({
		data: {
			name: 'Repair',
		},
	});

	await prisma.carSpendingType.create({
		data: {
			name: 'New purchase',
		},
	});
	console.timeEnd('🏎️  Created car spending types...');

	console.time('📚 Created book reading statuses...');
	await prisma.bookReadingStatus.create({
		data: {
			name: 'Want to read',
		},
	});

	await prisma.bookReadingStatus.create({
		data: {
			name: 'Reading',
		},
	});

	await prisma.bookReadingStatus.create({
		data: {
			name: 'Have read',
		},
	});
	console.timeEnd('📚 Created book reading statuses...');

	console.time(`🐨 Created user "volodya"`);

	const volodyaImages = await promiseHash({
		volodyaUser: img({
			filepath: './tests/fixtures/images/user/kody.png',
			altText: 'My profile image, lol',
		}),
		cuteKoala: img({
			altText: 'an adorable koala cartoon illustration',
			filepath: './tests/fixtures/images/my-books/cute-koala.png',
		}),
		koalaEating: img({
			altText: 'a cartoon illustration of a koala in a tree eating',
			filepath: './tests/fixtures/images/my-books/koala-eating.png',
		}),
		koalaCuddle: img({
			altText: 'a cartoon illustration of koalas cuddling',
			filepath: './tests/fixtures/images/my-books/koala-cuddle.png',
		}),
		mountain: img({
			altText: 'a beautiful mountain covered in snow',
			filepath: './tests/fixtures/images/my-books/mountain.png',
		}),
		koalaCoder: img({
			altText: 'a koala coding at the computer',
			filepath: './tests/fixtures/images/my-books/koala-coder.png',
		}),
		koalaMentor: img({
			altText:
				'a koala in a friendly and helpful posture. The Koala is standing next to and teaching a woman who is coding on a computer and shows positive signs of learning and understanding what is being explained.',
			filepath: './tests/fixtures/images/my-books/koala-mentor.png',
		}),
		koalaSoccer: img({
			altText: 'a cute cartoon koala kicking a soccer ball on a soccer field ',
			filepath: './tests/fixtures/images/my-books/koala-soccer.png',
		}),
	});

	const githubUser = await insertGitHubUser('MOCK_GITHUB_CODE_VOLODYA', {
		primaryEmailAddress: 'volodya@gk.dev',
	});

	// ------------- Book reading statuses -------------

	const wantToRead = await prisma.bookReadingStatus.findFirstOrThrow({
		select: { id: true },
		where: { name: 'Want to read' },
	});

	const reading = await prisma.bookReadingStatus.findFirstOrThrow({
		select: { id: true },
		where: { name: 'Reading' },
	});

	const haveRead = await prisma.bookReadingStatus.findFirstOrThrow({
		select: { id: true },
		where: { name: 'Have read' },
	});

	// ------------- Book reading statuses -------------

	// ------------- Car Spendings -------------

	const fuelType = await prisma.carSpendingType.findFirstOrThrow({
		select: { id: true },
		where: { name: 'Fuel' },
	});

	const repairType = await prisma.carSpendingType.findFirstOrThrow({
		select: { id: true },
		where: { name: 'Repair' },
	});

	const newPurchaseType = await prisma.carSpendingType.findFirstOrThrow({
		select: { id: true },
		where: { name: 'New purchase' },
	});

	// ------------- Car Spendings -------------

	await prisma.user.create({
		select: { id: true },
		data: {
			email: 'skinner.vova@gmail.com',
			username: 'vvolodya',
			name: 'Volodya',
			image: { create: volodyaImages.volodyaUser },
			roles: { connect: [{ name: 'admin' }, { name: 'user' }] },
			password: { create: createPassword('Qwerty!23') },
			connections: {
				create: { providerName: 'github', providerId: githubUser.profile.id },
			},
			carSpendings: {
				create: [
					{
						typeId: fuelType.id,
						date: new Date(),
						value: 1000,
						comment: 'Перед баней заправился',
					},
					{
						typeId: repairType.id,
						date: new Date(2023, 6, 2),
						value: 500,
						comment: 'Поменял масло',
					},
					{
						typeId: newPurchaseType.id,
						date: new Date(2024, 0, 6),
						value: 3000,
						comment: 'Новые дворники',
					},
				],
			},
			books: {
				create: [
					{
						id: 'd27a197e',
						title: 'My best book',
						author: 'Volodya',
						year: 2022,
						statusId: reading.id,
						description: 'My best book ever',
						comment: 'My best book ever for real',
						images: {
							create: [volodyaImages.cuteKoala, volodyaImages.koalaEating],
						},
					},
					{
						id: '414f0c09',
						title: 'My best book2',
						author: 'Volodya',
						year: 2022,
						statusId: haveRead.id,
						description: 'My best book ever',
						comment: 'My best book ever for real',
						images: {
							create: [volodyaImages.cuteKoala, volodyaImages.koalaEating],
						},
					},
					{
						id: 'bb79cf45',
						title: 'My best book3',
						author: 'Volodya',
						year: 2022,
						statusId: wantToRead.id,
						description: 'My best book ever',
						comment: 'My best book ever for real',
						images: {
							create: [volodyaImages.cuteKoala, volodyaImages.koalaEating],
						},
					},
					{
						id: '9f4308be',
						title: 'My best book4',
						author: 'Volodya',
						year: 2022,
						statusId: wantToRead.id,
						description: 'My best book ever',
						comment: 'My best book ever for real',
						images: {
							create: [volodyaImages.cuteKoala, volodyaImages.koalaEating],
						},
					},
				],
			},
		},
	});
	console.timeEnd(`🐨 Created user "volodya"`);

	console.timeEnd(`🌱 Database has been seeded`);
}

seed()
	.catch((e: any) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
