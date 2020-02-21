from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Participant(models.Model):
  user = models.ForeignKey(User, related_name='participants', on_delete=models.CASCADE)
  short_name = models.CharField(max_length=100)
  email = models.EmailField()
  phone = models.CharField(max_length=20)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    ordering = ['user']
