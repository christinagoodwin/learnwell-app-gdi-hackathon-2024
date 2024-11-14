from django.db import models

from .study_plan import Study_plan

class Study_session(models.Model):
    plan=models.ForeignKey(Study_plan,on_delete=models.CASCADE)
    start_time= models.TimeField()
    end_time=models.TimeField()
    status=models.CharField(max_length=10)
    focus_level=models.IntegerField()

