from django.urls import path
from . import views

urlpatterns = [ 
    path("tutorials", views.tutorial_list),
    path("tutorials/<pk>/", views.tutorial_detail),
    path("homepage/", views.home_page_list),
    path("homepage/<pk>/", views.home_page_detail),
    path("buttons/", views.buttons_list)
]
 