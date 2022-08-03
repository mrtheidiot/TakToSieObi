from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from .models import Event, Tutorial, Button, HomePage

class EventSerializer(ModelSerializer):
  class Meta():
    model = Event
    fields = ('__all__')

class TutorialSerializer(ModelSerializer):
  class Meta():
    model = Tutorial
    fields = ('id', 'title', 'description')

class HomePageSerializer(ModelSerializer):
  class Meta():
    model = HomePage
    fields = ('__all__')

class ButtonSerializer(ModelSerializer):
  class Meta():
    model = Button
    fields = ('__all__')
