from django.urls import path, include
from rest_framework.routers import DefaultRouter

from journals import views

# Create router & register ViewSets
router = DefaultRouter()
router.register(r'entries', views.JournalViewSet)
router.register(r"users", views.UserViewSet)

urlpatterns = [
    path('api', views.api_root),
    path('', include(router.urls)),
]
