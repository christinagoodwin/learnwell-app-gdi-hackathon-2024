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

        fakePerson= "Learning is the process of acquiring new understanding, knowledge, behaviors, skills, values, attitudes, and preferences.[1] The ability to learn is possessed by humans, non-human animals, and some machines; there is also evidence for some kind of learning in certain plants.[2] Some learning is immediate, induced by a single event (e.g. being burned by a hot stove), but much skill and knowledge accumulate from repeated experiences.[3] The changes induced by learning often last a lifetime, and it is hard to distinguish learned material that seems to be  from that which cannot be retrieved.[4]"
        # Placeholder response
        query=summarize_text(fakePerson, max_tokens=180)
        response_data = {
            "original_text": fakePerson,
            "summary": query,
        }

        print(response_data)
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
    





