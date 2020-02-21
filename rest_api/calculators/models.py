from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Calculator(models.Model):
  user = models.ForeignKey(User, related_name='calculators', on_delete=models.CASCADE)
  packs_per_day = models.CharField(max_length=100)
  entry = models.TextField(null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  editable = models.BooleanField(default=True)

  class Meta:
    ordering = ['user']
