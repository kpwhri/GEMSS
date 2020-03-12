import datetime

from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from trackers.models import Tracker
from trackers.serializers import TrackerSerializer, UserSerializer


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'trackers': reverse('tracker-list', request=request, format=format)
    })


class TrackerViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provide 'list', 'detail', 'create', 'retrieve',
    and 'destroy' actions.
    """
    queryset = Tracker.objects.all()
    serializer_class = TrackerSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides 'list' and 'detail' actions
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GraphList(generics.ListAPIView):
    serializer_class = TrackerSerializer

    def get_queryset(self):
        """
        Restricts tracker data to past 7/30 days to limit data needed
        for Cigarette Tracker graph display
        """
        queryset = Tracker.objects.all()
        days_past = self.request.query_params.get('days_past', 7)
        cutoff_date = datetime.date.today() - datetime.timedelta(days=int(days_past))
        queryset = queryset.filter(track_dt__gte=cutoff_date).only(
            'cigs_num', 'track_dt').order_by('track_dt', 'cigs_num')
        return queryset
