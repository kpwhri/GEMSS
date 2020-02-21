from django.conf.urls import include
from django.contrib import admin
from django.urls import path

from journals.urls import urlpatterns

urlpatterns = [
    path('journal/', include('journals.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]
