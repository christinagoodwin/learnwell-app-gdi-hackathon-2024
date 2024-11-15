
from django.db import models
'''
Class that stores user information

'''


class User_entitiy(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    username=models.CharField(max_length=60)
    email=models.CharField(max_length=60)
    password=models.CharField(max_length=15)
    preferences=models.TextField(max_length=150)

class Topic(models.Model):
    name=models.CharField(max_length=30)
    description=models.TextField(max_length=200)
    created_by= models.ForeignKey(User_entitiy,on_delete=models.CASCADE)

'''
When the User chooses a topic a study plan is created

'''

class Study_plan(models.Model):
  user=models.ForeignKey(User_entitiy,on_delete=models.CASCADE)
  topic=models.ForeignKey(Topic, on_delete=models.CASCADE)
  total_duration=models.TimeField()
  session_duration=models.TimeField()
  break_duration=models.TimeField()

class Study_session(models.Model):
    plan=models.ForeignKey(Study_plan,on_delete=models.CASCADE)
    start_time= models.TimeField()
    end_time=models.TimeField()
    status=models.CharField(max_length=10)
    focus_level=models.IntegerField()


class Break_Activity(models.Model):
    name=models.CharField(max_length=50)
    description= models.TextField(max_length=100)


