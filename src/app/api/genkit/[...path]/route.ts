import { nextPlugin } from '@genkit-ai/next';
import { genkit } from '@/ai/genkit';
import '@/ai/flows/generate-project-description';

export const { GET, POST } = genkit({
  plugins: [
    nextPlugin(),
  ],
});
