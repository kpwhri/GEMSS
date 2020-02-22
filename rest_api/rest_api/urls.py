from django.conf.urls import include
from django.contrib import admin
from django.urls import path

# from journals.urls import urlpatterns

urlpatterns = [
    path('participant/', include('participants.urls')),
    path('journal/', include('journals.urls')),
    path('tracker/', include('trackers.urls')),
    path('calculator/', include('calculators.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]
