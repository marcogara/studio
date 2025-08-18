import { createNextApiHandler } from '@genkit-ai/next';
import { ai } from '@/ai/genkit';
import '@/ai/flows/generate-project-description';

export const { GET, POST } = createNextApiHandler({ ai });
