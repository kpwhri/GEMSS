from django.contrib.auth.models import User
from rest_framework import serializers

from calculators.models import Calculator

class CalculatorSerializer(serializers.HyperlinkedModelSerializer):
  user = serializers.ReadOnlyField(source='user.username')

  class Meta:
    model = Calculator
    fields = ['url', 'id', 'packs_per_day', 'cost_per_pack', 'created_at', 'user']


  def create(self, validated_data):
    """
    Create and return a new 'Calculator' entry, given the validated data
    """
    return Calculator.objects.create(**validated_data)

  def update(self, instance, validated_data):
    """
    Update and return an existing 'Calculator' entry
    """
    instance.packs_per_day = validated_data.get('packs_per_day', instance.packs_per_day)
    instance.cost_per_pack = validated_data.get('cost_per_pack', instance.cost_per_pack)
    instance.save()
    return instance

class UserSerializer(serializers.HyperlinkedModelSerializer):
  calculators = serializers.PrimaryKeyRelatedField(many=True, queryset=Calculator.objects.all())

  class Meta:
    model = User
    fields = ['url', 'id', 'username', 'calculators']
