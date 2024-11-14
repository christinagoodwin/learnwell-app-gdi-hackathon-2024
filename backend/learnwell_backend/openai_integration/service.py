from openai import OpenAI



client = OpenAI()


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
                        "required": ["subject", "description", "key_concepts", "details"],
                        "additionalProperties": False
                    }
                }
            }
        }
    ) 
    return response

