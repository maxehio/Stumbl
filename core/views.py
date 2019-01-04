from django.shortcuts import render
from django.conf import settings
# Create your views here.

def index(request):
    return render(request, 'index.html', { 'google_api_key': settings.GOOGLE_MAPS_API_KEY})