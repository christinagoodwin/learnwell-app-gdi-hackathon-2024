from django.db import models

from .user_entity import User_entitiy



class Topic(models.Model):
    name=models.CharField(max_length=30)
    description=models.TextField(max_length=200)
    created_by= models.ForeignKey(User_entitiy,on_delete=models.CASCADE)
