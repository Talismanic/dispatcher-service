import express from 'express';
import {processDispatchOperation} from '../services/dispatchService';
import { addTraceId } from '../middleware/tracing';

const router = express.Router();

router.get('/:characterId', addTraceId, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const characterId = req.params.characterId
    const characterDetails = await processDispatchOperation(characterId);
    res.json(characterDetails)
});

export default router;
