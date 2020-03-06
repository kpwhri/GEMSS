from django.urls import path, include
from rest_framework.routers import DefaultRouter

from trackers import views

# Create router & register ViewSets
router = DefaultRouter()
router.register(r'trackers', views.TrackerViewSet)
router.register(r"users", views.UserViewSet)

urlpatterns = [
    path('api', views.api_root),
    path('graph', views.GraphList.as_view()),
    path('', include(router.urls)),
]
