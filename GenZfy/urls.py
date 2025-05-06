from django.urls import path
from . import views
urlpatterns = [
    path('', views.welcome, name='welcome'),
    path('home/', views.welcome, name='welcome'),
    path('playlist/', views.playlist, name='playlist'),
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('logout/', views.logout_view, name='logout'),
    path('contact/', views.contact, name='contact'),
    path('gamersden/', views.gamersden, name='gamersden'),
    path('artists/', views.artists, name='artists'),
]