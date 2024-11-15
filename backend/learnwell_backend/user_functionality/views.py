from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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
        # Placeholder response
        return Response({"message": "Generated study plan ideas"}, status=status.HTTP_200_OK)

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
    





