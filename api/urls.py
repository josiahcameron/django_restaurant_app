from django.urls import path, include

urlpatterns = [
    path('menu_items/', include('menu_items.urls')),
]