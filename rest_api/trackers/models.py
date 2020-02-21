from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Tracker(models.Model):
  user = models.ForeignKey(User, related_name='trackers', on_delete=models.CASCADE)
  cigs_num = models.PositiveIntegerField()
  track_dt = models.DateField(null=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    ordering = ['user']
