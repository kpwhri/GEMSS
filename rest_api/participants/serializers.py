from django.contrib.auth.models import User
from rest_framework import serializers

from participants.models import Participant

class ParticipantSerializer(serializers.HyperlinkedModelSerializer):
  user = serializers.ReadOnlyField(source='user.username')

  class Meta:
    model = Participant
    fields = ['url', 'user', 'id', 'short_name', 'email', 'phone', 'created_at']


  def create(self, validated_data):
    """
    Create and return a new 'Participant' entry, given the validated data
    """
    return Participant.objects.create(**validated_data)

  def update(self, instance, validated_data):
    """
    Update and return an existing 'Participant' entry
    """
    instance.short_name = validated_data.get('short_name', instance.short_name)
    instance.email = validated_data.get('email', instance.email)
    instance.phone = validated_data.get('phone', instance.phone)
    instance.save()
    return instance

class UserSerializer(serializers.HyperlinkedModelSerializer):
  participants = serializers.PrimaryKeyRelatedField(many=True, queryset=Participant.objects.all())

  class Meta:
    model = User
    fields = ['url', 'id', 'username', 'participants']
