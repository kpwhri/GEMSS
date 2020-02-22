from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Calculator(models.Model):
  user = models.ForeignKey(User, related_name='calculators', on_delete=models.CASCADE)
  packs_per_day = models.PositiveSmallIntegerField()
  cost_per_pack = models.DecimalField(max_digits=5, decimal_places=2)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    ordering = ['user']
