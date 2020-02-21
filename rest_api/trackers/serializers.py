from django.contrib.auth.models import User
from rest_framework import serializers

from trackers.models import Tracker

class TrackerSerializer(serializers.HyperlinkedModelSerializer):
  user = serializers.ReadOnlyField(source='user.username')

  class Meta:
    model = Tracker
    fields = ['url', 'user', 'id', 'cigs_num', 'track_dt', 'created_at']


  def create(self, validated_data):
    """
    Create and return a new 'Tracker' entry, given the validated data
    """
    return Tracker.objects.create(**validated_data)

  def update(self, instance, validated_data):
    """
    Update and return an existing 'Tracker' entry
    """
    instance.cigs_num = validated_data.get('cigs_num', instance.cigs_num)
    instance.track_dt = validated_data.get('track_dt', instance.track_dt)
    instance.save()
    return instance

class UserSerializer(serializers.HyperlinkedModelSerializer):
  trackers = serializers.PrimaryKeyRelatedField(many=True, queryset=Tracker.objects.all())

  class Meta:
    model = User
    fields = ['url', 'id', 'username', 'trackers']
