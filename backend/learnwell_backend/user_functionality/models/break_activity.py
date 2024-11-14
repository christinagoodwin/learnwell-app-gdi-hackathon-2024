from django.db import models

class Break_Activity(models.Model):
    name=models.CharField(max_length=50)
    description= models.TextField(max_length=100)
