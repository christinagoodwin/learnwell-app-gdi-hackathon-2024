from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class OpenAI(APIView):

    def post(self,request):
        return Response({"message": "POST request. Place holder for API???? "})
    
    def get(self, request):
        # Placeholder response
        return Response({"message": "GET Request. Place holder for API???? "}, status=status.HTTP_200_OK)
