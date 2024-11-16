from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from openai_integration.service import generate_text


from openai_integration.service import summarize_text

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

        query=summarize_text(request.data, max_tokens=180)
        response_data = {
            "original_text": request.data,
            "summary": query,
        }

        return Response(response_data, status=status.HTTP_200_OK)

class StudyPlanView(APIView):
    def post(self, request):
        # Extract user input from the request
        user_input = request.data.get('input') 

        if not user_input:
            return Response(
                {"error": "Input is required."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Fetch summary using OpenAI
        response = generate_text(user_input)

        # Ensure the response contains valid data
        if not isinstance(response, dict):
            return Response(
                {"error": "Unexpected response format from OpenAI."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        return Response(response, status=status.HTTP_200_OK)

class StudySessionStartView(APIView):
    def post(self, request):
        # Get the session details from the request or initialize a session
        session_data = {
            "session_id": "unique-session-id",
            "status": "started",
            "message": "Study session started successfully"
        }
        
        # Here you can add more logic to track the session or save it in a database

        return Response(session_data, status=status.HTTP_200_OK)

class BreakSuggestionView(APIView):
    def get(self, request):
        # Placeholder response
        return Response({"message": "Break and activity suggestions"}, status=status.HTTP_200_OK)

class HourCompletionReminderView(APIView):
    def get(self, request):
        # Placeholder response
        
        return Response({"message": "One hour completed, reminder to take a break"}, status=status.HTTP_200_OK)
    





