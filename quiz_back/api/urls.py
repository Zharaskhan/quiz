from django.urls import path
from api import views, auth_views

urlpatterns = [
    path('contacts/', views.ContactList.as_view()),
    path('contacts/<int:pk>/', views.ContactDetail.as_view()),
    path('login/', auth_views.login),
    path('logout/', auth_views.logout)
]