from django.urls import path
from . import views

urlpatterns = [ 
    path("tutorials", views.tutorial_list),
    path("tutorials/<pk>/", views.tutorial_detail),
]
