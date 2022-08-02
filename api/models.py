from django.db import models

class Event (models.Model):
    title = models.CharField(max_length=500)
    desc1 = models.CharField(max_length=500)
    link1 = models.CharField(max_length=500)
    desc2 = models.CharField(max_length=500, blank=True, null=True)
    link2 = models.CharField(max_length=500, blank=True, null=True)
    desc3 = models.CharField(max_length=500, blank=True, null=True)
    link3 = models.CharField(max_length=500, blank=True, null=True)
    day = models.CharField(max_length=20)
    month = models.CharField(max_length=20)
    year = models.CharField(max_length=20)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

class Tutorial(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')