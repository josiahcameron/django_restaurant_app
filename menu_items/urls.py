from django.urls import path

from .views import MenuItemAPIView

urlpatterns = [
    path('', MenuItemAPIView.as_view())
]