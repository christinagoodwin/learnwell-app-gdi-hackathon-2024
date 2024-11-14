from django.db import models

from .user_entity import User_entitiy

from .topic import Topic


'''
When the User chooses a topic a study plan is created

'''

class Study_plan(models.Model):
  user=models.ForeignKey(User_entitiy,on_delete=models.CASCADE)
  topic=models.ForeignKey(Topic, on_delete=models.CASCADE)
  total_duration=models.TimeField()
  session_duration=models.TimeField()
  break_duration=models.TimeField()