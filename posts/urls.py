from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='Post-home'),
    path('post/<slug>', views.single_post, name='Post-details'),
    path('post/comment/<str:id>', views.post_comment, name='Post-comment'),
    path('contactus/', views.contactus, name='Contact-us'),
    path('about/', views.about, name='about'),
    path('posts/', views.allposts, name='posts'),
    path('diagnostics/',views.diagnostics, name='diagnostics'),


]

