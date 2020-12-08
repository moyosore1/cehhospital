from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('subscribe/', views.subscribe, name='subscribe'),
    path('newsletter/', views.send_newsletter, name='send_newsletter')


]
