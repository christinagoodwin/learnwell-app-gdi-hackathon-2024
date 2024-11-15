import openai  # for handling errors
from openai import OpenAI


client = OpenAI()


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