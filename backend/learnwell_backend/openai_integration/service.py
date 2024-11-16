from openai import OpenAI
import openai
import os
from dotenv import load_dotenv

load_dotenv()

apiKey = os.getenv('OPENAI_API_KEY')
client = OpenAI(api_key=apiKey)

def summarize_text(text, max_tokens=180):
    prompt = f"Summarize the following text in a few sentences, the student needs to study on it:\n\n{text}"

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=max_tokens
        )

        summary = response.choices[0].message.content.strip()
        return summary

    except Exception as e:
        print(f"Error with OpenAI API request: {e}")
        return None


# Old Start
# def summarize_text(text, max_tokens=180):
#     # Create the prompt to instruct the model for summarization
#     prompt = f"Summarize the following text in a few sentences:\n\n{text}"

#     try:
#         # Call the OpenAI API with the summarization prompt
#         response = openai.Completion.create(
#             engine="gpt-3.5-turbo-instruct",  # or "gpt-4" if you're using GPT-4
#             prompt=prompt,
#             max_tokens=max_tokens,
#             n=1,  # Number of responses
#             stop=None,  # We don't need to specify a stopping sequence here
#             temperature=0.7  # Adjusts the randomness of the response
#         )

#         # Extract the text response
#         summary = response.choices[0].text.strip()
#         return summary

#     except Exception as e:
#         print(f"Error with OpenAI API request: {e}")
#         return None
    
# Old End

def generate_text(user_prompt):
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "user", 
                    "content": { "type": "text", "text": user_prompt }
                },
            ],
            response_format={
                "type": "json_schema",
                "json_schema": {
                    "name": "topics_schema",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "subject": {
                                    "description": "The subject area, e.g., history, science",
                                    "type": "string"
                                },
                            "description":{
                                "description": "A brief summary of the topic",
                                "type": "string"

                            },
                            "key_concepts":{
                                "description": "An array of key concepts or subtopics for this topic",
                                "type": "array",
                                "items": {
                                "type": "string"
                                }

                            },
                            "details": {
                                    "description": "The generated details relevant to the student's prompt in this subject",
                                    "type": "string"
                                },
                            "study_plan":{
                                "description": "Create a study plan based off of the given topic",
                                "type": "string"

                            },
                            "required": ["subject", "description", "key_concepts", "details","study_plan"],
                            "additionalProperties": False
                        }
                    }
                }
            }
        ) 
        return response
    except openai.RateLimitError as e:
        # Mock response for development
        return {
            "subject": "Mathematics",
            "description": "An overview of math study plans",
            "key_concepts": ["Algebra", "Geometry", "Calculus"],
            "details": "Focus on core areas like algebra and geometry for foundational understanding.",
            "study_plan": "Study algebra for 2 hours daily and practice problems from a textbook."
        }