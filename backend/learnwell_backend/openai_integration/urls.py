
from django.urls import path, include

urlpatterns = [
    
    path('api-stuff', include('user_functionality.urls')),
    
]