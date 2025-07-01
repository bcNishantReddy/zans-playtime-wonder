
import { google } from '@ai-sdk/google';
import { generateObject, generateText } from 'ai';
import { z } from 'zod';

const GOOGLE_API_KEY = 'AIzaSyAzmUR8R2PaE-w5b1ICKq4eUDOEu82b9Xc';

// Rate limiting
let lastRequestTime = 0;
const RATE_LIMIT_MS = 2000; // 2 seconds between requests

const CharacterSchema = z.object({
  characters: z.array(z.object({
    name: z.string().min(1),
    description: z.string().min(1).max(100)
  }))
});

export interface Character {
  name: string;
  description: string;
}

export interface StoryData {
  characters: Character[];
  story: string;
}

export async function generateStoryFromImage(imageData: string): Promise<StoryData> {
  // Rate limiting
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < RATE_LIMIT_MS) {
    await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_MS - timeSinceLastRequest));
  }
  lastRequestTime = Date.now();

  try {
    // Initialize the model
    const model = google('gemini-1.5-flash', {
      apiKey: GOOGLE_API_KEY
    });

    // Step 1: Extract characters from image
    const charactersResult = await generateObject({
      model,
      prompt: `You are analyzing an image that shows 3 story dice with embroidered characters. Identify the characters clearly and describe what they represent in kid-friendly terms. Return a JSON object with characters array. Keep descriptions family-friendly and under 100 characters each. Do not include any other text or explanations.`,
      schema: CharacterSchema,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Analyze this image of story dice and extract the characters:'
            },
            {
              type: 'image',
              image: imageData
            }
          ]
        }
      ]
    });

    // Ensure characters have required properties
    const characters: Character[] = charactersResult.object.characters.map(char => ({
      name: char.name || 'Mystery Character',
      description: char.description || 'A magical character ready for adventure'
    }));

    // Step 2: Generate story using the characters
    const characterDescriptions = characters.map(c => `${c.name} (${c.description})`).join(', ');
    
    const storyResult = await generateText({
      model,
      prompt: `You are a friendly AI story weaver for children. Using these 3 elements: ${characterDescriptions}, write a magical story for children aged 5–10. The story should be 3–5 paragraphs long, lighthearted, fun, and imaginative. Make sure the characters have names and go on an adventure together. Keep the story family-friendly and appropriate for young children. Return only the story text, no title or introduction. Maximum 800 words.`,
      maxTokens: 1000,
      temperature: 0.8
    });

    return {
      characters,
      story: storyResult.text.trim()
    };

  } catch (error) {
    console.error('Story generation error:', error);
    
    // Fallback story generation
    const fallbackCharacters: Character[] = [
      { name: "Magical Friend", description: "A helpful character ready for adventure" },
      { name: "Brave Explorer", description: "Someone who loves to discover new things" },
      { name: "Wise Guide", description: "A character who knows the way forward" }
    ];

    const fallbackStory = `Once upon a time, in a land filled with wonder and magic, three special friends met at the edge of an enchanted forest. 

The Magical Friend sparkled with joy and had the power to make flowers bloom with just a smile. The Brave Explorer carried a tiny backpack filled with curiosity and courage. The Wise Guide held an ancient map that showed paths to the most amazing places.

Together, they decided to go on the greatest adventure of their lives! They walked through rainbow-colored meadows where butterflies danced and sang sweet melodies. They crossed a bubbling brook where friendly fish jumped up to say hello.

As the sun began to set, painting the sky in beautiful pinks and oranges, the three friends realized that the best part of their adventure wasn't the magical places they visited, but the friendship they shared along the way.

And they all lived happily ever after, knowing that tomorrow would bring another wonderful adventure! 🌟`;

    return {
      characters: fallbackCharacters,
      story: fallbackStory
    };
  }
}
