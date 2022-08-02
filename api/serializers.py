from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from .models import Event, Tutorial

class EventSerializer(ModelSerializer):
  class Meta():
    model = Event
    fields = ('__all__')

class TutorialSerializer(ModelSerializer):
  class Meta():
    model = Tutorial
    fields = ('id', 'title', 'description')