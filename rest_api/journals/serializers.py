from django.contrib.auth.models import User
from rest_framework import serializers

from journals.models import Journal

class JournalSerializer(serializers.HyperlinkedModelSerializer):
  user = serializers.ReadOnlyField(source='user.username')

  class Meta:
    model = Journal
    fields = ['url', 'id', 'title', 'entry', 'created_at', 'user']


  def create(self, validated_data):
    """
    Create and return a new 'Journal' entry, given the validated data
    """
    return Journal.objects.create(**validated_data)

  def update(self, instance, validated_data):
    """
    Update and return an existing 'Journal' entry
    """
    instance.title = validated_data.get('title', instance.title)
    instance.entry = validated_data.get('entry', instance.entry)
    instance.save()
    return instance

class UserSerializer(serializers.HyperlinkedModelSerializer):
  journals = serializers.PrimaryKeyRelatedField(many=True, queryset=Journal.objects.all())

  class Meta:
    model = User
    fields = ['url', 'id', 'username', 'journals']
