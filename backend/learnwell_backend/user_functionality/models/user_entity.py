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

    

    