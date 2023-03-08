import fs from 'node:fs';

const file = '.vercel/output/config.json';

const config = {
	...JSON.parse(fs.readFileSync(file, 'utf-8')),
	images: {
		sizes: [640, 768, 1024, 1280, 1536],
		domains: [],
		minimumCacheTTL: 60,
		formats: ['image/avif', 'image/webp', 'image/jpeg', 'image/jpg', 'image/png']
	}
};

fs.writeFileSync(file, JSON.stringify(config, null, 2));
