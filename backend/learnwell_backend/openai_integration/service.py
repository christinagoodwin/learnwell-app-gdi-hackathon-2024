
from openai import OpenAI, api_key

# openai = OpenAI(a);
from config import apiKey

client = OpenAI(api_key=apiKey)

def summarize_text(text, max_tokens=180):
    prompt = f"Summarize the following text in a few sentences:\n\n{text}"

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
    


def generate_text(user_prompt):

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
