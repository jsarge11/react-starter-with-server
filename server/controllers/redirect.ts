import { Request, Response } from 'express';
import path from 'path';

export const redirect = (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '/../../dist/index.html'), function (err) {
		if (err) {
			res.status(500).send(err);
		}
	});
};
