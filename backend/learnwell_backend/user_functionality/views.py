from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class WelcomeView(APIView):
    def get(self, request):
        # Placeholder response
        return Response({"message": "Welcome and setup tips"}, status=status.HTTP_200_OK)

class TopicChoiceView(APIView):
    def post(self, request):
        topic = request.data.get("topic", "No topic provided")
        # Placeholder response
        return Response({"message": f"Chosen topic: {topic}"}, status=status.HTTP_200_OK)

class TopicOverviewView(APIView):
    def get(self, request):
        # Placeholder response
        return Response({"message": "Topic overview and study tips"}, status=status.HTTP_200_OK)

class StudyPlanView(APIView):
    def post(self, request):
        # Extract user input from the request
        user_input = request.data.get('input', '')  # Default to an empty string if 'input' isn't provided

        # Mock JSON data based on user input
        mock_response = {
            "input_received": user_input,
            "choices": [
                {
                    "text": f"Here's a mock study plan idea based on your input: {user_input}",
                    "index": 0,
                    "logprobs": None,
                    "finish_reason": "stop"
                }
            ],
            "usage": {
                "prompt_tokens": 10,
                "completion_tokens": 15,
                "total_tokens": 25
            }
        }

        return Response(mock_response, status=status.HTTP_200_OK)

class StudySessionStartView(APIView):
    def post(self, request):
        # Placeholder response
        return Response({"message": "Study session started"}, status=status.HTTP_200_OK)

class BreakSuggestionView(APIView):
    def get(self, request):
        # Placeholder response
        return Response({"message": "Break and activity suggestions"}, status=status.HTTP_200_OK)

class HourCompletionReminderView(APIView):
    def get(self, request):
        # Placeholder response
        return Response({"message": "One hour completed, reminder to take a break"}, status=status.HTTP_200_OK)




