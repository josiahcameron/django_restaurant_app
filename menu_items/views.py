from rest_framework import generics

from .models import MenuItem
from .serializers import MenuItemSerializer

class MenuItemAPIView(generics.ListAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer








# from django.views.generic import ListView

# from django.shortcuts import render

# from .models import MenuItem

# # Create your views here.
# class MenuItemsView(ListView):
#     model = MenuItem
#     template_name = 'menu_item.html'