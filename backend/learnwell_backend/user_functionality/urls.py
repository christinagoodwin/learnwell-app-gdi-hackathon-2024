from django.urls import path, include
from .views import (
    WelcomeView,
    TopicChoiceView,
    TopicOverviewView,
    StudyPlanView,
    StudySessionStartView,
    BreakSuggestionView,
    HourCompletionReminderView,
)

urlpatterns = [
    path('welcome/', WelcomeView.as_view(), name='welcome'),
    path('choose-topic/', TopicChoiceView.as_view(), name='choose_topic'),
    path('summary/', TopicOverviewView.as_view(), name='topic_overview'),
    path('study-plan/', StudyPlanView.as_view(), name='study_plan'),
    path('start-session/', StudySessionStartView.as_view(), name='start_session'),
    path('break-suggestion/', BreakSuggestionView.as_view(), name='break_suggestion'),
    path('hour-reminder/', HourCompletionReminderView.as_view(), name='hour_reminder'),
    
]


