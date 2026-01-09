from django.urls import re_path, path
from django.views.generic import TemplateView

urlpatterns = [
    # API routes can be inserted here, e.g. path('api/...', include(...))

    # Catch-all for SPA: return the built index.html for any non-API path
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]
