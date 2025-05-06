from django.urls import path
from . import views
urlpatterns = [
    path('', views.welcome, name='welcome'),
    path('home/', views.welcome, name='welcome'),
    path('playlist/', views.playlist, name='playlist'),
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
]