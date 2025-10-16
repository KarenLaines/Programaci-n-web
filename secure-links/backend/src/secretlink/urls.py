from django.contrib import admin
from django.urls import path, include

# en secretlink/urls.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Bienvenido a Secure Links!")

from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Bienvenido a Secure Links!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('links.urls')),  # tu app
    path('', home),  # la raíz ahora responde
]

