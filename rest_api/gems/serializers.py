from django.contrib.auth.models import User
from rest_framework import serializers

from gems.models import Gem, PageGem, PageRead, GemStatus

class GemSerializer(serializers.Serializer):
  pass
